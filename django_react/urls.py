"""django_react URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from operator import index
from re import template
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from api import urls
from first_app.views import firstView
from django.conf import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', TemplateView.as_view(template_name = 'index.html')),
    path('', index),
    path('about/', index),

    path('hola/', firstView ),
    path('api/', include('api.urls')),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
