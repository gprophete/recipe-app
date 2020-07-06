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
                        <div class='feed'>

                            <h3>{recipe.title}</h3>
                            <Link to={`/recipe/${recipe.id}/`} class='link'>
                                <img src={recipe.image_url} width='300' />
                            </Link>
                            <p>{recipe.tags}</p>
                            <div>

                                {/* {recipe.comments.map((comment) => {
                                    return (
                                        <div>
                                            <label class='comment-label'>Comment:</label>
                                            <p class='comment-content'>{comment.content}</p>
                                        </div>
                                    )
                                })} */}
                            </div>

                            <div><img class='clap-image'
                                src="https://img.icons8.com/ios/20/000000/applause.png" />
                                {recipe.claps.length}</div>

                        </div>

                    )
                })}
            </div>
        )
    }
}
