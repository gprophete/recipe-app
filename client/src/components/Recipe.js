import React, { Component } from 'react'
import axios from 'axios'


export default class Recipe extends Component {

    state = {
        title:'',
        image_url: '',
        tags:''
    }

    getSingleRecipe = async () =>{
        const recipeId = this.props.match.params.recipeId
        const res = await axios.get(`/api/vi/recipe/${recipeId}/`)
        const newState = {...this.state}
        this.setState = ({newState: res.data})
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div>{this.state.image_url}</div>
                <p>{this.state.tags}</p>
            </div>
        )
    }
}
