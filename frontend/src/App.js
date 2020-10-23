import React, { Component } from 'react';
import jwt from "jsonwebtoken";

import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import setAuthenticationToken from './redux/action/setAuthenticationToken';
import UsersComponent from './component/UsersComponent/UsersComponent'
import ClientComponent  from './component/ClientsComponent/clientComponent'
import ListClientComponent  from './component/ClientsComponent/listClients'
import HeaderComponent  from './component/header'
import {setCurrentUser,logout} from "./redux/action/adminAction"

import store from './redux/store';

import MainContainer from './component/MainContainer';

import './App.css';

function App() {

  if(localStorage.jwtToken)
  {
    setAuthenticationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));

    jwt.verify(localStorage.jwtToken, 'AdminSecret', function(err, decode) {
      if (err) {
        console.log(err);
        /*
          err = {
            name: 'TokenExpiredError',
            message: 'jwt expired',
            expiredAt: 1408621000
          }
        */
      }
      else{
        console.log('Check expire : ' + decode.email);
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