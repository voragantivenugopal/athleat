from django.conf.urls import include, url
from views import *

urlpatterns = [
    url(r'^$', Index),
    url(r'^login/', doLogin),
    url(r'^meal-builder/', mealBuilder),
    url(r'^menu/', displayMenu),
    url(r'^register/', userSignup),
    url(r'^reset-password/', resetPassword),
    url(r'^post-values/', getValues),
    url(r'^dashboard/', dashboard),
]