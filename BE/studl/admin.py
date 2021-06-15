from django.contrib import admin
from .models import *


# Basic models

# Complex models
@admin.register(JobPost)
class JobPostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'date_posted', 'employer')


@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    list_display = ('id',  'title', 'email', 'phone_number', 'description')

@admin.register(EmployerRating)
class EmployerRatingAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'employer', 'rating')

