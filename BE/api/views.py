from django.shortcuts import render
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from .serializers import UserSerializer, JobPostSerializer
from studl.models import JobPost

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


class JobPostViewSet(viewsets.ModelViewSet):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    permission_classes = []