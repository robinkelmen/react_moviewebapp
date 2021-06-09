
import './App.css';
import  Header from './Components/Header';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies'
import {useState, useEffect} from 'react'
import makeRequests from './Services/makeRequests';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import Moviedetail from './Components/Moviedetail';
import {Account} from './Services/Accounts'
import Auth from './Services/Auth'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'



function App() {
  const [genre, setGenre] = useState(makeRequests.fetchTrending);
  console.log(localStorage.getItem('accessToken'));


/*   if (localStorage.getItem('accessToken') == null || localStorage.getItem('accessToken') == "" ) {
    if(window.location.hash != null  && window.location.hash != "" ){
      
      localStorage.setItem('accessToken' , window.location.hash);
      
    } 
  }  
  if(localStorage.getItem('accessToken') == null || localStorage.getItem('accessToken') == ""){
    window.location = 'https://lulumovie.auth.us-east-1.amazoncognito.com/login?client_id=6rs4dui65ehd8ea057u6cjo8kh&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=d2028f61ukkst.cloudfront.net';
  }else{
    const urlParams = new URLSearchParams(new URL(window.location).search)
   
    
      console.log(urlParams.get('code'));
    
    Auth(urlParams.get('code')); */
  return (
    
    <Account>
    <div className="App">
    
      <Header setGenre={setGenre}/>
      < NavBar setGenre={setGenre }/>
      <Movies setGenre={genre}/>
      

    </div>
    </Account>
  );
  }


export default withAuthenticator(App);
