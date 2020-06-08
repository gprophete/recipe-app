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
    comments = CommentSerializer(
        many= True,
        read_only=True)
    claps = ClapSerializer(
        many= True,
        read_only=True)
    class Meta:
        model = Recipe
        fields = (
            'title',
            'image_url',
            'tags',
            'comments',
            'claps')