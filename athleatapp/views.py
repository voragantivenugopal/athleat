# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

def doLogin(request):
	print 'hiii'

	return render(request,'login.html',{})

