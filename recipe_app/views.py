from rest_framework import viewsets

from .serializers import DirectionSerializer, \
    RecipeSerializer, \
    CommentSerializer, \
    ClapSerializer, \
    IngredientSerializer, \
    FeedSerializer, \
    ServingTimeSerializer

from .models import Recipe, \
    Direction, \
    Ingredient, \
    Clap, \
    Comment, \
    ServingTime


class RecipeView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class DirectionView(viewsets.ModelViewSet):
    queryset = Direction.objects.all()
    serializer_class = DirectionSerializer

class IngredientView(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class ServingTimeView(viewsets.ModelViewSet):
    queryset = ServingTime.objects.all()
    serializer_class = ServingTimeSerializer

class ClapView(viewsets.ModelViewSet):
    queryset = Clap.objects.all()
    serializer_class = ClapSerializer

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class FeedView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = FeedSerializer


