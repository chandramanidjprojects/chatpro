# Generated by Django 3.2 on 2021-09-15 05:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0002_college'),
    ]

    operations = [
        migrations.DeleteModel(
            name='College',
        ),
        migrations.DeleteModel(
            name='Student',
        ),
    ]