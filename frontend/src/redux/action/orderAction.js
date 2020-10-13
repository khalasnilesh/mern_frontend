
 const FETCH_ORDERS = 'FETCH_ORDERS'; 
 const CREATE_ORDER = 'CREATE_ORDER'; 
 const DB_ERROR = "DB_ERROR";
 const EDIT_USER = "EDIT_USER";
 const GET_USER_DETAILS = "GET_USER_DETAILS";
 const DELETE_USER = "DELETE_USER";
export function fetchOrders(orders)
{
    return {
        type : FETCH_ORDERS,
        payload : orders
     }
}
export function getUserDetails(userDetails)
{
  return {
    type : GET_USER_DETAILS,
    payload : userDetails
 }
}

export function createOrder(orderdata)
{
  return {  type : CREATE_ORDER,
          payload : orderdata
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