# Generated by Django 3.1.4 on 2021-06-14 17:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('studl', '0003_auto_20210614_1838'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmployerRating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('employer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studl.employer')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
