
import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import jwkToPem from 'jwk-to-pem'
import jsonwebtoken from 'jsonwebtoken'
import axios from 'axios';


export default (id) => {

  const username = ""
  const password = ""
  const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
console.log(id)
const params ={
  headers: {
    
    'Access-Control-Allow-Origin': "*"
    
  },
 
}

  const baseURL=  `https://lulumovie.auth.us-east-1.amazoncognito.com/oauth2/token`;
  const data =  {
    'grant_type' : 'authorization_code',
    'code': `${id}`,
    'redirect_uri' : 'http://localhost:3000',
    'client_id' : '',
    
  }
  
axios.post(baseURL).then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});

};