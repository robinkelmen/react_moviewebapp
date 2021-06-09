import React, {useState, useEffect} from 'react'
import './Movies.css'
import MovieCard from './MovieCard'
import axios from '../Services/axios'

import FlipMove from 'react-flip-move'
import makeRequests from '../Services/makeRequests'
import Moviedetail from './Moviedetail'

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

    const [popUpOpen, setPopUpOpen] = useState(false);
    const [popUpData, setPopUpData] = useState(null);
      
    async function fetchData(id){
       
        const request = await axios.get(`/movie/${id}?api_key=${makeRequests.getAPIKEY}&language=en-US`);
        const {data} = request;
        console.log(request)
        setPopUpData(data);
        
        return request;
        
    }
  const openPopUp = id => {
        console.log("clicked");
        console.log(id)
        setPopUpOpen(true);
        fetchData(id);
           
    
    
        }
    
        const closeUp = () =>{
            setPopUpOpen(false);
            setPopUpData("")
        }
    

    return (
        <div className="movies">
            <FlipMove>
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie} openPopUp={openPopUp}/>
            ))}
            </FlipMove>
              { (popUpOpen && popUpData) ? <Moviedetail movie={popUpData} closePopUp={closeUp}/> : false}
        </div>
    )
}

export default Movies
