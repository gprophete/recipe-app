from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('recipes', views.RecipeView)
router.register('directions', views.DirectionView)
router.register('ingredients', views.IngredientView)
router.register('comments', views.CommentView)
router.register('claps', views.ClapView)
router.register('feed', views.FeedView)


urlpatterns = [
    path('', include(router.urls))

]