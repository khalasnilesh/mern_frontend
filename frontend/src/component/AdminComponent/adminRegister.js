import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { adminLogin } from '../../redux/services/adminServices';


function AdminRegister(props) {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   return ( 
       <Container>
       <Row>
       <Col>
       <h1>Sign Up</h1>
           <Form className="form">     
   <p>{props.msg}</p>
 <Form.Group >
   <Form.Label>Username</Form.Label>
   <Form.Control type="text" defaultValue={props.username} onChange={e=>setUsername(e.target.value)} />
 
 </Form.Group>
 
 <Form.Group >
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" defaultValue={props.password} onChange={e=>setPassword(e.target.value)} />
 
 </Form.Group>
 <p><a href="/signup">Create New Account</a></p>
 <Button variant="primary" onClick={()=>props.loginUser(username,password)}>Login</Button>
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
       username:state.user.username,
      password:state.user.password,
      msg:state.user.msg
   }
  }
  
  const mapDispatchtoProps=(dispatch)=>{
   return{
      
      adminLogin:function(username,password){
       dispatch(adminLogin(username,password));
   },
      
   }
  }
  

   export default connect(mapStatetoProps,mapDispatchtoProps)(AdminRegister);
