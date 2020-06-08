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
        const res = await axios.get(`/api/v1/feed`)
        const newState = { ...this.state }
        newState.recipes = res.data
        this.setState(newState)
    }

    render() {
        return (
            <div>
                {this.state.recipes.map((recipe) => {
                    return (
                        <div>
                        <h3>{recipe.title}</h3>
                        <img>{recipe.image.url}</img>
                        <p>{recipe.tags}</p>
                        </div>

                    )
                })}
            </div>
        )
    }
}
