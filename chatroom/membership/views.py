from rest_framework import status
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.mixins import DestroyModelMixin
from rest_framework.response import Response

from .models import Membership
from .serializers import MembershipCreateSerializer, MembershipDeleteSerializer
from rest_framework.permissions import IsAuthenticated


class MembershipCreateView(CreateAPIView):
    queryset = Membership.objects.all()
    serializer_class = MembershipCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user.profile)


class MembershipDeleteView(GenericAPIView, DestroyModelMixin):
    def delete(self, request, id, format=None):
        obj = Membership.objects.filter(user__user_id=request.user.id, chatroom_id=id)

        if obj.count() > 0:
            obj.first().delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
