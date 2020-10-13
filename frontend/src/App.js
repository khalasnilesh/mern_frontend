import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import setAuthenticationToken from './component/AdminComponent/setAuthenticationToken';
import UsersComponent from './component/UsersComponent/UsersComponent'
import ClientComponent  from './component/ClientsComponent/clientComponent'
import ListClientComponent  from './component/ClientsComponent/listClients'
import HeaderComponent  from './component/header'
import store from './redux/store';

import MainContainer from './component/MainContainer';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
          <MainContainer></MainContainer>     
    </div>
    </Provider>
  );
}

export default App;