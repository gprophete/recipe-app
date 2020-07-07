from django.db import models


class Recipe(models.Model):
    title = models.CharField(max_length=240)
    image_url = models.TextField()
    tags = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Ingredient(models.Model):
    items = models.TextField()
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='ingredients'
    )


class Direction(models.Model):
    steps = models.TextField()
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='directions'
    )

class ServingTime(models.Model):
    prep_time = models.CharField(max_length=100)
    servings = models.CharField(max_length=100)
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='servingTimes'
    )



class Comment(models.Model):
    content = models.TextField()
    name = models.CharField(max_length=255)
    recipe = models.ForeignKey(
         Recipe, on_delete=models.CASCADE, related_name='comments'
    )

class Clap(models.Model):
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='claps'
    )