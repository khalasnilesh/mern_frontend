
import React, { Fragment } from "react";
import { Container,Row,Col,Form ,Button } from 'react-bootstrap';
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
      console.log('client data:' + this.props.allClients);
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
        return(
        <div>
            {this.props.msg}
        <table className="collection" border="1" >
            <tbody>
                {
                    this.props.allClients.map(clientData=>{
                        return(
                            <Fragment>
                            <tr key={clientData.id}>
                            <td className="todo" >
                            {clientData.name}
                            </td>
                            <td className="id" >
                            {clientData.id}
                            </td>
                            <td> <button onClick={(id)=>{this.deleteClient(clientData.id)}}>X </button> </td>
                            <td> <Link to={`/clients/editclient/${clientData.id}`} className="ui basic button green">Edit</Link>
</td>
                            </tr> 
                            </Fragment>
                        )  
                    })
                }
            </tbody>
            </table>
        </div>
        )
          }
  }
}

function mapStateToProps(state){
    //console.log(state.client.allClients);
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