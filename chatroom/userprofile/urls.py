from django.conf.urls import url
from userprofile import views

urlpatterns = [
    url(r'^(?P<pk>[0-9]+)/$', views.UserProfileDetailView.as_view()),
]