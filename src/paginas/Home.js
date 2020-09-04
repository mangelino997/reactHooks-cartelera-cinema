import React, { useState} from 'react';
import { Title } from '../componentes/titulo'
import { SearchForm } from '../componentes/SearchForm'
import { MoviesList } from '../componentes/MoviesList'

export default function Home() {
    //creo el state
    const [usedSerach, setUsedSerach] = useState(false)
    const [results, setResults] = useState([])

    // state = { usedSerach: false, results: [] }

    const handleResults = (results) => {
        setResults(results)
        setUsedSerach(true)
    }

    const renderResults = () => {
        return results.length === 0 ? <p>Sin resultados.</p>
            : <MoviesList movies={results} />
    }

    return (
        <div>
            <Title>Buscar película</Title>
            <div className="SearchForm">
                <SearchForm onResults={handleResults} />
                
            </div>
            {usedSerach ?
                renderResults() :
                <p>Use el formulario para buscar una movie.</p>}
        </div>
    )
}



