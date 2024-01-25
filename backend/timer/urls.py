"""timer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
from activities.views import UserActivitiesView, ActivityView
from users.views import UserProfileView

router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
    path('admin/', admin.site.urls),
    path("api/activities/", UserActivitiesView.as_view(), name="activities"),
    path("api/activities/activity/", ActivityView.as_view(), name="activity"),
    path("api/users/profile/", UserProfileView.as_view(), name="profile"),
]
