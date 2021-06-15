from django.db import models
from django.utils import timezone

from accounts.models import StudlUser


class Employer(models.Model):
    title = models.CharField(max_length=128, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.IntegerField(unique=True)
    description = models.TextField(max_length=255)


    def __str__(self):
        return f"{self.title}"

class EmployerRating(models.Model):
    user = models.ForeignKey(StudlUser, null=False, on_delete=models.CASCADE, default='')
    employer = models.ForeignKey(Employer, null=False, on_delete=models.CASCADE, default='')
    rating = models.IntegerField(null=False, default='3')

class JobPost(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
