from django.contrib import admin
from .models import *


# Basic models
@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    pass


@admin.register(District)
class District(admin.ModelAdmin):
    pass


@admin.register(Street)
class StreetAdmin(admin.ModelAdmin):
    pass


# Complex models
@admin.register(JobPost)
class JobPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'date_posted', 'employer')


@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    list_display = ('title', 'email', 'address', 'phone_number', 'description')


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('country', 'district', 'street', 'street_number')
