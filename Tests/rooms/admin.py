from django.contrib import admin
from .models import Room


class RoomAdmin(admin.ModelAdmin):
    list_display = ('name', 'created', 'updated')
    list_filter = ('updated', 'created')
    search_fields = ('name', 'user__username')

    class Meta:
        model = Room


admin.site.register(Room, RoomAdmin)
