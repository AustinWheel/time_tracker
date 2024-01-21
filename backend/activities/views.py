from activities.models import Activity
from rest_framework import serializers, permissions, viewsets
from rest_framework.response import Response
from rest_framework import status

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "name", "time_logged"]

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permission_classes = [permissions.IsAuthenticated]

    # def GET(self, request):
    #     response_data=self.get_serializer(self.queryset, many=True).data
    #     return Response(response_data, status=status.HTTP_200_OK)
