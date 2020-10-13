import axios from "axios";

export default function setAuthenticationToken(token){
    console.log('step#1' + token);
   if(token){
       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   }else{
       delete axios.defaults.headers.common['Authorization'];
   }
}