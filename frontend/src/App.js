import React, { Component } from 'react';
import jwt from "jsonwebtoken";

import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import setAuthenticationToken from './redux/action/setAuthenticationToken';
import UsersComponent from './component/UsersComponent/UsersComponent'
import ClientComponent  from './component/ClientsComponent/clientComponent'
import ListClientComponent  from './component/ClientsComponent/listClients'
import HeaderComponent  from './component/header'
import {setCurrentUser,adminLogOut} from "./redux/action/adminAction"

import store from './redux/store';

import MainContainer from './component/MainContainer';

import './App.css';

function App() {

  if(localStorage.jwtToken)
  {
    console.log('local token' + localStorage.jwtToken);
    setAuthenticationToken(localStorage.jwtToken);

    jwt.verify(localStorage.jwtToken, 'AdminSecret', function(err, decode) {
      if (err) {
        console.log('token Expire');
        /*
          err = {
            name: 'TokenExpiredError',
            message: 'jwt expired',
            expiredAt: 1408621000
          }
        */
       store.dispatch(adminLogOut());
      }
      else{
     //   console.log('Check still working : ' + decode);
        store.dispatch(setCurrentUser(decode));
            }
    });
  }
  

  return (
    <Provider store={store}>
    <div className="App">
          <MainContainer></MainContainer>     
    </div>
    </Provider>
  );
}

export default App;