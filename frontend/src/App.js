import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";

import UsersComponent from './component/UsersComponent/UsersComponent'
import ClientComponent  from './component/ClientsComponent/clientComponent'
import ListClientComponent  from './component/ClientsComponent/listClients'
import HeaderComponent  from './component/header'
import store from './redux/store';
import HookContainer from './component/UsersComponent/HookContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
          <HeaderComponent></HeaderComponent>     
    </div>
    </Provider>
  );
}

export default App;