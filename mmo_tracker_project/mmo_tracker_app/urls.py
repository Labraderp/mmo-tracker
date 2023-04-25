from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('', views.index),
    path('admin', admin.site.urls),
    # path('csrf/', views.csrf),
    # path('ping/', views.ping),
    path('signup', views.user_sign_up, name='signup'),
    path('login', views.user_log_in, name='signin'),
    path('curruser', views.curr_user, name='curruser'),
    path('logout', views.user_log_out, name='signout'),
    path('itemSearchOSRS/<str:itemName>/<int:pageNum>/<int:maxFlag>', views.itemSearchOSRS, name='itemSearch'),
    path('bestiarySearchOSRS/<str:beastName>', views.bestiarySearchOSRS, name='beastSearch'),
    path('bestiaryResolveOSRS/<str:beastID>', views.bestiaryResolveOSRS, name="beastResolve"),
    path('favBeast', views.favBeast, name='favBeast')
]
