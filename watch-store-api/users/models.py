from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone
from django.core.validators import validate_email
from django.core.exceptions import ValidationError


class MyUserManager(BaseUserManager):
    def validateEmail(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError("You must provide a valid email address")

    def create_superuser(self, name, lastName, email, password, **additional_fields):
        additional_fields.setdefault('is_staff', True)
        additional_fields.setdefault('is_superuser', True)
        additional_fields.setdefault('is_active', True)

        if additional_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if additional_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        if email:
            email = self.normalize_email(email)
            self.validateEmail(email)
        else:
            raise ValueError(
                "Superuser Account: You must provide an email address")

        return self.create_user(name, lastName, email, password, **additional_fields)

    def create_user(self, name, lastName, email, password, **additional_fields):
        if not name:
            raise ValueError("The given name must be set")
        if not lastName:
            raise ValueError("The given lastName must be set")
        if not email:
            raise ValueError("The given email must be set")

        if email:
            email = self.normalize_email(email)
            self.validateEmail(email)
        else:
            raise ValueError(
                "Superuser Account: You must provide an email address")

        email = self.normalize_email(email)
        user = self.model(name=name, lastName=lastName,
                          email=email, **additional_fields)
        user.set_password(password)
        user.save()


class MyUser(AbstractBaseUser, PermissionsMixin):

    name = models.CharField('имя пользователя', max_length=100)
    lastName = models.CharField('фамилия', max_length=100)
    email = models.EmailField('электронная почта', max_length=150, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    start_date = models.DateTimeField('дата регистрации', default=timezone.now)

    objects = MyUserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    class Meta:
        verbose_name = "Профиль"
        verbose_name_plural = "Профили"

    def get_short_name(self):
        return self.user_name

    def get_full_name(self):
        return self.user_name

    def __str__(self) -> str:
        return 'f{self.name} - f{self.lastName}'
