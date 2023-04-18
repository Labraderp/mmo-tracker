from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    username = models.CharField(max_length=255, null=False, blank=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS= []

    def __str__(self):
        return f"{self.username}|{self.email}"
