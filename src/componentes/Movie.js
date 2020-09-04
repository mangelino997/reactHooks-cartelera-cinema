import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

/* No hace falta convertirlo a Hooks porque ni usa ni ESTADO ni EFECTOS */
export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render() {
        const { id, poster, title, year } = this.props

        return (
                <Link to={`/detail/${id}`} className="card card-border-radius card-movie-background">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={poster} alt={title} className="img-movie-radius"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="movie-title">{title}</p>
                            </div>
                        </div>
                        <div className="content">
                            <time className="movie-title">{year}</time>
                        </div>
                    </div>
            </Link>
        )
    }
}