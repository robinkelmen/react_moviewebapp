const API_KEY = ""; 

export default{
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchIndieMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchSearchResults:`/search/movie?api_key=${API_KEY}&query=`,
    fetchMovieById:`search/movie?api_key=${API_KEY}&movie_id=`,
    getAPIKEY:`${API_KEY}`

}