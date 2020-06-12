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
        },
        newClap: {
            recipe: this.props.match.params.recipeId
        },
        formView: false,

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
    onChangeClap = (evt) => {
        const newState = { ...this.state }
        newState.newClap[evt.target.name] = evt.target.value
        this.setState(newState)

    }
    onSubmitClap = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post(`/api/v1/claps/`, this.state.newClap)
            this.getSingleRecipe()
        } catch (error) {
            console.log('Failed to clap')
        }

    }

    toggleView = () => {
        const formView = !this.state.formView
        this.setState({ formView: formView })
        console.log('formView', formView)
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
                <div class='comment-container'>
                    <div class='comment'>
                        {this.state.recipe.comments.map((comment) => {
                            return (
                                <div>
                                    <div class='comment-label'>name:{comment.name}</div>
                                    <div>
                                    <label class='comment-label'>Comment:</label>
                                    <span class='comment-content'>{comment.content}</span>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                    <div class='clap'>
                        <button onClick={this.onSubmitClap} onChange={this.onChangeClap}>
                        <img class='clap-image' src="https://img.icons8.com/ios/20/000000/applause.png"/></button>
                        {this.state.recipe.claps.length}
                    </div>
                    <div>
                        {this.state.formView === true ? null :
                            <button onClick={this.toggleView}>
                                <i class="far fa-comment"></i>
                        </button>}

                        {this.state.formView === true
                            ? <form onSubmit={this.onClick}>
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
                            : null
                        }
                    </div>
                </div>


            </div >
        )
    }
}
