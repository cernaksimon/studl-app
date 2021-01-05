from rest_framework.response import Response
from rest_framework.decorators import api_view
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


