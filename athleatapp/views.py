# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from athleat.settings import *
import xmlrpclib
import simplejson
import json
from django.utils.safestring import mark_safe
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

	return render(request,'meal-builder.html',{})

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
		try:
			uid = getUserId(request)
			user_id = sock.execute(DB_NAME, uid, PASSWORD, 'res.users', 'create', {'login': username, 'new_password': password ,'name': username})
		except Exception as e:
			return render(request, 'login.html', {'error': 'Email already exists! If you forgot your password, please reset it !'})
	return HttpResponseRedirect('/menu')

