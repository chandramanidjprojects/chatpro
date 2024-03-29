# Generated by Django 3.2 on 2021-10-10 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0037_delete_subject'),
    ]

    operations = [
        migrations.CreateModel(
            name='ThreadManager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='thread',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='thread',
            name='name',
        ),
        migrations.RemoveField(
            model_name='thread',
            name='thread_type',
        ),
        migrations.RemoveField(
            model_name='thread',
            name='updated_at',
        ),
        migrations.DeleteModel(
            name='Message',
        ),
    ]
