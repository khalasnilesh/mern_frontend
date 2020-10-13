import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Container,Row,Col,Form ,Button , Table} from 'react-bootstrap';

import { connect } from "react-redux";
import { addOrderService  , updateClientService ,getOrderByIdService } from "../../redux/services/orderServices";
import { listUserService , deleteUserService , editUserService } from "../../redux/services/userServices";
import { listClientService , deleteClientService  } from "../../redux/services/clientServices";


import { bindActionCreators } from 'redux';


function orderAddEditComponent(props)
{
    const [orderTitle, setorderTitle] = useState('');
    const [orderDescription, setorderDescription] = useState('');
    const [orderuserId, setorderuserId] = useState('');
    const [orderClientId, setorderClientId] = useState('');

    const { _orderId } = props.match.params;
    const dispatch = useDispatch();
    if(_orderId)
    {
       
        useEffect(()=>{
            dispatch(getOrderByIdService(_orderId))
        });
    
    }

    // fetch User 
    useEffect(()=>{
        dispatch(listUserService())
    });
    const allUsers = useSelector(state=>state.user.allUsers);
    console.log(allUsers);

    // fetch Client
    useEffect(()=>{
        dispatch(listClientService())
    });
    const allClients = useSelector(state=>state.client.allClients);
    console.log(allClients);

    if(props.action==='Add'){
        var actionButton=<Button variant="primary" onClick={()=>props.addOrderService(orderTitle,orderDescription,orderuserId,orderClientId)}>Add Order</Button>;
        }else{
         actionButton=<Button variant="primary" onClick={()=>props.EditOrderService()}>Update Order</Button>;  
        }

        return (
            <Container>
            <Row>
            <Col>
        <h1>{props.action} Order </h1>
            <Form className="form">     
            <p>{props.msg}</p>
            <Form.Group controlId="userEmail">
                <Form.Label>Order Title</Form.Label>
                <Form.Control type="text" defaultValue={props.setorderTitle} onChange={e=>setorderTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="userPassword">
                <Form.Label>Order Description</Form.Label>
                <Form.Control type="text" defaultValue={props.setorderDescription} onChange={e=>setorderDescription(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="userPassword">
                <Form.Label>Assign Employee</Form.Label>
                <Form.Control  as="select" onChange={e=>setorderuserId(e.target.value)}>
                    {
                        allUsers.map(item => (
                            <option
                              key={item._id}
                              value={item._id}
                            >
                              {item.username}
                            </option>
                          ))
                    }
         
            </Form.Control>
            </Form.Group>
            <Form.Group controlId="userPassword">
                <Form.Label>Assign Client</Form.Label>
                <Form.Control  as="select" onChange={e=>setorderClientId(e.target.value)}>
                    {
                        allClients.map(item => (
                            <option
                              key={item._id}
                              value={item._id}
                            >
                              {item.name}
                            </option>
                          ))
                    }
         
            </Form.Control>
            </Form.Group>
                {actionButton}
            </Form>
            </Col>
            <Col>
            </Col>
            </Row>
            </Container>
        )
}

const mapStatetoProps=(state)=>{
    return{
       orderTitle: state.order.allOrders.title,
       orderDescription:state.order.allOrders.description,
       orderuserId:state.order.allOrders.orderuserId,
       orderClientId:state.order.allOrders.description,
       orderId:state.order.allOrders._id,
       msg:state.order.msg,
       action:state.order.action

    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
        addOrderService:function(title,description,userId,clientId){
           dispatch(addOrderService(title,description,userId,clientId));
       }
     
    }
   }

export default connect(mapStatetoProps,mapDispatchtoProps)(orderAddEditComponent);