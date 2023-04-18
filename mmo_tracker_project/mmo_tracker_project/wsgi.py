"""
WSGI config for mmo_tracker_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mmo_tracker_project.settings')
<<<<<<< HEAD
# os.environ["DJANGO_SETTINGS_MODULE"] = 'mmo_tracker_project.settings'
=======
>>>>>>> main

application = get_wsgi_application()
