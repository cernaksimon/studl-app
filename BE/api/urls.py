from django.urls import path
from .views import *

from rest_framework.authtoken.views import \
    obtain_auth_token  # Automatski view ki glede na avtentikacijski razred "StudlUser" vrne token

urlpatterns = [
    path('register/', api_registration_view, name='register'),
    path('jobs/', api_jobpost_view, name='jobs'),
    path('employers/', api_employer_view, name='employers'),
    path('login/', obtain_auth_token, name='login'),  # View zahteva 'username' parameter namesto 'email'
    path('rateEmployer/', api_rate_employer_view, name='rate_employer'),
    path('avgEmployerScore/', api_average_employer_score, name='average_employer_score'),
    path('users/', api_user_view, name='users'),
    path('updateUser/', api_update_user, name='update_user')
]
