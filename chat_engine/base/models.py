from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.utils.translation import gettext_lazy as _

# Create your models here.


class AccountManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra):
        if email is None:
            raise ValueError(_("All users must have an email address"))

        if username is None:
            raise ValueError(_("All users must have a username"))

        email = self.normalize_email(email=email).lower()
        username = str(username).lower()

        user = self.model(email=email, username=username, **extra)

        user.set_password(password)

        user.save(using=self._db)

        return user

    def create_superuser(self, email, username, password=None, **extra):
        extra.setdefault("is_admin", True)
        extra.setdefault("is_staff", True)
        extra.setdefault("is_superuser", True)

        user = self.create_user(
            email=email, username=username, password=password, **extra
        )

        return user


class User(AbstractBaseUser):
    email = models.EmailField(_("Email address"), max_length=100, unique=True)
    username = models.CharField(_("Username"), max_length=50, unique=True)
    display_name = models.CharField(
        _("Display name"), max_length=80, blank=True, null=True
    )

    date_joined = models.DateTimeField(_("Date Joined"), auto_now_add=True, blank=True)
    last_login = models.DateTimeField(_("Last Login"), auto_now=True, blank=True)

    is_active = models.BooleanField(_("Is active"), default=True)
    is_admin = models.BooleanField(_("Is admin"), default=True)
    is_staff = models.BooleanField(_("Is staff"), default=True)
    is_superuser = models.BooleanField(_("Is superuser"), default=True)

    objects = AccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "display_name"]

    def __str__(self):
        return self.username

    def has_module_perms(self, obj):
        return True

    def has_perms(self, obj):
        return True

    def has_perm(self, obj):
        return True
