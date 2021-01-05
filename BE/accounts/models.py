from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class StudlUserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Email is required for all users')
        if not first_name:
            raise ValueError('First name is required for all users')
        if not last_name:
            raise ValueError('Last name is required for all users')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)
        return user


class StudlUser(AbstractBaseUser):
    # Fields
    email = models.EmailField(verbose_name='email', max_length=255, unique=True)
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    date_joined = models.DateTimeField(verbose_name='date_joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last_login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    # SETTINGS
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'first_name',
        'last_name',
    ]
    objects = StudlUserManager()

    def __str__(self):
        return self.first_name + " " + self.last_name

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)