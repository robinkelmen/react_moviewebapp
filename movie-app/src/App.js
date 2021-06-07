
import './App.css';
import  Header from './Components/Header';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies'
import {useState, useEffect} from 'react'
import makeRequests from './Services/makeRequests';



function App() {
  const [genre, setGenre] = useState(makeRequests.fetchTrending);
  return (
    <div className="App">

      <Header setGenre={setGenre}/>
      < NavBar setGenre={setGenre }/>
      <Movies setGenre={genre}/>

    </div>
  );
}

export default App;
