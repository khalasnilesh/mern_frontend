import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { adminLogin } from '../../redux/services/adminServices';


function LoginContainer(props) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return ( 
       <Container>
       <Row>
      
       <Col>
       <h1>Login</h1>
           <Form className="form">     
   <p>{props.msg}</p>
 <Form.Group >
   <Form.Label>E-Mail</Form.Label>
   <Form.Control type="text" defaultValue={props.email} onChange={e=>setEmail(e.target.value)} />
 
 </Form.Group>
 
 <Form.Group >
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" defaultValue={props.password} onChange={e=>setPassword(e.target.value)} />
 
 </Form.Group>
 <p><a href="/signup">Create New Account</a></p>
 <Button variant="primary" onClick={()=>props.adminLogin(email,password)}>Login</Button>
 </Form>
  </Col>
  <Col>
       <h1>Register</h1>
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
      
      adminLogin:function(email,password){
       dispatch(adminLogin(email,password));
   },
      
   }
  }
  

   export default connect(mapStatetoProps,mapDispatchtoProps)(LoginContainer);
