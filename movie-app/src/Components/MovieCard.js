import React, {forwardRef} from 'react';
import './MovieCard.css';
import TextTruncate from 'react-text-truncate';
import {ThumbUpSharp} from "@material-ui/icons";
import Skeleton from '@material-ui/lab/Skeleton';




const image_base_url = "https://image.tmdb.org/t/p/original/" 
const  MovieCard = forwardRef(({movie}, ref) =>{
   
    return (
        <div ref={ref} className="moviecard">
           
           { movie.backdrop_path ? ( <img 
            src={`${image_base_url}${movie.backdrop_path || movie.poster_path}`}
            />) : (<Skeleton variant="rect" width={500} height={400} />)}
        
            <TextTruncate
            className="overview"
            line={2}
            element="p"
            truncateText="..."
            text={movie.overview}/>

          <h2>{movie.original_title || movie.original_name}</h2>
          <span>{movie.vote_average}</span>
            
            <p className="moviecard_meta">
                {movie.release_date || movie.first_air_date} .
                <ThumbUpSharp/>
                {movie.vote_count}</p>
               

                

        </div>
    )
}); 

export default MovieCard
