# Generated by Django 4.0.10 on 2023-08-02 16:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import rsautoglas.ycms.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(default='', max_length=255)),
                ('answer', models.TextField(default='')),
                ('order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='fileentry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.ImageField(upload_to='yoolink/')),
                ('uploaddate', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(default='Bildtitel', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='GaleryImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('upload', models.ImageField(upload_to='yoolink/galery/')),
                ('uploaddate', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(default='Bildtitel', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=60)),
                ('message', models.CharField(max_length=600)),
                ('date', models.DateField()),
                ('seen', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Galerie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Titel', max_length=100)),
                ('description', models.TextField(default='')),
                ('active', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('changed_at', models.DateTimeField(auto_now=True)),
                ('images', models.ManyToManyField(to='ycms.galeryimage')),
            ],
        ),
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(default='default-slug', unique=True)),
                ('title_image', models.ImageField(blank=True, default='', upload_to=rsautoglas.ycms.models.upload_to_blog_image)),
                ('date', models.DateField(auto_now_add=True)),
                ('last_updated', models.DateField(auto_now=True)),
                ('body', models.TextField(default='This Blog is empty')),
                ('code', models.JSONField(default=rsautoglas.ycms.models.default_code)),
                ('active', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]