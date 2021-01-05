from django.urls import path
from .views import *

from rest_framework.authtoken.views import \
    obtain_auth_token  # Automatski view ki glede na avtentikacijski razred "StudlUser" vrne token

urlpatterns = [
    path('register/', api_registration_view, name='register'),
    path('jobs/', api_jobpost_view, name='jobs'),
    path('employers/', api_employer_view, name='employers'),
    path('login/', obtain_auth_token, name='login'),  # View zahteva 'username' parameter namesto 'email'
]
