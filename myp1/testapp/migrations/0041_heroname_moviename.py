# Generated by Django 3.2 on 2021-10-18 05:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0040_chat_date_time'),
    ]

    operations = [
        migrations.CreateModel(
            name='HeroName',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='MovieName',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie', models.CharField(max_length=32)),
                ('heroname', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='testapp.heroname')),
            ],
        ),
    ]
