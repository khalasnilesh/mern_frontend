import { getUsers, loginUser , getUserDetails,  dbError ,AddUser ,EditUser , DeleteUser } from '../action/userAction';
import { Redirect } from "react-router-dom";
import { push , browserHistory } from "react-router-redux";


const axios = require('axios');

export function listUserService()
{
  return dispatch => {
    var OPTIONS = {
       url: "http://localhost:4000/users",
       method: "POST",
      // data:{name:clientName,password:'123456', email:'nilesh@gmail.com', status:'1' },
       headers: {
         "content-type": "application/json",
         "Access-Control-Allow-Origin" : '*'
       },
     }
       axios(OPTIONS)
       .then(response  => {
      //   console.log(JSON.stringify(response.data));

       return  dispatch(getUsers(JSON.stringify(response.data)))
       })
       .catch(error => {
           return  dispatch(dbError(error))
       })
   }
}
export function addUserService(email,password) {
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/users/register",
        method: "POST",
        data:{username:new Date().getTime(),password:password, email:email, role:'3' },
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
                dispatch(AddUser(JSON.stringify(response.data)))
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
        return  dispatch(getUsers(JSON.stringify(response.data)))
        })
        .catch(error => {
          return  dispatch(dbError(error))
        })
    }
}
export function deleteUserService(userId)
{
   //console.log(this.props);
    return dispatch => {
        var OPTIONS = {
           url: "http://localhost:4000/users/deleteuser",
           method: "POST",
           data:{userId:userId },
           headers: {
             "content-type": "application/json",
             "Access-Control-Allow-Origin" : '*'
           },
         }
           axios(OPTIONS)
           .then(response  => {
           //return  dispatch(deleteClient(JSON.stringify(response.data)))
         //  console.log(this.state);
          return  dispatch(DeleteUser(userId));

           })
           .catch(error => {
        //       return  dispatch(dbError(error))
           })
       }
}



export function getUserDetailService(userId) {
  console.log(userId);
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/users/fetchuserbyId",
        method: "POST",
        data:{userId:userId },
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
         return  dispatch(getUserDetails(JSON.stringify(response.data)))
        })
        .catch(error => {
     //       return  dispatch(dbError(error))
        })
    }
}


export function updateUserDetailService(userId, userEmail, userPassword) {
    console.log('pass data to api ' + userId, userEmail, userPassword);
    return dispatch => {
     var OPTIONS = {
        url: "http://localhost:4000/users/updateprofile",
        method: "POST",
        data:{userId:userId,email: userEmail ,password:userPassword},
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
          console.log(JSON.stringify(response.data));
         // listClientService();
         return  dispatch(EditUser(JSON.stringify(response.data)))
        })
        .catch(error => {
      //      return  dispatch(dbError(error))
        })
    }
}