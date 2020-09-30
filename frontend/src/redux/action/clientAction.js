
export const ADD_CLIENT = 'ADD_CLIENT';
export const FETCH_CLIENT = 'FETCH_CLIENT';
export const EDIT_CLIENT = 'EDIT_CLIENT';

export const DELETE_CLIENT = 'DELETE_CLIENT';
export const CLIENT_DB_ERROR = 'CLIENT_DB_ERROR';
const axios = require('axios');


export function addClient(clientData)
{
   //console.log(JSON.parse(clientData).message);
    return {
        type : ADD_CLIENT,
        payload : clientData
     }
}

export function fetchClient(allclients)
{
   // console.log(JSON.parse(allclients));

    return {
        type : FETCH_CLIENT,
        payload : allclients
     }
}

export function getClient(allclients)
{

    return {
        type : FETCH_CLIENT,
        payload : allclients
     }
}

export function deleteClient(clientId)
{
   // console.log(this.state);
    return {
        type : DELETE_CLIENT,
        payload : clientId
     }
}

export function editClient(clientData)
{
 //console.log(JSON.parse(clientData).data);

    return {
        type : EDIT_CLIENT,
        payload : clientData,
     }
}


export function dbError(error)
{
    return {
        type : CLIENT_DB_ERROR,
        payload : error
     }
}