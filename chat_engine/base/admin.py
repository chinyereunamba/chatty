from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.


class UserModelAdmin(UserAdmin):
    list_display = ["email", "username", "is_superuser", "is_active"]
    exclude = ["date_joined", "last_login"]
    readonly_fields = ["date_joined"]
    fieldsets = (
        (None, {"fields": ("email", "username", "password")}),
        ("Personal info", {"fields": ("display_name",)}),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                )
            },
        ),
    )
    add_fieldsets = (
        (None, {"fields": ("email",)}),
        ("Personal Info", {"fields": ("username", "display_name")}),
        (None, {"fields": ("password1", "password2")}),
    )
    filter_horizontal = []
    filter_vertical = []
    list_filter = []


admin.site.register(User, UserModelAdmin)
