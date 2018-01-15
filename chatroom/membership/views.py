from rest_framework.generics import CreateAPIView

from .models import Membership
from .serializers import MembershipCreateSerializer
from rest_framework.permissions import IsAuthenticated


class MembershipCreateView(CreateAPIView):
    queryset = Membership.objects.all()
    serializer_class = MembershipCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user.profile)
