import { logIn, register , dbError } from '../action/adminAction';
import { Redirect } from "react-router-dom";
import { push , browserHistory } from "react-router-redux";


const axios = require('axios');

export function adminLogin(email,password)
{
  return dispatch => {
    var OPTIONS = {
       url: "http://localhost:4000/admins/login",
       method: "POST",
       data:{email:email, password : password, status:'1' },
       headers: {
         "content-type": "application/json",
         "Access-Control-Allow-Origin" : '*'
       },
     }
       axios(OPTIONS)
       .then(response  => {
      //   console.log(JSON.stringify(response.data));

       return  dispatch(logIn(response.data))
       })
       .catch(error => {
           return  dispatch(dbError(error))
       })
   }
}