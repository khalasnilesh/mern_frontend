import React from "react";
import { Container,Row,Col,Form ,Button , Table} from 'react-bootstrap';

import { connect } from "react-redux";
import { addClientService } from "../../redux/services/clientServices";
import { bindActionCreators } from 'redux';

import ListClientComponent from "./listClients";


class clientComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clientName: ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
       console.log(this.props);
        this.props.addClientService(this.state.clientName);
        e.preventDefault();
    }  
    

  render() {
      return(
          <div>
              <h1>Client Register Form</h1>
              {this.props.msg}
                <form onSubmit={this.handleSubmit}>
                   <input type="text" defaultValue={this.props.clientDefaultName}  id="clientName"  onChange={this.handleChange}></input>
                   <button className="btn green" onClick={this.handleSubmit}>Add Client</button>
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
     }
   }

const mapDispatchtoProps=(dispatch)=>{
    //console.log('1');
    return{
        addClientService:function(clientName){
        dispatch(addClientService(clientName));
       }  
    }
   }
export default connect(mapStateToProps,mapDispatchtoProps )(clientComponent);