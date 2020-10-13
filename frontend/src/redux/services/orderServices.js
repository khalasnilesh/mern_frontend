import { fetchOrders,  getOrderDetails,  dbError  , createOrder ,editOrder  , deleteOrder } from '../action/orderAction';
import { Redirect } from "react-router-dom";
import { push , browserHistory } from "react-router-redux";


const axios = require('axios');

export function deleteOrderService()
{
}
export function listOrderService()
{
  return dispatch => {
    var OPTIONS = {
       url: "http://localhost:4000/orders",
       method: "GET",
      // data:{name:clientName,password:'123456', email:'nilesh@gmail.com', status:'1' },
       headers: {
         "content-type": "application/json",
         "Access-Control-Allow-Origin" : '*'
       },
     }
       axios(OPTIONS)
       .then(response  => {

       return  dispatch(fetchOrders(JSON.stringify(response.data)))
       })
       .catch(error => {
           return  dispatch(dbError(error))
       })
   }
}
export function addOrderService(title,description,userid,clientid) {
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/orders/createOrder",
        method: "POST",
        data:{title:title,description:description, productId:'1',clientId : clientid, userId : userid },
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
                dispatch(createOrder(JSON.stringify(response.data)))
        })
        .catch(error => {
            return  dispatch(dbError(error))
        })
    }
}


export function getOrderByIdService()
{
  return dispatch => {
    var OPTIONS = {
       url: "http://localhost:4000/orders",
       method: "GET",
      // data:{name:clientName,password:'123456', email:'nilesh@gmail.com', status:'1' },
       headers: {
         "content-type": "application/json",
         "Access-Control-Allow-Origin" : '*'
       },
     }
       axios(OPTIONS)
       .then(response  => {

       return  dispatch(fetchOrders(JSON.stringify(response.data)))
       })
       .catch(error => {
           return  dispatch(dbError(error))
       })
   }
}
/* 
export function listOrderService() {
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
        return  dispatch(getUsers(JSON.stringify(response.data)))
        })
        .catch(error => {
          return  dispatch(dbError(error))
        })
    }
} */