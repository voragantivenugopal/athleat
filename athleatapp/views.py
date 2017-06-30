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

def doLogin(request):

	if request.method == 'POST':
		uid = getUserId(request)
		print uid
	return render(request,'login.html',{})

def Index(request):

	return render(request,'index.html',{})

def mealBuilder(request):

	return render(request,'meal-builder.html',{})

def displayMenu(request):
	content = []
	uid = getUserId(request)
	sock = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/object')
	meal_ids = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'search', [])
	meal_data = sock.execute(DB_NAME, uid, PASSWORD, 'recipies.meal', 'read', meal_ids)
	# meal_data = simplejson.dumps(meal_data)
	# content['meal_data'] = mark_safe(json.dumps(meal_data))


	# for temp in meal_data:
	# 	content.append({
	# 		'name': temp['name'],

	# 	})
	print meal_data
	# print content
	return render(request, 'menu.html', {'meal_info': meal_data})

def getUserId(request):
	sock_common = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/common')
	uid = sock_common.login(DB_NAME, USERNAME, PASSWORD)

	return uid

