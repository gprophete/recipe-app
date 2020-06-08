from rest_framework import viewsets

from .serializers import DirectionSerializer, \
    RecipeSerializer, \
    CommentSerializer, \
    ClapSerializer, \
    IngredientSerializer

from .models import Recipe, \
    Direction, \
    Ingredient, \
    Clap, \
    Comment

class RecipeView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class DirectionView(viewsets.ModelViewSet):
    queryset = Direction.objects.all()
    serializer_class = DirectionSerializer

class IngredientView(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class ClapView(viewsets.ModelViewSet):
    queryset = Clap.objects.all()
    serializer_class = ClapSerializer

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


