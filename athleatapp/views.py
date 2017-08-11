# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from athleat.settings import *
import xmlrpclib
import random
import simplejson
import json
from django.utils.safestring import mark_safe
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
# Create your views here.


def getUserId(request):
	sock_common = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/common')
	uid = sock_common.login(DB_NAME, USERNAME, PASSWORD)
	return uid


def getLoggedUserData(request):

	uid = request.session['user_id']
	if uid:
		sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
		UID = getUserId(request)
		user_data = sock.execute(
			DB_NAME, UID, PASSWORD, 'res.users', 'read', uid, [])
		customer_data = sock.execute(
			DB_NAME, UID, PASSWORD, 'res.partner', 'read', user_data['partner_id'][0], [])
		customer_data.update({'email': user_data['login']})
		return customer_data


def doLogin(request):

	if request.method == 'POST':
		username = request.POST['email']
		password = request.POST['password']

		uid = sock_common.login(DB_NAME, username, password)
		if uid:
			request.session['user_id'] = uid
			request.session['password'] = password
			UID = getUserId(request)
			sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
			user_data = sock.execute(
				DB_NAME, UID, PASSWORD, 'res.users', 'read', uid, [])
			request.session['cid'] = user_data['partner_id'][0]
			customer_data = sock.execute(
				DB_NAME, UID, PASSWORD, 'res.partner', 'read', user_data['partner_id'][0], [])
			# return HttpResponseRedirect('/dashboard')
			return render(request, 'dashboard.html', {'user_data': customer_data})
		else:
			return render(request, 'login.html', {'error': 'Username or Password is wrong !'})

	return render(request, 'login.html', {})


def doLogout(request):
	for sesskey in request.session.keys():
		del request.session[sesskey]

	return HttpResponseRedirect('/')


def Index(request):

	return render(request, 'index.html', {})


def mealBuilder(request):

	content = []
	user_id = request.session['user_id']
	uid = getUserId(request)
	sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
	meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [
							('carb_type', '=', 'customize'),('customize_category','=','gourmet')])
	meal_data = sock.execute(DB_NAME, uid, PASSWORD,
							 'recipies.meal', 'read', meal_ids)

	# Customized items
	custom_meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [
								   ('carb_type', '=', 'customize'),('customize_category','=','own')])
	custom_meal_data = sock.execute(
		DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', custom_meal_ids)

	addon_ids = sock.execute(DB_NAME, uid, PASSWORD,
							 'addons.conf', 'search', [])
	addons_data = sock.execute(
		DB_NAME, uid, PASSWORD, 'addons.conf', 'read', addon_ids, [])

	# likes_ids = sock.execute(
	# 	DB_NAME, uid, PASSWORD, 'likes.dislikes', 'search', [('type','=','likes')])

	# likes_data = sock.execute(
	# 	DB_NAME, uid, PASSWORD, 'likes.dislikes', 'read', likes_ids)

	dislikes_ids = sock.execute(
		DB_NAME, uid, PASSWORD, 'likes.dislikes', 'search', [('type','=','dislikes')])

	dislikes_data = sock.execute(
		DB_NAME, uid, PASSWORD, 'likes.dislikes', 'read', dislikes_ids)


	return render(request, 'meal-builder.html', {'meal_info': meal_data, 'custom_meal_data': custom_meal_data, 'addons_data': addons_data, 'dislikes_data': meal_data})


def resetPassword(request):
	return render(request, 'resetpassword.html', {})


def register(request):
	return render(request, 'register.html', {})


def dashboard(request):
	customer_data = getLoggedUserData(request)
	return render(request, 'dashboard.html', {'user_data': customer_data})


def displayMenu(request):
	content = []
	uid = getUserId(request)
	sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
	meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [
							('carb_type', '=', 'customize'),('customize_category','=','gourmet')])
	meal_data = sock.execute(DB_NAME, uid, PASSWORD,
							 'recipies.meal', 'read', meal_ids)

	# Customized items
	custom_meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [
								   ('carb_type', '=', 'customize'),('customize_category','=','own')])
	custom_meal_data = sock.execute(
		DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', custom_meal_ids)
	return render(request, 'menu.html', {'meal_info': meal_data, 'custom_meal_data': custom_meal_data})


def userSignup(request):
	if request.method == 'POST':
		username = request.POST['email']
		password = request.POST['password']
		phone = request.POST['phone']
		name = request.POST['regname']
		gender = request.POST['sel1']
		email = request.POST['email']
		meal_pref = request.POST['meal-pref']
		try:
			uid = getUserId(request)
			user_id = sock.execute(DB_NAME, uid, PASSWORD, 'res.users', 'create', {
								   'login': username, 'new_password': password, 'name': name})
			user_data = sock.execute(
				DB_NAME, uid, PASSWORD, 'res.users', 'read', user_id, ['partner_id'])
			date_of_join = datetime.now().date().strftime('%Y-%m-%d')
			customer_update = sock.execute(DB_NAME, uid, PASSWORD, 'res.partner', 'write', user_data[
									   'partner_id'][0], {'contact_no': str(phone), 'customer': True, 'gender': str(gender), 'email': str(email),'meal_type':str(meal_pref),'date_of_join': date_of_join})
			request.session['user_id'] = user_id
			request.session['password'] = password
			request.session['partner_id'] = user_data['partner_id'][0]
			# return render(request, 'login.html', {'error': 'Thank You for
			# choosing us !'})
			return HttpResponseRedirect('/menu')
		except Exception as e:
			print e
			return render(request, 'login.html', {'error': 'Email already exists! If you forgot your password, please reset it !'})
	return HttpResponseRedirect('/menu')


@csrf_exempt
def getValues(request):

	body = eval(request.body)
	print body['meal_data']
	cust_dict = {}
	addons = []
	if 'Dislikes' in body:
		dislikes = eval(body['Dislikes'])
		dislikes = map(int, dislikes)
		cust_dict.update({'disliked_meals_ids': [[6, 0, dislikes]]})

	if 'Addons' in body:
		addons = eval(body['Addons'])

	if 'Meal Plan' in body:
		plan = body['Meal Plan']
		# print plan
		if plan == 'Athleat-h':
			cust_dict.update({'carb_type':'high carb'})
		
		elif plan == 'Athleat-l':
			cust_dict.update({'carb_type':'low carb'})

		elif plan == 'Customized':
			cust_dict.update({'carb_type':'customize'})
		else:
			plan = 'low carb'
	
	if request.method == 'POST':

		uid = getUserId(request)
		sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
		meal_item_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [
									 ('carb_type', '=', 'customize')])
		# meal_items = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', meal_item_ids, [
								  # 'quantity', 'protein', 'fat', 'carb', 'calories', 'price'])
		# customers = sock.execute(DB_NAME, uid, PASSWORD,'res.partner', 'search',[('carb_type', '=', 'customized')])
		meal_plan = []

		customer_id = request.session['partner_id']
		update = sock.execute(DB_NAME, uid, PASSWORD,'res.partner', 'write', customer_id, cust_dict)

		# for x in customers:
		# for i in meal_items:
		#   item_id = i['id']#fetching item id from meal items page
		#   i.update({'item':item_id,'meals_type':'regular'})#updating active meal record fields
		#   meal_plan += [(0, 0, i)]

		plan_vals = {
			'customer': customer_id,
			'days_per_week': 5,
			'no_of_weeks': int(body['Weeks']),
			'meals_per_day': int(body['Meals Per Day']),
			'meal_plan_type': str(cust_dict['carb_type']),
			# 'meal_plan' : random.sample(meal_plan, 4),#limiting total no of meal plan records-one2many
		}

		weeks = ['week1','week2','week3','week4','week5','week6','week7','week8','week9','week10','week11','week12']
		days = ['day1','day2','day3','day4','day5']
		meals_count = int(body['Meals Per Day'])
		item_id = []
		plan_recs =[]
		xyz=[]
		protein = str(body['mProteinTotal'])
		carb = str(body['mCarbTotal'])
		price = str(body['mPriceTotal'])
		fat = str(body['mFatTotal'])


		if plan == 'Customized':
			for i in weeks:
				for day in days:
					if body['meal_data'][i][day] != {}:
						day_meals = body['meal_data'][i][day]
						for x in range(len( day_meals.values())):
							item_id += [int(day_meals.values()[range(len( day_meals.values())).index(x)].values()[0])]
		
			
			for li in xrange(0, len(item_id), meals_count):
				xyz =  xyz+[item_id[li:li + meals_count]] 

			for day in days:
				if xyz[days.index(day)]:
					plan_recs += [(0,0,{
						'cust':customer_id,
						'items':[(6,0,xyz[days.index(day)])],
						'day':day,
						'carb':carb,
						'protein':protein,
						'fat':fat,
					})]

			plan_vals.update({'customer': customer_id,
						'days_per_week': 5,
						'no_of_weeks': int(body['Weeks']),
						'meals_per_day': int(body['Meals Per Day']),
					'meal_plan_type': str(cust_dict['carb_type']),
					'meal_plan':plan_recs
					})

		# sock.execute(DB_NAME, uid, PASSWORD,
		# 				 'meal.plans', 'create', {
		# 				 # 'cust':customer_id,
		# 				 							# 'addons':addons,
		# 											# 'meals_per_day':int(body['Meals Per Day']),
		# 											# 'meal_plan_type':'customize',
		# 											# 'no_of_weeks': int(body['Weeks']),
		# 											# 'days_per_week':5,
		# 											'meal_plan':plan_recs
		# 											})
		# if 'Meal Plan' in body:
		# 	plan = body['Meal Plan']
		# 	if str(plan) == 'Customized':
		# 		plan_vals.update({
		# 			'meal_plan_type': 'customize'
		# 		})
		# 	else:
		# 		plan_vals.update({
		# 			'meal_plan_type': 'low carb'
		# 		})

		# sock.execute('meal.plans','_onchange_current_date',1, 30)

		if sock.execute(DB_NAME, uid, PASSWORD, 'meal.plans', 'search', [('customer', '=', customer_id)]):
			pass
		else:
			sock.execute(DB_NAME, uid, PASSWORD,
						 'meal.plans', 'create', plan_vals)

	return HttpResponse('Hii')

# User Current Plan


def myPlan(request):
	uid = request.session['user_id']
	cid = request.session['cid']
	password = request.session['password']
	UID = getUserId(request)
	plan_id = sock.execute(DB_NAME, UID, PASSWORD, 'meal.plans', 'search', [
						   ('customer', '=', cid), ('state', '=', 'active')])
	items_data = None
	if plan_id:
		plan_id = plan_id[0 ]
		plan_data = sock.execute(
			DB_NAME, UID, PASSWORD, 'meal.plans', 'read', plan_id)

		if plan_data['meal_plan']:
			items_data = sock.execute(
				DB_NAME, uid, password, 'meal.meal', 'read', plan_data['meal_plan'], [])
	return render(request, 'my-plan.html', {'items_data': items_data})

 # User Account


def myAccount(request):

	customer_data = getLoggedUserData(request)
	if request.method == 'POST':
		user_vals = {}
		name = request.POST['fullname']
		if name:
			user_vals['name'] = name
		email = request.POST['account_email']
		if email:
			user_vals['email'] = email

		curr_pwd = request.POST['password_current']
		new_pwd = request.POST['password_1']

		cnf_pwd = request.POST['password_2']
		if cnf_pwd == new_pwd:
			user_vals['cnf_pwd'] = cnf_pwd
		else:
			return render(request, 'my-account.html', {'user_data': customer_data, 'msg': 'Passwords do not match'})
		try:
			uid = request.session['user_id']
			UID = getUserId(request)
			sock.execute(DB_NAME, UID, PASSWORD, 'res.users', 'write', [uid], {
						 'login': email, 'new_password': cnf_pwd, 'name': name})

			customer_data = getLoggedUserData(request)
			return render(request, 'my-account.html', {'user_data': customer_data})
		except Exception as e:
			return render(request, 'my-account.html', {'user_data': customer_data, 'msg': 'Email %s already exists !' % email})

	return render(request, 'my-account.html', {'user_data': customer_data})
