from django.conf.urls import url
from roomchat import views

urlpatterns = [
    url(r'^(?P<pk>[0-9]+)$', views.ChatRoomDetailView.as_view()),
    url(r'^all$', views.ChatRoomSummaryView.as_view()),
    url(r'^create$', views.ChatRoomCreateView.as_view()),
    url(r'^(?P<roomchat_id>[0-9]+)/messages$', views.MessageView.as_view()),
    url(r'^(?P<pk>[0-9]+)/message/create$', views.MessageCreateView.as_view()),
]