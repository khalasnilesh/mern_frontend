
export const USER_REQUEST = 'USER_REQUEST';
export const USER_ERROR = 'USER_ERROR';
export const USER_SUCCESS = 'USER_SUCCESS';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';

export function userRequest()
{
    return {
        type : USER_REQUEST
     }
}
export function userError(error)
{
    return {
        type : USER_ERROR,
        payload : error
     }
}  
export function userSuccess(usersListing)
{    
    return {
        type : USER_SUCCESS,
        payload : usersListing

     }
}

export function productlisting(usersListing)
{    
    return {
        type : PRODUCT_SUCCESS,
        payload : usersListing

     }
}
 
