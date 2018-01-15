from django.conf.urls import url
from userprofile import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^(?P<pk>[0-9]+)/$', views.UserProfileDetailView.as_view()),
    url(r'^login', obtain_jwt_token),
    url(r'^register', views.UserProfileCreateAPIView.as_view()),
    url(r'^identity', views.UserIdentityAPIView.as_view())
]