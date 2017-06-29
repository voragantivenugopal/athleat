# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

def doLogin(request):

	return render(request,'login.html',{})

def Index(request):

	return render(request,'index.html',{})

def mealBuilder(request):

	return render(request,'meal-builder.html',{})

