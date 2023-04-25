from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.App_User)
class App_UserAdmin(admin.ModelAdmin):
    list_display = ("username", "password")

@admin.register(models.Fav_Beast)
class Fav_BeastAdmin(admin.ModelAdmin):
    list_display = ("name", "user")