from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    username = models.CharField(max_length=255, null=False, blank=False, unique=True)
    osrs_profile = models.CharField(max_length=100, null=True, blank=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS= []

    def __str__(self):
        return f"{self.username}|{self.email}"
    
class Fav_Item(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.CharField(max_length=255, null=False, blank=False)
    icon = models.CharField(max_length=255, null=False, blank=False)
    trend = models.CharField(max_length=100, null=False, blank=False)
    price = models.CharField(max_length=50, null=False, blank=False)
    trendprice = models.CharField(max_length=50, null=False, blank=False)

    user = models.ForeignKey(App_User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} : {self.description}"

class Fav_Beast(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    beast_id = models.CharField(max_length=10, null=False, blank=False)
    user = models.ForeignKey(App_User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} : {self.beast_id}"

class Timer(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    hours = models.IntegerField(null=False, blank=False, default=00)
    mins = models.IntegerField(null=False, blank=False, default=00)
    sec = models.IntegerField(null=False, blank=False, default=00)

    user = models.ForeignKey(App_User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} | {self.user}"