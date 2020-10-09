
 const GET_USERS = 'GET_USERS'; 
 const ADD_USER = 'ADD_USER'; 
 const DB_ERROR = "DB_ERROR";
 const EDIT_USER = "EDIT_USER";
 const GET_USER_DETAILS = "GET_USER_DETAILS";
 const DELETE_USER = "DELETE_USER";
export function getUsers(users)
{
    return {
        type : GET_USERS,
        payload : users
     }
}
export function getUserDetails(userDetails)
{
  return {
    type : GET_USER_DETAILS,
    payload : userDetails
 }
}

export function AddUser(userdata)
{
  return {  type : ADD_USER,
          payload : userdata
  }
}
export function dbError(error)
{
    return {
        type : DB_ERROR,
        payload : error
     }
}
export function EditUser(userdata)
{
  return {  
    type : EDIT_USER,
    payload : userdata
  }
}

export function DeleteUser(userdata)
{
    return {  
      type : DELETE_USER,
      payload : userdata
    }
}