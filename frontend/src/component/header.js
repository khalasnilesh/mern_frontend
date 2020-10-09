import React from "react";
import { Container,Row,Col,Form ,Button , Table} from 'react-bootstrap';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { bindActionCreators } from 'redux';
import { editClientaction } from "../redux/action/clientAction";
import clientComponent from "./ClientsComponent/clientComponent";
import listClients from "./ClientsComponent/listClients";
import editClientComponent from "./ClientsComponent/editClientComponent";
import userRegister from "./UsersComponent/userRegister";
import userLogin from "./UsersComponent/userLogin";
import userListing from "./UsersComponent/userListing";
import userAdd from "./UsersComponent/userAdd";

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
             
             <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
                <Link to={'/'} className="nav-link"> Home </Link>
    
                <NavDropdown title="Client Management" id="basic-nav-dropdown">
                  <Link to={'/clients/listClient'}  className="dropdown-item" role="button">Client Listing</Link>
                  <Link to={'/clients/addClient'} className="dropdown-item" role="button">Add Client</Link>
                </NavDropdown>
                <NavDropdown title="User Management" id="basic-nav-dropdown">
                  <Link to={'/users/'} className="dropdown-item"> List Users </Link>
                  <Link to={'/users/add'} className="dropdown-item">Add User </Link>
                </NavDropdown>
             </Nav>
             </Navbar.Collapse>
                
            </Navbar> 
            <Switch>  
            <Route exact path="/" component={listClients} />
             <Route exact path="/clients/addClient" component={clientComponent} />
             <Route exact path="/clients/listClient" component={listClients} />
             <Route path="/clients/editClient/:_clientId" component={editClientComponent}/>
             <Route exact path="/users/" component={ userListing } />
             <Route exact path="/users/add" component={userAdd } />
             <Route path="/users/editUser/:_userId" component={userAdd}/>
             

             </Switch>
             </Router>
             
          </div>
      )
  }
}


export default headerComponent;