import React, {forwardRef, useState, useEffect} from 'react';
import './MovieCard.css';
import TextTruncate from 'react-text-truncate';
import {ThumbUpSharp} from "@material-ui/icons";
import Skeleton from '@material-ui/lab/Skeleton';
import {Link} from 'react-router-dom'
import Moviedetail from './Moviedetail';
import axios from '../Services/axios';
import makeRequests from '../Services/makeRequests';






const image_base_url = "https://image.tmdb.org/t/p/original/" 
const  MovieCard = forwardRef(({movie,openPopUp}, ref ) =>{






    return (

        <div ref={ref} className="moviecard" onClick={ () => openPopUp(movie.id)}>
           
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
          
            <div className="moviecard_meta">
                <p className="likes">Release Date - {movie.release_date || movie.first_air_date} </p>
                
                <p className="likes">Likes {movie.vote_count}</p>
               </div>
                <div className="rating">
          <span >{movie.vote_average}</span>
          </div>
                
       
        </div>
    )
}); 

export default MovieCard
