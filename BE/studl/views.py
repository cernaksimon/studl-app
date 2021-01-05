from django.shortcuts import render
from .models import JobPost


def home(request):
    context = {
        'jobs': JobPost.objects.all()
    }
    return render(request, 'studl/home.html', context)


def about(request):
    return render(request, 'studl/about.html', {'title': 'Informacijska točka'})
