from django.conf.urls import url
from .views import MembershipCreateView, MembershipDeleteView

urlpatterns = [
    url(r'^create$', MembershipCreateView.as_view()),
    url(r'^(?P<id>\d+)/delete$', MembershipDeleteView.as_view()),
]