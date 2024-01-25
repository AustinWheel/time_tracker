from .models import Profile
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["id", "user", "pfp"]
        
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = Profile.objects.filter(user=request.user).first()
        serializer = UserSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        profile = Profile.objects.filter(user=request.user).first()
        profile.pfp = request.data.get("pfp", profile.pfp)
        profile.save()
        return Response(status=status.HTTP_201_CREATED)
    
