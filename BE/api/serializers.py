from rest_framework import serializers
from accounts.models import StudlUser
from studl.models import *


class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = StudlUser
        fields = ['email', 'first_name', 'last_name', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = StudlUser(
            email=self.validated_data['email'],
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match!'})

        user.set_password(password)
        user.save()
        return user


class JobPostSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=128)
    title = serializers.CharField(max_length=128)
    description = serializers.CharField(allow_null=True)
    payment = serializers.CharField(allow_null=True)
    duration = serializers.CharField(allow_null=True)
    schedule = serializers.CharField(allow_null=True)
    free_positions = serializers.CharField(allow_null=True)
    date_posted = serializers.DateTimeField()



    def create(self, validated_data):
        return JobPost.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.date_posted = validated_data.get('date_posted', instance.date_posted)
        instance.employer = validated_data.get('employer', instance.employer)
        instance.save()
        return instance

class EmployerSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=128)
    title = serializers.CharField(max_length=128)
    email = serializers.EmailField(max_length=255)
    phone_number = serializers.IntegerField()
    description = serializers.CharField()


class EmployerRatingSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()
    employer_id = serializers.IntegerField()
    rating = serializers.IntegerField()

class EmployerIdSerializer(serializers.Serializer):
    employer_id = serializers.IntegerField()

class StudlUserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()
    date_joined = serializers.DateTimeField()

class UpdateUserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    password = serializers.CharField()