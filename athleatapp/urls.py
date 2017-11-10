from django.conf.urls import include, url
from views import *

urlpatterns = [
    url(r'^$', Index),
    url(r'^login/', doLogin),
    url(r'^logout/', doLogout),
    url(r'^meal-builder/', mealBuilder),
    url(r'^menu/', displayMenu),
    url(r'^register/', userSignup),
    url(r'^reset-password/', resetPassword),
    url(r'^post-values/', getValues),
    url(r'^user-register/', register),

    # Customer URLs
    url(r'^dashboard/', dashboard),
    url(r'^my-plan/', myPlan),
    url(r'^my-account/', myAccount),
]