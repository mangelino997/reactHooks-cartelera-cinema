import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Movie } from "./Movie"

/* No hace falta convertirlo a Hooks porque ni usa ni ESTADO ni EFECTOS */
export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props
        return (

            <div className="movie-list">
                {movies.map(movie => {
                    return (
                        <div className="movie-list-item" key={movie.imdbID}>
                            <Movie
                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster} />
                        </div>
                    )
                })
                }
            </div>
        )
    }
}