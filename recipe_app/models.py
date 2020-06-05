from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=240)
    image_url = models.TextField()
    tags = models.CharField(max_length=255)

class Ingredients(models.Model):
    items = models.TextField()


class Direction(models.Model):
    steps = models.TextField()
    prep_time = models.CharField(max_length=100)
    servings = models.CharField(max_length=100)

class Claps(models.Model): 


 class Comments(models.Model):
     content = models.TextField()
     name = models.CharField(max_length=255)
     email = models.CharField(max_length=255)