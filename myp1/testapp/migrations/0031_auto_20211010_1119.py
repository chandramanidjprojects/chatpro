# Generated by Django 3.2 on 2021-10-10 05:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0030_student_subject'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subject',
            name='stu',
        ),
        migrations.DeleteModel(
            name='Student',
        ),
        migrations.DeleteModel(
            name='Subject',
        ),
    ]
