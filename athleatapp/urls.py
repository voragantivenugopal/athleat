from django.conf.urls import include, url
from views import *

urlpatterns = [
    url(r'^$', Index),
    url(r'^meal-build/', mealBuilder),
]