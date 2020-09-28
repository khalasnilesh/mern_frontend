import React from "react";
import { Container,Row,Col,Form ,Button , Table} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { bindActionCreators } from 'redux';
import { editClientaction } from "../redux/action/clientAction";
import clientComponent from "./ClientsComponent/clientComponent";
import listClients from "./ClientsComponent/listClients";
import editClientComponent from "./ClientsComponent/editClientComponent";


class headerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clientName: ''
        }
    }

    

  render() {
      return(
          <div>
            <Router>
             
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/clent/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/clients/addClient'} className="nav-link">Add Client</Link></li>
                    <li><Link to={'/clients/listClient'} className="nav-link">List Client</Link></li>
                </ul>
            </nav>
            <Switch>  
             <Route exact path="/clients/" component={listClients} />
             <Route exact path="/clients/addClient" component={clientComponent} />
             <Route exact path="/clients/listClient" component={listClients} />
             <Route path="/clients/editClient/:_clientId" component={editClientComponent}/>

             </Switch>
             </Router>
             
          </div>
      )
  }
}


export default headerComponent;