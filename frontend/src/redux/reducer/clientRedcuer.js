import { ADD_CLIENT , FETCH_CLIENT , DELETE_CLIENT } from '../action/clientAction';
const initialState={
    clientDefaultName:'Enter Client Name',
    allClients:[],
    act:'Add',
    id:'',
    msg:'',
    clientId : '',
    action: '',
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientPhone: ''

}

export default function clientReducer(state = initialState , action)
{
   
    switch(action.type)
    {
        case "ADD_CLIENT":
            return {
                ...state,clientDefaultName:action.payload,msg: JSON.parse(action.payload).message ,act: 'add'
            }
        case "FETCH_CLIENT":
            console.log('22');

            return {
                ...state,allClients:JSON.parse(action.payload).data, msg:'' , act: 'list'
            }
        case "EDIT_CLIENT":
            
            if(JSON.parse(action.payload).message != 'CLient data listing successfully!!')
            {
              var  msg = 'Profile Updated Successfully';
            }
            return {
                ...state,allClients:JSON.parse(action.payload).data[0], msg:msg , act : 'Edit'
            }
        case "DELETE_CLIENT":
            console.log(state.allClients);

            return {
                ...state,allClients:state.allClients.filter(territory => territory._id !== action.payload), msg:'Client deleted successfully!' , act: 'delete'
            }
        default:
            return{
                ...state
            }
    }
}

