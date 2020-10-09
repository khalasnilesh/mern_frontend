import React, { Component  } from 'react';
import { useState  } from 'react';

import {connect} from 'react-redux';
import './UsersComponent.css';
class UsersComponent extends Component {

  //const [number, setNumber] = useState(1)

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <div> <h1>User Main component</h1>
       Total Users {this.props.total} 
      <input type='text' value={5} onChange={e=>e.target.value}></input>
      <button onClick={this.props.userShow}> Default Add </button>
      <button onClick={this.props.userShow}>+</button>
      <button onClick={this.props.decrement}>-</button>
      </div>
     
    );
  }
}

export default connect(mapStatetoProps , mapDispatchToProps) (UsersComponent);  

function mapStatetoProps(state){
 // console.log('1');
  return{
    total:state.total
  }
}
function mapDispatchToProps(dispatch) {
 // console.log('2');
  return {
    userShow: total => dispatch({ type: "INCREMENT"  }),
    increment: total => dispatch({ type: "INCREMENT" }),
    decrement: total => dispatch({ type: "DECREMENT" }),
  };
}

