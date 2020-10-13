
 const LOGIN_USER = 'LOGIN_USER'; 
 const REGISTER_USER = 'REGISTER_USER'; 
 const DB_ERROR = "DB_ERROR";

export function logIn(userdata)
{
    console.log(userdata.message);
    if(userdata.message === 'correct details!!')
    {
      const token= userdata.token;
      localStorage.setItem("jwtToken",token);

      return {
        type : LOGIN_USER,
        payload : userdata.message,
        isLoggedIn:true,
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


export function dbError(error)
{
    return {
        type : DB_ERROR,
        payload : error
     }
}