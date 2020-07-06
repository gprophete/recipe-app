from rest_framework import serializers

from .models import Recipe, Ingredient, Direction, Comment, Clap, ServingTime


class DirectionSerializer(serializers.ModelSerializer):
    class Meta:
        model= Direction
        fields = '__all__'


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class ServingTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServingTime
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

    comments = CommentSerializer(
        many=True,
        read_only=False
    )
    claps = ClapSerializer(
        many=True,
        read_only=False
    )
    directions = DirectionSerializer(
        many=True,
        read_only=True
    )
    ingredients = IngredientSerializer(
        many=True,
        read_only=True
    )
    servingTimes = ServingTimeSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Recipe
        fields = (
            'id',
            'title',
            'image_url',
            'comments',
            'claps',
            'directions',
            'ingredients',
            'servingTimes',
        )

class FeedSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(
        many= True,
        read_only=False)
    claps = ClapSerializer(
        many= True,
        read_only=False)
    class Meta:
        model = Recipe
        fields = (
            'id',
            'title',
            'image_url',
            'tags',
            'comments',
            'claps'
        )