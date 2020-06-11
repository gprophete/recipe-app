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
        newComment: {
            content: '',
            name: '',
            email: '',
            recipe: this.props.match.params.recipeId
        }

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

    onChange = (evt) => {
        const newState = { ...this.state }
        newState.newComment[evt.target.name] = evt.target.value
        this.setState(newState)
    }
    onClick = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post(`/api/v1/comments/`, this.state.newComment)
            this.getSingleRecipe()
        } catch (error) {
            console.log('Failed to post clap')
        }
    }



    render() {
        const recipeId = this.props.match.params.recipeId;
        return (
            <div>
                <h2>Let's get cooking</h2>
                <div class='recipe-header'>
                    <h3>{this.state.recipe.title}</h3>
                    <img src={this.state.recipe.image_url} width='200' />
                </div>
                <div class='container'>
                    <div >
                        {this.state.recipe.ingredients.map((ingredient) => {
                            return (
                                <div>
                                    <div class='ingredient'>{ingredient.items}</div>

                                </div>
                            )
                        })}
                    </div>
                    <div >
                        {this.state.recipe.directions.map((direction) => {
                            return (
                                <div>

                                    <div class='direction'>{direction.steps}</div>
                                    <div class='time'>Time:{direction.prep_time}</div>
                                    <div class='serving'>Servings:{direction.servings}</div>

                                </div>
                            )
                        })}
                    </div>
                </div>

                <div class='comment'>
                    {this.state.recipe.comments.map((comment) => {
                        return (
                            <div>
                                <div>Comment:{comment.content}</div>
                                <div>name:{comment.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div class='clap'>Claps:{this.state.recipe.claps.length}</div>
                <div>
                    <form onSubmit={this.onClick}>
                        <textarea 
                            type='text'
                            name='content'
                            onChange={this.onChange} />
                        <div>
                            <label>Name</label>
                            <input type='text'
                                name='name'
                                onChange={this.onChange} />
                            <label>Email</label>
                            <input type='text'
                                name='email'
                                onChange={this.onChange} />
                        </div>
                        <input type='submit' value='add comment' />
                    </form>
                </div>


            </div >
        )
    }
}
