from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.


class UserModelAdmin(UserAdmin):
    list_display = ['email', 'username', 'is_superuser', 'is_active', 'last_login']
    filter_horizontal = []
    filter_vertical = []
    list_filter = []


admin.site.register(User, UserModelAdmin)