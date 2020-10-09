import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { listUserService , deleteUserService , editUserService } from "../../redux/services/userServices";

import { Link } from 'react-router-dom';

import { Table,Button } from 'react-bootstrap';

function userListing(props) {
   // const user_id = useSelector(state=>state.user.userDetails.userid);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(listUserService())
    });

    const allUsers = useSelector(state=>state.user.allUsers);

//console.log(userDetails);

    if(allUsers !== ''){
    var userData = allUsers.map((val,i)=>(
        <tr key={i}>
     <td key={val._id}>{i+1}</td>       
    <td>{val._id}</td>
    <td>{val.email}</td>
    <td>
    <Button className="btn btn-danger" onClick={()=>deleteUser(val._id)}>Delete</Button>
    <Link to={`/users/editUser/${val._id}`} className="ui basic button green">Edit</Link></td>
    </tr>
    ))

}else{
    userData=<tr>
    <td colSpan="4">No Records Found</td>       
   </tr>
}
    
 
   const deleteUser=(id)=>{
       dispatch(deleteUserService(id));
   }
    
    return (
        <div>    <p> 111 {props.msg}</p>

            <h1>All Users</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                        <th>_ID</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       userData
                    }
                    
                </tbody>
            </Table>
 
        </div>
    )
}

const mapStatetoProps=(state)=>{
    console.log('reutrn back'+state.user);
  return{
    allUsers:state.user.allUsers,
    msg : state.user.msg
   
  }
 }

 
const mapDispatchtoProps=(dispatch)=>{
  return{
         deleteUserService:function(userId){
         dispatch(deleteUserService(userId));
     }  
  }
 }
export default (userListing);
