import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Feed extends Component {
    state = {
        recipes: []
    }

    componentDidMount() {
        this.getFeedData()
    }

    getFeedData = async () => {
        try {
            const res = await axios.get(`/api/v1/feed/`)
            const newState = { ...this.state }
            newState.recipes = res.data
            this.setState(newState)
        } catch (error) {
            console.log('failed to get recipes')
        }
    }

    render() {
        return (
            <div>
                {this.state.recipes.map((recipe) => {
                    return (
                        <div>

                            <h3>{recipe.title}</h3>
                            <Link to={`/recipe/${recipe.id}/`} class='link'>
                                <img src={recipe.image_url} width='500'/>
                            </Link>
                            <p>{recipe.tags}</p>
                            <div>

                                {recipe.comments.map((comment) => {
                                    return (
                                        <div>
                                            Comment: {comment.content}
                                        </div>
                                    )
                                })}
                            </div>

                            <div>Clap:{recipe.claps.length}</div>

                        </div>

                    )
                })}
            </div>
        )
    }
}
