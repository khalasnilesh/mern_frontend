import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { listOrderService, deleteOrderService} from "../../redux/services/orderServices";

import { Link } from 'react-router-dom';

import { Table,Button } from 'react-bootstrap';

import {connect} from 'react-redux';


function orderListing(props) {
   // const user_id = useSelector(state=>state.user.userDetails.userid);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(listOrderService())
    });

    const allUsers = useSelector(state=>state.order.allOrders);

//console.log(userDetails);

    if(allUsers !== ''){
    var orderData = allUsers.map((val,i)=>(
        <tr key={i}>
     <td key={val._id}>{i+1}</td>       
    <td>{val._id}</td>
    <td>{val.title}</td>
    <td>{val.client_details.name}</td>
    <td>{val.user_details.username}</td>
     
   
    <td>
        {   val.status == '0'  && 'Pending'  }
        {   val.status == '1'  && 'Accepted' }
        {   val.status == '2'  && 'Rejected' }
        {   val.status == '3'  && 'May Be' }
                
            
    
    </td>
    <td>  
    <Button className="btn btn-danger" onClick={()=>deleteOrder(val._id)}>Delete</Button>
    <Link to={`/users/editUser/${val._id}`} className="ui basic button green">Edit</Link></td>
    </tr>
    )
    )

}else{
    orderData=<tr>
    <td colSpan="4">No Records Found</td>       
   </tr>
}
    
 
   const deleteOrder=(id)=>{
       dispatch(deleteOrderService(id));
   }
    
    return (
        <div>    <p>  {props.msg}</p>

            <h1>All Orders</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                        <th>Order ID</th>
                        <th>Order Title</th>
                        <th>Client Name </th>
                        <th>Employee Name </th>
                        <th>Status </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       orderData
                    }
                    
                </tbody>
            </Table>
 
        </div>
    )
}

const mapStatetoProps=(state)=>{
  return{
    allOrders:state.order.allOrders,
    msg : state.order.msg
   
  }
 }

 
const mapDispatchtoProps=(dispatch)=>{
  return{
         deleteOrderService:function(userId){
         dispatch(deleteOrderService(userId));
     }  
  }
 }
export default connect(mapStatetoProps,mapDispatchtoProps)(orderListing);
