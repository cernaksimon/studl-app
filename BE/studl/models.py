from django.db import models
from django.utils import timezone
from accounts.models import StudlUser


class Country(models.Model):
    title = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Countries'


class District(models.Model):
    title = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.title


class Street(models.Model):
    title = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.title


class Address(models.Model):
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    street = models.ForeignKey(Street, on_delete=models.CASCADE)
    street_number = models.CharField(max_length=12, default=1)

    def __str__(self):
        return f'{self.street.__str__()} {self.street_number}, {self.country.__str__()}, {self.district.__str__()}'

    class Meta:
        verbose_name_plural = 'Addresses'
        unique_together = ['street', 'street_number']


class Employer(models.Model):
    title = models.CharField(max_length=128, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.IntegerField(unique=True)
    description = models.TextField(max_length=255)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} | {self.address.__str__()}"


class JobPost(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
