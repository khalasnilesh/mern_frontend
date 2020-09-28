import React from "react";
import { Container,Row,Col,Form ,Button , Table} from 'react-bootstrap';

import { connect } from "react-redux";
import { addClientService, editClientService  , updateClientService} from "../../redux/services/clientServices";
import { bindActionCreators } from 'redux';

import ListClientComponent from "./listClients";


class editClientComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clientName: ''
        }
    }
    componentDidMount() {
        const { _clientId } = this.props.match.params;
       // console.log(_clientId);
        this.props.editClientService(_clientId);

         
     
     }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
          //console.log(this.props.allClients.id);
          //console.log(this.state.clientName);
            this.props.updateClientService(this.props.allClients.id, this.state.clientName);
          e.preventDefault();
    }  
    

  render() {
  //  console.log(this.props.allClients);
    //  var clientData = this.props.allClients[0];
      //  console.log(clientData);
      return(
          <div>
              <h1>Client Register Form</h1>
              {this.props.msg}
                <form onSubmit={this.handleSubmit}>
                   <input type="text" defaultValue={this.props.allClients.name}  id="clientName"  onChange={this.handleChange}></input>
                   <button className="btn green" onClick={this.handleSubmit}>Edit Client</button>
                </form>
          </div>
      )
  }
}



function mapStateToProps(state){
   //console.log(state);
    return{
        msg: state.client.msg,
        clientName: state.client.clientName,
        allClients: state.client.allClients,
        act : state.client.act

     }
   }

const mapDispatchtoProps=(dispatch)=>{
    //console.log('1');
    return{
        editClientService:function(_clientId){
        dispatch(editClientService(_clientId));
       } ,
        updateClientService:function(_clientId , clientName){
        dispatch(updateClientService(_clientId , clientName));
       } ,


    }
   }
export default connect(mapStateToProps,mapDispatchtoProps )(editClientComponent);