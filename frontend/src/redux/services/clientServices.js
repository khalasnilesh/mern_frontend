import { addClient ,fetchClient,getClient,  deleteClient,editClient,  dbError} from '../action/clientAction';
import { Redirect } from "react-router-dom";
import { push , browserHistory } from "react-router-redux";


const axios = require('axios');


export function addClientService(clientName) {
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/clients/addclient",
        method: "POST",
        data:{name:clientName,password:'123456', email:'nilesh@gmail.com', status:'1' },
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
          
          dispatch(addClient(JSON.stringify(response.data)))
          browserHistory.push('/');


        })
        .catch(error => {
            return  dispatch(dbError(error))
        })
    }
}

export function listClientService() {
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/clients",
        method: "POST",
       // data:{name:clientName,password:'123456', email:'nilesh@gmail.com', status:'1' },
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
        return  dispatch(getClient(JSON.stringify(response.data)))
        })
        .catch(error => {
            return  dispatch(dbError(error))
        })
    }
}
export function deleteClientService(clientId)
{
   //console.log(this.props);
    return dispatch => {
        var OPTIONS = {
           url: "http://localhost:4000/clients/deleteclient",
           method: "POST",
           data:{clientId:clientId },
           headers: {
             "content-type": "application/json",
             "Access-Control-Allow-Origin" : '*'
           },
         }
           axios(OPTIONS)
           .then(response  => {
           //return  dispatch(deleteClient(JSON.stringify(response.data)))
         //  console.log(this.state);
          return  dispatch(deleteClient(clientId));

           })
           .catch(error => {
               return  dispatch(dbError(error))
           })
       }
}



export function editClientService(clientId) {
  console.log(clientId);
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/clients",
        method: "POST",
        data:{clientId:clientId },
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
        return  dispatch(editClient(JSON.stringify(response.data)))
        })
        .catch(error => {
            return  dispatch(dbError(error))
        })
    }
}


export function updateClientService(clientId, clientName) {
   // console.log(clientName);
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/clients/updateclient",
        method: "POST",
        data:{clientId:clientId,name: clientName ,password:'123456', email:'nilesh@gmail.com', status:'1'},
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
          console.log(JSON.stringify(response.data));
         // listClientService();
         return  dispatch(editClient(JSON.stringify(response.data)))
        })
        .catch(error => {
            return  dispatch(dbError(error))
        })
    }
}