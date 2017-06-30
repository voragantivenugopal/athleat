from django.conf.urls import include, url
from views import *

urlpatterns = [
    url(r'^$', Index),
    url(r'^login/', doLogin),
    url(r'^meal-builder/', mealBuilder),
    url(r'^menu/', displayMenu),
]