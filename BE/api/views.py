from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *

from rest_framework.authtoken.models import Token


@api_view(['POST', ])
def api_registration_view(request):
    """
    Gets data from POST request and validates it.
    Based on success of validation raises error or registers user.

    :param request: Request (always POST).
    :return: Response in JSON format.
    """
    serializer = RegistrationSerializer(data=request.data)
    context = {}
    if serializer.is_valid():
        user = serializer.save()
        context['response'] = 'User regsitration successful.'
        context['email'] = user.email
        context['first_name'] = user.first_name
        context['last_name'] = user.last_name
        token = Token.objects.get(user=user).key
        context['token'] = token
    else:
        context = serializer.errors
    return Response(context)


@api_view(['GET', ])
def api_jobpost_view(request):
    """
    WIP
    Currently returns all JobPosts in the database as JSON.

    :param request: Request (GET).
    :return: Response in JSON format.
    """
    all_jobPosts = JobPost.objects.all()
    serializer = JobPostSerializer(all_jobPosts, many=True)

    return Response(serializer.data)


@api_view(['GET', ])
def api_employer_view(request):
    all_employers = Employer.objects.all()
    serializer = EmployerSerializer(all_employers, many=True)

    return Response(serializer.data)

@api_view(['GET', ])
def api_user_view(request):
    all_users = StudlUser.objects.all()
    serializer = StudlUserSerializer(all_users, many=True)
    return Response(serializer.data)

@api_view(['POST', ])
def api_rate_employer_view(request):
    # neki post
    serializer = EmployerRatingSerializer(data=request.data)
    if serializer.is_valid():
        rating = serializer.data.get('rating')
        user_id = serializer.data.get('user_id')
        employer_id = serializer.data.get('employer_id')


        user = StudlUser.objects.filter(id=user_id).first()
        employer = Employer.objects.filter(id=employer_id).first()
        qs = EmployerRating.objects.filter(user=user, employer=employer)

        if qs:
            message = 'You have already rated this employer.'
            return Response({'message': message})
        else:
            message = f'{employer.title} was rated with {rating} by {user.first_name} {user.last_name}'
            EmployerRating(
                employer=employer,
                user=user,
                rating=rating
            ).save()

            return Response({'message': message,})
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', ])
def api_average_employer_score(request):
    serializer = EmployerIdSerializer(data=request.data)

    if serializer.is_valid():
        employer_id = serializer.data.get('employer_id')

        employer = Employer.objects.filter(id=employer_id).first()
        qs = EmployerRating.objects.filter(employer=employer)

        if qs:
            message = f'Request succesful'
            sum = 0
            size = qs.count()
            for i in qs:
                sum += int(i.rating)

            avg = int(sum)/int(size)
            return Response({'average_score': avg, 'message': message})
        else:
            message = f'{employer.title} has no ratings.'
            return Response({'message': message})
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', ])
def api_update_user(request):
    serializer = UpdateUserSerializer(data=request.data)

    if serializer.is_valid():
        id = serializer.data.get('id')
        first_name = serializer.data.get('first_name')
        last_name = serializer.data.get('last_name')
        password = serializer.data.get('password')

        user = StudlUser.objects.filter(id=id).first()
        if not first_name == '' or not first_name == '':
            user.first_name = first_name

        if not last_name == '' or not last_name == '':
            user.last_name = last_name

        if not password == '' or not password == '':
            user.set_password(password)

        user.save()
        return Response({'message': 'Saved changes'})
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)