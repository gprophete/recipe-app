import React, { Component } from 'react'
import axios from 'axios'

export default class Recipe extends Component {

    state = {
        recipe: {
            title: '',
            image_url: '',
            tags: '',
            comments: [],
            claps: [],
            ingredients: [],
            directions: []
        },






    }

    componentDidMount() {
        this.getSingleRecipe()
    }

    getSingleRecipe = async () => {
        try {
            const recipeId = this.props.match.params.recipeId;
            const res = await axios.get(`/api/v1/recipe/${recipeId}/`)
            const newState = { ...this.state }
            newState.recipe = res.data
            this.setState(newState)
            console.log(res.data)

        } catch (error) {
            console.log('Failed to get recipe')
        }

    }


    render() {
        return (
            <div>
                <h2>Let's get cooking</h2>
                <div class='recipe-header'>
                    <h3>{this.state.recipe.title}</h3>
                    <img src={this.state.recipe.image_url} width='200' />
                </div>
                <div class='container'>
                    <div class='ingredient'>
                        {this.state.recipe.ingredients.map((ingredient) => {
                            return (
                                <div>
                                    <div>{ingredient.items}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div class='direction'>
                        {this.state.recipe.directions.map((direction) => {
                            return (
                                <div>

                                    <div>{direction.steps}</div>
                                    <div class='time'>{direction.prep_time}</div>
                                    <div class ='serving'>{direction.servings}</div>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div class='comment'>
                    {this.state.recipe.comments.map((comment) => {
                        return (
                            <div>
                                Comment:{comment.content}
                                <div>name:{comment.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div>Claps:{this.state.recipe.claps.length}</div>

            </div >
        )
    }
}
