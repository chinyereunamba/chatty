from .views import GoogleLoginView, UserRedirectView, UserListView
from django.urls import path


urlpatterns = [
    path("auth/google/login/", GoogleLoginView.as_view(), name="google_login"),
    path("~redirect/", UserRedirectView.as_view(), name="redirect"),
    path('users/', UserListView.as_view())
]
