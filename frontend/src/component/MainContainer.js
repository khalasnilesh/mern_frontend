import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import HeaderComponent from './header'; 
import ListClientComponent  from '../component/ClientsComponent/listClients'

function MainContainer(props) {
   
    console.log(props.isLoggedin)
    
        return (
            <>
            <h1>Main Container</h1>
            
            <HeaderComponent>
            </HeaderComponent>
            
            <div>Footer</div>
            </>
         )
}
const mapStatetoProps=(state)=>{
    return{
    isLoggedin:state.user.isLoggedin,
    msg:state.user.msg
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       // signupUser:function(username,email,password,confirmPassword){
         //  dispatch(signupUser(username,email,password,confirmPassword));
       }
       
    }
   

export default connect(mapStatetoProps,mapDispatchtoProps)(MainContainer);
