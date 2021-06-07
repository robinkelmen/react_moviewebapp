import React from 'react'
import makeRequests from '../Services/makeRequests';
import  './NavBar.css' ;

function NavBar({setGenre}) {
    return (
        <div className="nav">
            <h2 onClick={() => setGenre(makeRequests.fetchTrending)}>
            Trending
            </h2>
            <h2 onClick={() => setGenre(makeRequests.fetchTopRated)}>Top Rated </h2>
            <h2 onClick={() => setGenre(makeRequests.fetchActionMovies)}>Action </h2>
            <h2 onClick={() => setGenre(makeRequests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setGenre(makeRequests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setGenre(makeRequests.fetchThrillerMovies)}>Thriller </h2>
            <h2 onClick={() => setGenre(makeRequests.fetchAnimationMovies)}>Animation</h2>
            <h2 onClick={() => setGenre(makeRequests.fetchHorrorMovies)}>Get Spooked</h2> 
            <h2 onClick={() => setGenre(makeRequests.fetchIndieMovies)}>Indie</h2>
            <h2 onClick={() => setGenre(makeRequests.fetchSciFiMovies)}>Sci-Fi</h2>
            
        </div>
    )
}

export default NavBar
