from django.contrib import admin

# Register your models here.
from .models import *


# Register your models here.
class RoomChatAdmin(admin.ModelAdmin):
    class Meta:
        model = RoomChat


class MessageAdmin(admin.ModelAdmin):
    class Meta:
        model = Message


admin.site.register(RoomChat, RoomChatAdmin)
admin.site.register(Message, MessageAdmin)