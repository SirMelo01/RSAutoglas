# Generated by Django 4.0.10 on 2023-09-14 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ycms', '0002_textcontent_fileentry_place_galerie_place_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fileentry',
            name='file',
            field=models.ImageField(upload_to='rsautoglas/'),
        ),
    ]
