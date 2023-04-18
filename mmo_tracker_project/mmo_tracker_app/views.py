from django.core.serializers import serialize
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import App_User
<<<<<<< HEAD
import requests
=======

>>>>>>> main
import json
# Create your views here.

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

def ping(request):
    return JsonResponse({'result': 'OK'})

def index(request):
    print('home!')
    theIndex = open('static/index.html').read()
    response = HttpResponse(theIndex)
    get_token(request)
    return HttpResponse(response)

@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    username = request.data['username']
    super_user = False
    staff = False

    if 'super' in request.data:
        super_user = request.data['super']
    
    if 'staff' in request.data:
        staff = request.data['staff']

    try:
        new_user = App_User.objects.create_user(username = username, email = email, password = password)
        new_user.save()
        return JsonResponse({"success" : True})
    except Exception as e:
        print(e)
        return JsonResponse({"success" : False})
    
@api_view(["POST"])
def user_log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(request, username=email, password=password)
    if user is not None and user.is_active:
        try:
            login(request, user)
<<<<<<< HEAD
            username = (user.__str__().split('|')[0])
            print(username)
            return JsonResponse({'login':True, 'username':username})
=======
            return JsonResponse({'login':True})
>>>>>>> main
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    print(request.data)
    return JsonResponse({'login': False})
    # return HttpResponse(response, 'static/index.html')

@api_view(["GET"])
def curr_user(request):
    print(request.headers)
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields=['username', 'email'])
        user_info_workable=json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})
    
@api_view(["POST"])
def user_log_out(request):
    try:
        logout(request)
        return JsonResponse({"logout":True})
    except Exception as e:
        print(e)
        return JsonResponse({"logout":False})

@api_view(["GET"])
<<<<<<< HEAD
def itemSearchOSRS(request, itemName):
    try:
        print('success')
        response=requests.get(f"https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha={itemName}&page=1")
        print(response.json())
        return JsonResponse({"item_search": response.json()})
    except Exception as e:
        print(e)
        return JsonResponse({"item_search": "failure"})


=======
def userpage(request, name):
    return JsonResponse({'user page' : name})
>>>>>>> main
