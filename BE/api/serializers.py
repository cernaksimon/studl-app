from rest_framework import serializers
from django.contrib.auth.models import User
from studl.models import JobPost

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email']


class JobPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobPost
        fields = ['title', 'description', 'employer']