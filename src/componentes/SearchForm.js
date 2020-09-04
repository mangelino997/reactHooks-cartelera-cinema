import React, { Component } from 'react';
import avatar from '../img/avatar.png'

const API_KEY = '7e92a6f6'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
        console.log(this.state.inputMovie)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`) //con axios me ahorro los .then (ahorra codigo)
            .then(res =>
                res.json())
            .then(
                results => {
                    // extrae los parametros Search y TotalResults 
                    const { Search = []} = results
                    //comprueba que si el resultado es 'undefined' el array quede vacío
                    // le manda a App.js como props el metodo que actualizara el state results
                    this.props.onResults(Search)
                }
            )
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <img src={avatar} />
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Find a repository"
                            onChange={this.handleChange} />
                    </div>
                    <div className="control">
                        <button className="button is-info"
                        >
                            Search
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}

