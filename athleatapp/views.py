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
		user_data = sock.execute(DB_NAME, UID, PASSWORD, 'res.users', 'read', uid,[])
		customer_data = sock.execute(DB_NAME, UID, PASSWORD, 'res.partner', 'read', user_data['partner_id'][0],[])
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
			user_data = sock.execute(DB_NAME, UID, PASSWORD, 'res.users', 'read', uid,[])
			request.session['cid'] = user_data['partner_id'][0]
			customer_data = sock.execute(DB_NAME, uid, password, 'res.partner', 'read', user_data['partner_id'][0],[])
				# return HttpResponseRedirect('/dashboard')
			return render(request,'dashboard.html',{'user_data': customer_data})
		else:
			return render(request, 'login.html', {'error': 'Username or Password is wrong !'})

	return render(request,'login.html',{})


def doLogout(request):
	for sesskey in request.session.keys():
		del request.session[sesskey]

	return HttpResponseRedirect('/login')

def Index(request):

	return render(request,'index.html',{})

def mealBuilder(request):

	content = []
	uid = getUserId(request)
	sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
	meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [('carb_type','!=','customize')])
	meal_data = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', meal_ids)

	# Customized items
	custom_meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [('carb_type','=','customize')])
	custom_meal_data = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', custom_meal_ids)

	return render(request,'meal-builder.html',{'meal_info': meal_data,'custom_meal_data': custom_meal_data})


def resetPassword(request):
	return render(request,'resetpassword.html',{})

def register(request):
	return render(request,'register.html',{})

def dashboard(request):
	customer_data = getLoggedUserData(request)
	return render(request,'dashboard.html',{'user_data': customer_data})

def displayMenu(request):
	content = []
	uid = getUserId(request)
	sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
	meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [('carb_type','!=','customize')])
	meal_data = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', meal_ids)

	# Customized items
	custom_meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [('carb_type','=','customize')])
	custom_meal_data = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', custom_meal_ids)
	return render(request, 'menu.html', {'meal_info': meal_data,'custom_meal_data': custom_meal_data})

def userSignup(request):

	if request.method == 'POST':
		username = request.POST['email']
		password = request.POST['password']
		phone = request.POST['phone']
		name = request.POST['regname']
		try:
			uid = getUserId(request)
			user_id = sock.execute(DB_NAME, uid, PASSWORD, 'res.users', 'create', {'login': username, 'new_password': password ,'name': name})
			user_data = sock.execute(DB_NAME, uid, PASSWORD, 'res.users', 'read', user_id, ['partner_id'])
			user_update = sock.execute(DB_NAME, uid, PASSWORD, 'res.partner', 'write', user_data['partner_id'][0], {'active2': True, 'contact_no': str(phone), 'customer': True})

			return render(request, 'login.html', {'error': 'Thank You for choosing us !'})
		except Exception as e:
			print e
			return render(request, 'login.html', {'error': 'Email already exists! If you forgot your password, please reset it !'})
	return HttpResponseRedirect('/menu')

@csrf_exempt
def getValues(request):

	
	if request.method == 'POST':

		# mealsPerday = request.POST['mealsperday']

		uid = getUserId(request)
		sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
		meal_item_ids = sock.execute(DB_NAME, uid, PASSWORD,'recipies.meal', 'search',[('carb_type', '=', 'customize')])
		meal_items = sock.execute(DB_NAME, uid, PASSWORD,'recipies.meal', 'read', meal_item_ids, ['quantity', 'protein', 'fat','carb', 'calories','price'])
		customers = sock.execute(DB_NAME, uid, PASSWORD,'res.partner', 'search',[('carb_type', '=', 'customized')])
		meal_plan = []
		
		for x in customers:
			for i in meal_items:
				item_id = i['id']#fetching item id from meal items page
				i.update({'item':item_id,'meals_type':'regular'})#updating active meal record fields
				meal_plan += [(0, 0, i)]
			if sock.execute(DB_NAME, uid, PASSWORD,'meal.plans', 'search',[('customer', '=', x)]):
				pass
			else:
				sock.execute(DB_NAME, uid, PASSWORD, 'meal.plans', 'create', {
						'customer': x,
						'days_per_week':'5',
						'meals_per_day':'4',
						'meal_plan_type':'customize',
						'meal_plan' : random.sample(meal_plan, 4),#limiting total no of meal plan records-one2many
					})

	return HttpResponseRedirect('/menu')

# User Current Plan
def myPlan(request):
	uid = request.session['user_id']
	cid = request.session['cid']
	password = request.session['password']
	plan_id = sock.execute(DB_NAME, uid, password,'meal.plans', 'search', [('customer','=', cid),('state','=','active')])
	if plan_id:
		plan_id = plan_id[0	]
		plan_data = sock.execute(DB_NAME, uid, password,'meal.plans', 'read', plan_id, [])
	
		if plan_data['meal_plan']:
			items_data = sock.execute(DB_NAME, uid, password,'meal.meal', 'read', plan_data['meal_plan'], [])
			print items_data
	return render(request,'my-plan.html',{'items_data': items_data})

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
			return render(request,'my-account.html',{'user_data': customer_data, 'msg': 'Passwords do not match'})
		try:
			uid = request.session['user_id']
			UID = getUserId(request)
			sock.execute(DB_NAME, UID, PASSWORD, 'res.users', 'write', [uid], {'login': email, 'new_password': cnf_pwd ,'name': name})

			customer_data = getLoggedUserData(request)
			return render(request,'my-account.html',{'user_data': customer_data})
		except Exception as e:
			return render(request,'my-account.html',{'user_data': customer_data, 'msg': 'Email %s already exists !' %email})

		
	return render(request,'my-account.html',{'user_data': customer_data})

