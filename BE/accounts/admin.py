from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import StudlUser


class StudlUserAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'date_joined', 'last_login', 'is_admin', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    readonly_fields = ('date_joined', 'last_login')

    ordering = ('email',)  # Privzeto ordera po usernamu, cesar v novem modelu ni
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(StudlUser, StudlUserAdmin)
