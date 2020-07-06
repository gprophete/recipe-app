from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('recipe', views.RecipeView)
router.register('directions', views.DirectionView)
router.register('ingredients', views.IngredientView)
router.register('comments', views.CommentView)
router.register('claps', views.ClapView)
router.register('feed', views.FeedView)
router.register('servingTime', views.ServingTimeView)



urlpatterns = [
    path('', include(router.urls))

]