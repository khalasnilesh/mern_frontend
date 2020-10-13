import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderComponent from './header'; 
import AdminLogin from './AdminComponent/adminLogin';

function MainContainer(props) {
   
    const isLoggedIn = useSelector(state=>state.admin.isLoggedIn);

        if(props.isLoggedIn)
        {
            return (
                <>
               
                <h1>11Main Container</h1>
                <HeaderComponent>
                </HeaderComponent>
                <div>Footer</div>
                </>
             )
        }
        else
        {
            return (
                <>
                    <AdminLogin />
                </>
             )
        }
       
}
const mapStatetoProps=(state)=>{
    console.log(state.admin);
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
