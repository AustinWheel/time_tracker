from activities.models import Activity
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Activity
from rest_framework.permissions import IsAuthenticated

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "name", "time_logged", "user"]
        
class UserActivitiesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        activities = Activity.objects.filter(user=request.user.profile)
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        activity = Activity.objects.create(
            name=request.data["name"],
            time_logged=0,
            user=request.user.profile,
        )
        activity.save()
        return Response(status=status.HTTP_201_CREATED)