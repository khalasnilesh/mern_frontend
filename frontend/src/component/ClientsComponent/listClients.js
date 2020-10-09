
import React, { Fragment } from "react";
import { Container,Row,Col,Form ,Button , Table } from 'react-bootstrap';
import { connect } from "react-redux";
import { listClientService , deleteClientService , editClientService } from "../../redux/services/clientServices";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class ListClientComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          allClients: ''
        }
    }
    componentDidMount() {
       // console.log(this.props);
      const { dispatch } = this.props
      //  dispatch(fetchProductsAction())
      this.props.listClientService();
        
    
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        this.props.addClientService(this.state.clientName);
        e.preventDefault();
    }  
    deleteClient(clientId)
    {
       /*  console.log(clientId);
        const { dispatch } = this.props
        dispatch(deleteClientService()) */
        this.props.deleteClientService(clientId);
    }
    editClient(clientId)
    {
        this.props.editClientService(clientId);
        
    }

  render() {
     // console.log('client data:' + this.props.allClients);
      /*   if(this.props.allClients)
        {   
            clientDetail = this.props.users.map((item) => <option key={item.id} value={item.id}>{item.name}</option>
        } 
        return(
          <div>
              <h1>Client Listing </h1>
               
        </div>
      ) */

      if(this.props.allClients.length==0)
      return(
          <p>No Client for today!</p>
      )
      else{
        let count= 0;

        return(
        <div>
            {this.props.msg}
            {console.log(this.props.allClients)}
        <Table striped bordered hover className="collection" border="1" >
        <thead>
            <tr>
                <th>#</th>
                <th>Client Name</th>
                <th>Client Address</th>
                <th>Client Phone</th>
                <th>Client Email</th>
                <th>Action</th>
            </tr>
        </thead>
            <tbody>
                {
                   
                    this.props.allClients.map(clientData=>{
                        count = count + 1

                        return(
                            <tr key={clientData.id} >
                            <td className="todo" >
                            {count}
                            </td>
                            <td className="todo" >
                            {clientData.name}
                            </td>
                            <td  >
                            {clientData.address}
                            </td>
                            <td  >
                            {clientData.phone}
                            </td>
                            <td >
                            {clientData.email}
                            </td>
                           
                            <td> <button onClick={(id)=>{this.deleteClient(clientData.id)}}>X </button> 
                             <Link to={`/clients/editclient/${clientData.id}`} className="ui basic button green">Edit</Link>
</td>
                            </tr> 
                        )  

                    } )
                }
            </tbody>
            </Table>
        </div>
        )
          }
  }
}

function mapStateToProps(state){
    console.log('33');
    return{
        msg: state.client.msg,
        allClients: state.client.allClients,
     }
   }

const mapDispatchtoProps=(dispatch)=>{
    return{
        listClientService:function(){
        dispatch(listClientService());
       },
       deleteClientService:function(clientId){
        dispatch(deleteClientService(clientId));
       },
       editClientService:function(clientId){
        dispatch(editClientService(clientId));
       },

    }
   }
export default connect(mapStateToProps,mapDispatchtoProps )(ListClientComponent);