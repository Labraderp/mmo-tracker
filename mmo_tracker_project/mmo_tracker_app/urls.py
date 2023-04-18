from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('', views.index),
    path('admin', admin.site.urls),
    path('csrf/', views.csrf),
    path('ping/', views.ping),
    path('signup', views.user_sign_up, name='signup'),
    path('login', views.user_log_in, name='signin'),
    path('curruser', views.curr_user, name='curruser'),
    path('logout', views.user_log_out, name='signout'),
<<<<<<< HEAD
    path('itemSearchOSRS/<str:itemName>', views.itemSearchOSRS, name='itemSearch')
=======
    path('user/:name', views.userpage, name='userpage')
>>>>>>> main
]
