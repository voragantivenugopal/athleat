# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from athleat.settings import *
import xmlrpclib
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

	return render(request,'menu.html',{})

def getUserId(request):

	sock_common = xmlrpclib.ServerProxy(str(XMLRPC_URL) + '/xmlrpc/common')
	uid = sock_common.login(DB_NAME, USERNAME, PASSWORD)

	return uid

