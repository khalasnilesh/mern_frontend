import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addUserService , editUserService ,updateUserDetailService,  getUserDetailService} from "../../redux/services/userServices";
import {connect} from 'react-redux';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';


 function userAdd(props)
{
    const [userEmail, setuserEmail] = useState('');

    const [userPassword, setuserPassword] = useState('');

    const { _userId } = props.match.params;
    
    if(_userId)
    {
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getUserDetailService(_userId))
        });
    
    }

    if(props.action==='Add'){
        var actionButton=<Button variant="primary" onClick={()=>props.addUserService(userEmail,userPassword)}>Add User</Button>;
            }else{
         actionButton=<Button variant="primary" onClick={()=>props.updateUserDetailService(props.userId,userEmail,userPassword)}>Update User</Button>;  
            }

    return (
        <Container>
        <Row>
        <Col>
    <h1>{props.action} User </h1>
        <Form className="form">     
        <p>{props.msg}</p>
        <Form.Group controlId="userEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="text" defaultValue={props.userEmail} onChange={e=>setuserEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="userPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control type="password" defaultValue='' onChange={e=>setuserPassword(e.target.value)} required />
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
       userEmail: state.user.allUsers.email,
       userPassword:state.user.allUsers.password,
       userId:state.user.allUsers._id,
       msg:state.user.msg,
       action:state.user.action

    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
        addUserService:function(email,password){
           dispatch(addUserService(email,password));
       },
       updateUserDetailService:function(userId,userEmail,userPassword){
           dispatch(updateUserDetailService(userId,userEmail,userPassword));
       }   
    }
   }

   export default connect(mapStatetoProps,mapDispatchtoProps)(userAdd);
