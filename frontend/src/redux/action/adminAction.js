 import setAuthenticationToken from './setAuthenticationToken';
 import jwt from "jsonwebtoken"; 

 const LOGIN_USER = 'LOGIN_USER'; 
 const REGISTER_USER = 'REGISTER_USER'; 
 const ADMIN_LOGOUT = 'ADMIN_LOGOUT'; 

 const DB_ERROR = "DB_ERROR";
 const SET_CURRENT_USER = "SET_CURRENT_USER";

export function logIn(userdata)
{
    //console.log(userdata.message);
    if(userdata.message === 'correct details!!')
    {
      const token= userdata.token;
      localStorage.setItem("jwtToken",token);
      console.log(jwt.decode(token));
      setAuthenticationToken(token);
      setCurrentUser(jwt.decode(token));
      console.log(jwt.decode(token));

      return {
        type : LOGIN_USER,
        payload : userdata.message,
        isLoggedIn:true,
        loginUserDetails : jwt.decode(token)
 
     }   
    }
    else
    {
      return {
        type : LOGIN_USER,
        payload : userdata.message,
        isLoggedIn:false,
     }  
    }
    
}


export function register(users)
{
    return {
        type : REGISTER_USER,
        payload : users
     }
}

export function adminLogOut(users){
  localStorage.removeItem('jwtToken');
  setAuthenticationToken(false);
  setCurrentUser();
  return {
    type : ADMIN_LOGOUT,
    payload : false
 }
}
export function dbError(error)
{
    return {
        type : DB_ERROR,
        payload : error
     }
}

export function setCurrentUser(userdata)
{
  return {
    type : SET_CURRENT_USER,
    payload : userdata
 }
}