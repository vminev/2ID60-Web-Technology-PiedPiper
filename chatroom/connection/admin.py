from django.contrib import admin

# Register your models here.
from .models import *


# Register your models here.
class ConnectionAdmin(admin.ModelAdmin):
    class Meta:
        model = Connection


admin.site.register(Connection, ConnectionAdmin)