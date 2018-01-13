from django.conf.urls import url
from roomchat import views

urlpatterns = [
    url(r'^(?P<roomchat_id>[0-9]+)/$', views.ChatRoomDetailView.as_view()),
    url(r'^chatrooms$', views.ChatRoomSummaryView.as_view()),
    url(r'^(?P<roomchat_id>[0-9]+)/create$', views.ChatRoomCreateView.as_view()),
    url(r'^(?P<roomchat_id>[0-9]+)/message/(?P<message_id>[0-9]+)/$', views.MessageView.as_view()),
    url(r'^(?P<roomchat_id>[0-9]+)/message/(?P<message_id>[0-9]+)/create$', views.MessageCreateView.as_view()),

]