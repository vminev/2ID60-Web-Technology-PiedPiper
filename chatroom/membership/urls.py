from django.conf.urls import url
from .views import MembershipCreateView

urlpatterns = [
    url(r'^create$', MembershipCreateView.as_view()),
]