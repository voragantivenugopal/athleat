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

def doLogin(request):

	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		uid = sock_common.login(DB_NAME, username, password)
		if uid:
			return HttpResponseRedirect('/menu')
		else:
			return render(request, 'login.html', {'error': 'Username or Password is wrong !'})

	return render(request,'login.html',{})

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

def dashboard(request):

	return render(request,'dashboard.html',{})

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
		try:
			uid = getUserId(request)
			user_id = sock.execute(DB_NAME, uid, PASSWORD, 'res.users', 'create', {'login': username, 'new_password': password ,'name': username})
			user_data = sock.execute(DB_NAME, uid, PASSWORD, 'res.users', 'read', user_id, ['partner_id'])
			user_update = sock.execute(DB_NAME, uid, PASSWORD, 'res.partner', 'write', user_data['partner_id'][0], {'active2': True, 'contact_no': str(phone), 'customer': True})

			return render(request, 'login.html', {'error': 'Thank You for choosing us !'})
		except Exception as e:
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

