import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderComponent from './header'; 
import AdminLogin from './AdminComponent/adminLogin';
import AdminRegister from './AdminComponent/adminRegister';

function MainContainer(props) {
   
    const isLoggedIn = useSelector(state=>state.admin.isLoggedIn);

        if(props.isLoggedIn)
        {
            return (
                <>
                <h1>Main Container</h1>
                <HeaderComponent>
                </HeaderComponent>
                <div>Footer</div>
                </>
             )
        }
        else
        {
            console.log('Login Register');
            return (
                <>  
                    <Router>
                        <Route exact path="/" component={AdminLogin} />
                        <Route exact path="/AdminRegister" component={AdminRegister} />
                    </Router>
                </>
             )
        }
       
}
const mapStatetoProps=(state)=>{
    console.log(state.admin.isLoggedIn);
    return{
    isLoggedIn:state.admin.isLoggedIn,
    msg:state.admin.msg
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       // signupUser:function(username,email,password,confirmPassword){
         //  dispatch(signupUser(username,email,password,confirmPassword));
       }
       
    }
   

export default connect(mapStatetoProps,mapDispatchtoProps)(MainContainer);
