import React, {useState, useEffect} from 'react'
import './Movies.css'
import MovieCard from './MovieCard'
import axios from '../Services/axios'

import FlipMove from 'react-flip-move'

function Movies({setGenre}) {

    const  [movies, setMovies] = useState([]);

    useEffect(() =>{

        async function fetchData(){
            const request = await axios.get(setGenre);
            console.log(request);
            setMovies(request.data.results);
            return request;
            
        }
        fetchData();
    }, [setGenre ]);

    return (
        <div className="movies">
            <FlipMove>
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Movies
