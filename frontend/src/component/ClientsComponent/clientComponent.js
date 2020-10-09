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
          clientName: '',
          clientEmail : '',
          clientAddress:'',
          clientPhone:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
       console.log(this.state.clientAddress);
       this.props.addClientService(this.state.clientName , this.state.clientEmail, this.state.clientPhone, this.state.clientAddress);
        e.preventDefault();
    }  
    

  render() {
      return(
          <div>
              <h1>Client Register Form</h1>
              {this.props.msg}
              <Container>
               
                <Form onSubmit={this.handleSubmit}>
                <Row>
                <Col>
                <Form.Label>Enter Client Name </Form.Label>
                </Col>
                <Col>
                <Form.Control type="text" defaultValue={this.props.clientDefaultName}  id="clientName"  onChange={this.handleChange}></Form.Control>
                </Col>
                </Row>
                <Row>
                <Col> <Form.Label>Enter Client Enmail</Form.Label> </Col>
                <Col><Form.Control type="email" defaultValue={this.props.clientDefaultName}  id="clientEmail"  onChange={this.handleChange}></Form.Control></Col>
                </Row> 
                <Row>
                <Col>
                <Form.Label>Enter Client Phone </Form.Label>
                </Col>
                <Col>
                <Form.Control type="text" defaultValue={this.props.clientDefaultName}  id="clientPhone"  onChange={this.handleChange}></Form.Control>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Label>Enter Client Address </Form.Label>
                </Col>
                <Col>
                <Form.Control as="textarea" rows="3"  name="clientAddress" id="clientAddress" onChange={this.handleChange}>
                   </Form.Control>
                </Col>
                </Row>

                <Row>
                <Col>
                <Button className="btn green" onClick={this.handleSubmit}>Add Client</Button>
                </Col>
                </Row>

                </Form>
                   
                
                </Container>
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
        addClientService:function(clientName,clientEmail,clientPhone,clientAddress){
        dispatch(addClientService(clientName,clientEmail,clientPhone,clientAddress));
       }  
    }
   }
export default connect(mapStateToProps,mapDispatchtoProps )(clientComponent);