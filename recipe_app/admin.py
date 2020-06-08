from django.contrib import admin

from .models import Recipe, Ingredient, Direction, Comment, Clap

admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(Direction)
admin.site.register(Comment)
admin.site.register(Clap)
