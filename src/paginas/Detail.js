import React, { useState, useEffect } from 'react';
import { ButtonBackHome } from "../componentes/ButtonBackHome";
import { useParams,  } from 'react-router-dom';


const API_KEY = '7e92a6f6'

export default function Detail() {
    const { movieId } = useParams();
    //creo el objeto movie (vacío) como un state
    const [movie, setMovie] = useState({})
    // state = { movie: {} }

    useEffect(() => {
        console.log(movieId)
        fetchMovie({ id: movieId })
    })

    const fetchMovie = ({ id }) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res =>
                res.json())
            .then(
                movie => {
                    setMovie(movie)
                }
            )
    }

    const { Title, Poster, Actors, Metascore, Plot } = movie
    return (
        <div>
            <ButtonBackHome />
            <h1>{Title}</h1>
            <img src={Poster} />
            <h3>{Actors}</h3>
            <span>{Metascore}</span>
            <p>{Plot}</p>
        </div>
    )
}

// Detail.propTypes = {
//     match: PropTypes.object
// }


//Con React Hooks ya no se usa la pal reservada 'this' y las props se declaran fuera de la funcion
//principal


// export class Detail extends Component {
//     static propTypes = {
//         match: PropTypes.shape({
//             params: PropTypes.object,
//             isExact: PropTypes.bool,
//             path: PropTypes.string,
//             url: PropTypes.string
//         }),
//     }
//     //creo el objeto movie (vacío) como un state
//     state = { movie: {} }

//     fetchMovie({ id }) {
//         fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
//             .then(res =>
//                 res.json())
//             .then(
//                 movie => {
//                     this.setState({ movie })
//                 }
//             )
//     }

//     componentDidMount() {
//         console.log(this.props.match)
//         const { movieId } = this.props.match.params
//         this.fetchMovie({ id: movieId })
//     }

//     render() {
//         const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
//         return (
//             <div>
//                 <ButtonBackHome />
//                 <h1>{Title}</h1>
//                 <img src={Poster} />
//                 <h3>{Actors}</h3>
//                 <span>{Metascore}</span>
//                 <p>{Plot}</p>
//             </div>
//         )
//     }
// }