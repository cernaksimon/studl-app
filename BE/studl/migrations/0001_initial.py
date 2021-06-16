# Generated by Django 3.1.4 on 2021-01-17 11:33

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street_number', models.CharField(default=1, max_length=12)),
            ],
            options={
                'verbose_name_plural': 'Addresses',
            },
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
            ],
            options={
                'verbose_name_plural': 'Countries',
            },
        ),
        migrations.CreateModel(
            name='District',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Employer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, unique=True)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('phone_number', models.IntegerField(unique=True)),
                ('description', models.TextField(max_length=255)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studl.address')),
            ],
        ),
        migrations.CreateModel(
            name='Street',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='JobPost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
                ('description', models.TextField()),
                ('date_posted', models.DateTimeField(default=django.utils.timezone.now)),
                ('employer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studl.employer')),
            ],
        ),
        migrations.AddField(
            model_name='address',
            name='country',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studl.country'),
        ),
        migrations.AddField(
            model_name='address',
            name='district',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studl.district'),
        ),
        migrations.AddField(
            model_name='address',
            name='street',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studl.street'),
        ),
        migrations.AlterUniqueTogether(
            name='address',
            unique_together={('street', 'street_number')},
        ),
    ]
