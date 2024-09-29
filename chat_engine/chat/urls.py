from django.contrib import admin
from django.conf import settings
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("allauth.urls")),
    path("api/", include("base.urls")), 
    path("api/auth/", include("dj_rest_auth.urls")),  
    path("api/auth/registration/", include("dj_rest_auth.registration.urls")), 
]

if settings.DEBUG:  # Include debug toolbar only if DEBUG is True
    import debug_toolbar

    urlpatterns = [
        path("__debug__/", include(debug_toolbar.urls)),
    ] + urlpatterns
