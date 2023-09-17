from django.shortcuts import render
from .models import MyUser
from .serializers import MyTokenObtainPairSerializer, MyUserSerializer
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions

class MyUserList(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = MyUserSerializer
    queryset = MyUser.objects.all()


class MyUserCreate(APIView):
    permission_classes = [AllowAny]
    serializer_class = MyUserSerializer

    def post(self, request, format='json'):
        serializer = MyUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class MyUserDetail(generics.RetrieveAPIView):
    """ permission_classes = [IsAdminUser] """
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.email == request.user.email


class MyUserUpdate(generics.UpdateAPIView):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer
    permission_classes = [IsAdminUser|IsOwnerOrReadOnly]

    def update(self, request, *args, **kwargs):
       partial = kwargs.pop('partial', False)
       instance = self.get_object()
       serializer = self.get_serializer(instance, data=request.data, partial=partial)
       serializer.is_valid(raise_exception=True)
       self.perform_update(serializer)

       return Response(serializer.data)
   
    def perform_update(self, serializer):
        serializer.save()
    
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)

class MyUserDelete(generics.DestroyAPIView):
    permission_classes = [IsAdminUser|IsOwnerOrReadOnly]
    serializer_class = MyUserSerializer
    queryset = MyUser.objects.all()
    
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
