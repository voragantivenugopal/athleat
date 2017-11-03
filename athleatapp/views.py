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
			return HttpResponseRedirect('/meal-builder')
		except Exception as e:
			print e
			return render(request, 'register.html', {'error': 'Email already exists! If you forgot your password, please reset it !'})
	return HttpResponseRedirect('/menu')


@csrf_exempt
def getValues(request):

	body = eval(request.body)
	# print body
	cust_dict = {}
	addons = []
	if 'Dislikes' in body:
		dislikes = eval(body['Dislikes'])
		dislikes = map(int, dislikes)
		cust_dict.update({'disliked_meals_ids': [[6, 0, dislikes]]})

	if 'Addons' in body:
		addons = eval(body['Addons'])
		addons = map(int, addons)

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
		meal_plan = []

		customer_id = request.session['partner_id']
		update = sock.execute(DB_NAME, uid, PASSWORD,'res.partner', 'write', customer_id, cust_dict)

		plan_vals = {
			'customer': customer_id,
			'days_per_week': 5,
			'no_of_weeks': int(body['Weeks']),
			'meals_per_day': int(body['Meals Per Day']),
			'meal_plan_type': cust_dict['carb_type'],
			'addons': [[6, 0, addons]]
		}

		if plan_vals['meals_per_day'] == 2:
			if plan_vals['no_of_weeks'] == 4:
				plan_vals.update({ 'plan_price': 1600})
			elif plan_vals['no_of_weeks'] == 8:
				plan_vals.update({ 'plan_price': 1600 * 2})
			elif plan_vals['no_of_weeks'] == 12:
				plan_vals.update({ 'plan_price': 1600 * 3})
			else:
				pass
		elif plan_vals['meals_per_day'] == 3:
			if plan_vals['no_of_weeks'] == 4:
				plan_vals.update({ 'plan_price': 2300})
			elif plan_vals['no_of_weeks'] == 8:
				plan_vals.update({ 'plan_price': 2300 * 2})
			elif plan_vals['no_of_weeks'] == 12:
				plan_vals.update({ 'plan_price': 2300 * 3})
			else:
				pass
		else:
			if plan_vals['no_of_weeks'] == 4:
				plan_vals.update({ 'plan_price': 2800})
			elif plan_vals['no_of_weeks'] == 8:
				plan_vals.update({ 'plan_price': 2800 * 2})
			elif plan_vals['no_of_weeks'] == 12:
				plan_vals.update({ 'plan_price': 2800 * 3})
			else:
				pass

		# weeks = ['week1','week2','week3','week4','week5','week6','week7','week8','week9','week10','week11','week12']
		weeks = ['week1']
		days = ['day1','day2','day3','day4','day5']
		meals_count = int(body['Meals Per Day'])
		item_id = []
		plan_recs =[]
		xyz=[]
		# mm=[]
		
		if 'mProteinTotal' in body:
			protein = str(body['mProteinTotal'])
		if 'mCarbTotal' in body:
			carb = str(body['mCarbTotal'])
		if 'mPriceTotal' in body:
			price = str(body['mPriceTotal'])
		if 'mPriceTotal' in body:
			fat = str(body['mPriceTotal'])

		if plan == 'Customized':

			for i in body['meal_data']['week1']:
				mm = []
				if str(i) == 'day1':
					for k in body['meal_data']['week1'][i].keys():
						meal_line = body['meal_data']['week1'][i][k]
						if meal_line['Grams'] == 0:
							meal_line['Grams'] = 100
						mm.append([0,False,{'grams': int(meal_line['Grams']), 'cust': customer_id, 'meal_no':(int(k) % 10),'item_id': meal_line['Meal ID'],'carb': meal_line['Carb'] ,'fat': meal_line['Fat'] ,'price': meal_line['Price'] ,'protein': meal_line['Protein'] }])

					plan_recs.append([0,False,{
						'plan_meal_items':mm,
						'day': 1,
					
					}])

				if str(i) == 'day2':
					for k in body['meal_data']['week1'][i].keys():
						meal_line = body['meal_data']['week1'][i][k]
						if meal_line['Grams'] == 0:
							meal_line['Grams'] = 100
						mm.append([0,False,{'grams': int(meal_line['Grams']), 'cust': customer_id,'meal_no':(int(k) % 10),'item_id': meal_line['Meal ID'],'carb': meal_line['Carb'] ,'fat': meal_line['Fat'] ,'price': meal_line['Price'] ,'protein': meal_line['Protein'] }])

					plan_recs.append([0,False,{
						'plan_meal_items':mm,
						'day': 2,
					
					}])

				if str(i) == 'day3':
					for k in body['meal_data']['week1'][i].keys():
						meal_line = body['meal_data']['week1'][i][k]
						if meal_line['Grams'] == 0:
							meal_line['Grams'] = 100
						mm.append([0,False,{'grams': int(meal_line['Grams']), 'cust': customer_id,'meal_no':(int(k) % 10),'item_id': meal_line['Meal ID'],'carb': meal_line['Carb'] ,'fat': meal_line['Fat'] ,'price': meal_line['Price'] ,'protein': meal_line['Protein'] }])

					plan_recs.append([0,False,{
						'plan_meal_items':mm,
						'day': 3,
					
					}])

				if str(i) == 'day4':
					for k in body['meal_data']['week1'][i].keys():
						meal_line = body['meal_data']['week1'][i][k]
						if meal_line['Grams'] == 0:
							meal_line['Grams'] = 100
						mm.append([0,False,{'grams': int(meal_line['Grams']), 'cust': customer_id,'meal_no':(int(k) % 10),'item_id': meal_line['Meal ID'],'carb': meal_line['Carb'] ,'fat': meal_line['Fat'] ,'price': meal_line['Price'] ,'protein': meal_line['Protein'] }])

					plan_recs.append([0,False,{
						'plan_meal_items':mm,
						'day': 4,
					
					}])

				if str(i) == 'day5':
					for k in body['meal_data']['week1'][i].keys():
						meal_line = body['meal_data']['week1'][i][k]
						if meal_line['Grams'] == 0:
							meal_line['Grams'] = 100
						mm.append([0,False,{'grams': int(meal_line['Grams']),'cust': customer_id,'meal_no':(int(k) % 10),'item_id': meal_line['Meal ID'],'carb': meal_line['Carb'] ,'fat': meal_line['Fat'] ,'price': meal_line['Price'] ,'protein': meal_line['Protein'] }])

					plan_recs.append([0,False,{
						'plan_meal_items':mm,
						'day': 5,
					}])

			
			
			# print plan_recs
			plan_vals.update({'customer': customer_id,
						'days_per_week': 5,
						'no_of_weeks': int(body['Weeks']),
						'meals_per_day': int(body['Meals Per Day']),
						'meal_plan_type': str(cust_dict['carb_type']),
						'meal_plan_customized':plan_recs
					})


		if sock.execute(DB_NAME, uid, PASSWORD, 'meal.plans', 'search', [('customer', '=', customer_id)]):
			pass
		else:
			sock.execute(DB_NAME, uid, PASSWORD,
						 'meal.plans', 'create', plan_vals)

	return HttpResponse('Success')

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


	# 	for i in weeks:
			# 		for day in days:
			# 			if body['meal_data'][i][day] != {}:
			# 				# day_meals = body['meal_data'][i][day]
			# 				day_meals = body['meal_data'][i][day]
			# 				for x in range(len( day_meals.values())):
			# 					item_id += [int(day_meals.values()[range(len( day_meals.values())).index(x)].values()[0])]
			
			# 	for li in xrange(0, len(item_id), meals_count):
			# 		xyz =  xyz+[item_id[li:li + meals_count]] 

				# print item_id
				# for day in days:
				# 	if xyz[days.index(day)]:
				# 		mm=[]
				# 		for each in xyz[days.index(day)]:
				# 			meal_info = sock.execute(DB_NAME, uid, PASSWORD,'recipies.meal', 'search_read', [('id', '=', each)],[])#reading out item grammage
				# 			# mm=mm+[(0,0,{'meal_no':(xyz[days.index(day)].index(each))+1,'item_id':each,'carb':meal_info[0]['carb'] ,'fat':meal_info[0]['fat'] ,'price':meal_info[0]['price'] ,'protein':meal_info[0]['protein'] })]
				# 			mm=mm+[(0,0,{'meal_no':(xyz[days.index(day)].index(each))+1,'item_id':each,'carb':meal_info[0]['carb'] ,'fat':meal_info[0]['fat'] ,'price':meal_info[0]['price'] ,'protein':meal_info[0]['protein'] })]
				# 		plan_recs += [(0,0,{
				# 			'cust':customer_id,
				# 			'plan_meal_items':mm,
				# 			'day':(days.index(day))+1,
						
				# 		})]
