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
          clientName: props.allClients.name,
          clientEmail : props.allClients.email,
          clientAddress: props.allClients.address,
          clientPhone: props.allClients.phone
        }
    }
    componentDidMount() {
        const { _clientId } = this.props.match.params;
        console.log(_clientId);
        this.props.editClientService(_clientId);

         
     
     }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
          //console.log(this.props.allClients.id);
          console.log(this.state.clientName);
          console.log(this.state.clientEmail);
          console.log(this.state.clientPhone);
          console.log(this.state.clientAddress);
            this.props.updateClientService(this.props.allClients.id, this.state.clientName , this.state.clientEmail, this.state.clientPhone, this.state.clientAddress);
          e.preventDefault();
    }  
    

  render() {
   //console.log(this.props.allClients.address);
    //  var clientData = this.props.allClients[0];
     // console.log(this.state.clientName);
      return(
          <div>
              <h1>Edit Client Details</h1>
              {this.props.msg}
                <Form onSubmit={this.handleSubmit}>
                {/*    <input type="text" defaultValue={this.props.allClients.name}  id="clientName"  onChange={this.handleChange}></input>
                   <button className="btn green" onClick={this.handleSubmit}>Edit Client</button>
 */}
                <Row>
                <Col>
                <Form.Label>Enter Client Name </Form.Label>
                </Col>
                <Col>
                <Form.Control type="text" defaultValue={this.props.allClients.name}  id="clientName"  onChange={this.handleChange}></Form.Control>
                </Col>
                </Row>
                <Row>
                <Col> <Form.Label>Enter Client Enmail</Form.Label> </Col>
                <Col><Form.Control type="email" defaultValue={this.props.allClients.email}  id="clientEmail"  onChange={this.handleChange}></Form.Control></Col>
                </Row> 
                <Row>
                <Col>
                <Form.Label>Enter Client Phone </Form.Label>
                </Col>
                <Col>
                <Form.Control type="text" defaultValue={this.props.allClients.phone}  id="clientPhone"  onChange={this.handleChange}></Form.Control>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Label>Enter Client Address </Form.Label>
                </Col>
                <Col>
                <Form.Control as="textarea" rows="3"  name="clientAddress" id="clientAddress" onChange={this.handleChange} defaultValue={this.props.allClients.address}>
                
                   </Form.Control>
                </Col>
                </Row>

                <Row>
                <Col>
                <Button className="btn green" onClick={this.handleSubmit}>Edit Client</Button>
                </Col>
                </Row>
                </Form>
          </div>
      )
  }
}



function mapStateToProps(state){
   //console.log(state);
    return{
        msg: state.client.msg,        
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
        updateClientService:function(_clientId ,clientName, clientEmail,clientPhone,clientAddress){
        dispatch(updateClientService(_clientId ,clientName, clientEmail,clientPhone,clientAddress));
       } ,


    }
   }
export default connect(mapStateToProps,mapDispatchtoProps )(editClientComponent);