from rest_framework import serializers

from .models import Recipe, Ingredient, Direction, Comment, Clap


class DirectionSerializer(serializers.ModelSerializer):
    class Meta:
        model= Direction
        fields = '__all__'


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields ='__all__'

class ClapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clap
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class FeedSerializer(serializers.ModelSerializer):
    directions = DirectionSerializer(
        many= False,
        read_only=True)
    ingredients = IngredientSerializer(
        many= False,
        read_only=True)
    comments = CommentSerializer(
        many= True,
        read_only=True)
    claps = ClapSerializer(
        many= True,
        read_only=True)
    recipes = RecipeSerializer(
        many= False,
        required=True)
    class Meta:
        model = Recipe
        fields = (
            'title',
            'image_url',
            'tags',
            'directions',
            'ingredients',
            'comments',
            'claps',
            'recipes')