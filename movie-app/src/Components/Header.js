import React, {useEffect, useState} from 'react'
import  './Header.css' ;
import  HomeIcon from "@material-ui/icons/Home";
import  PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'; 
import SearchBar from "material-ui-search-bar";
import { AllInboxOutlined } from '@material-ui/icons';
import makeRequests from '../Services/makeRequests';
 


function Header({setGenre}) {
    const [searchText, setSearchText] = useState("");
    const queryMovies = async() =>{
        try{
        if(searchText){
        setGenre(`${makeRequests.fetchSearchResults}${searchText}`)
        }
        else{
            setGenre(makeRequests.fetchTopRated);
        }
        }catch (error){
            console.log(error);
        }
    }

    const cancelSearch = () =>{
        setSearchText("");
        queryMovies();
    }

    useEffect(() =>{
        queryMovies();
    }, [searchText]);

    return (
        <div className='header' >
           
            <div className="header_icons">

                <div className="header_icon header_icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>

                <div className="header_icon">
                <PlaylistPlayIcon/>
                <p>My List</p>
                </div>

               

                <div className="header_icon">
                <PersonOutlineIcon/>
                <p>Profile</p>
                </div>
                
            </div>
            <SearchBar
                value={searchText}
                placeholder="Find Movies..."
                onChange = { (searchVal) => setSearchText(searchVal)}
                onCancelSearch={() =>cancelSearch()}
                cancelOnEscape={() =>cancelSearch()}
                autoFocus
                style={{
                    color: '#ffff',
                    maxWidth: 800
                  }}
                
                />
            <div className="header_logo">
                <h1>lulu</h1>
            </div>
           
        </div>
    )
}

export default Header
