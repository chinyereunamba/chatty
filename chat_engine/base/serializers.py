from rest_framework import serializers
from dj_rest_auth.serializers import LoginSerializer, UserDetailsSerializer
from django.contrib.auth import get_user_model


User = get_user_model()



class CustomUserDetailsSerializer(UserDetailsSerializer):
    username = serializers.CharField(required=True)
    is_active = serializers.BooleanField(required=True)

    class Meta(UserDetailsSerializer.Meta):
        model = User
        fields = [UserDetailsSerializer.fields, "username", "is_active"]

# serializers.py
from dj_rest_auth.serializers import LoginSerializer


class CustomLoginSerializer(LoginSerializer):
    username = None

    def get_auth_user(self, *args, **kwargs):
        user = super().get_auth_user(*args, **kwargs)
        # Add any custom attributes if needed
        return user
    
    class Meta:
        model = User
