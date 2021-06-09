import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import ReactStars from "react-rating-stars-component";
import './MovieDetail.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    input: {
      display: 'none',
    },
  }));

  const ratingParams = {
    size: 20,
    isHalf: true,
    value: 0,
    onChange: newValue => {
      console.log(`Example 4: new value is ${newValue}`);
    }
  };
function Moviedetail({movie, closePopUp}) {
    const classes = useStyles();
    const {genres} = movie;
    console.log(genres)
    const image_base_url = "https://image.tmdb.org/t/p/original/" 
    return (
        <div>
             <section className="detailView">
                 <div className="detailContent">
                 <Button variant="containted" size="large" color="red" className="exitBut" onClick={closePopUp}>Close</Button>
                 <h2 className="detailTitle">{movie.original_title || movie.original_name}</h2>
                     <div className="bigImage">
                 { movie.backdrop_path ? ( <img 
            src={`${image_base_url}${movie.backdrop_path || movie.poster_path}`}
            />) : (<Skeleton variant="rect" width={500} height={400} />)}
            </div>
            <div className="genresContainer">
                    
                    {genres.map((genre, index)=>(
                        <p className="genres">{genre.name}</p>
                    ))}
           
                </div>
            <p>{movie.overview}</p>

          
          
            <div className="moviecard_meta_detail">
                <p className="likes">Release Date - {movie.release_date || movie.first_air_date} </p>
                
                <p className="likes">Likes {movie.vote_count}</p>
               </div>
                <div className="rating">
                    <span >{movie.vote_average}</span>
                 </div>
                 <ReactStars classNames="userRating" {...ratingParams}/>
                 </div>
                
             </section>
        </div>
    )
}

export default Moviedetail
