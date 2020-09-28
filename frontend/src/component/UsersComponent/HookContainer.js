import React from 'react';
import { shallowEqual, useSelector ,useDispatch } from 'react-redux'
import {userShow , increment , decrement } from '../../redux/action/userAction'; 


 
function HookContainer() {

const hooktotal = useSelector(state => state.total)

const dispatch = useDispatch();

const greeting = 'Hello Function Component!';
 
return <div><h1>{greeting} {hooktotal}</h1> 
<button onClick={()=>dispatch(decrement()) }>Add </button>
</div>;
}
 
export default HookContainer;