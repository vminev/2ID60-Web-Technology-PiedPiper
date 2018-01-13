from django.contrib import admin

# Register your models here.
from .models import *


# Register your models here.
class MembershipAdmin(admin.ModelAdmin):
    class Meta:
        model = Membership


admin.site.register(Membership, MembershipAdmin)