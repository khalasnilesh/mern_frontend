import { ADD_CLIENT , FETCH_CLIENT , DELETE_CLIENT } from '../action/clientAction';
const initialState={
    clientDefaultName:'Enter Client Name',
    allClients:[],
    act:'Add',
    id:'',
    msg:'',
    clientId : '',
    action: ''
}

export default function clientReducer(state = initialState , action)
{
   
   // console.log(action.payload.message);
    switch(action.type)
    {
        case "ADD_CLIENT":
            return {
                ...state,clientDefaultName:action.payload,msg: JSON.parse(action.payload).message ,act: 'add'
            }
        case "FETCH_CLIENT":
            return {
                ...state,allClients:JSON.parse(action.payload).data, msg:'' , act: 'list'
            }
        case "EDIT_CLIENT":
            return {
                ...state,allClients:JSON.parse(action.payload).data[0], msg:'' , act : 'Edit'
            }
        case "DELETE_CLIENT":
            return {
                ...state,allClients:JSON.parse(action.payload).data, msg:'Client deleted successfully!' , act: 'delete'
            }
        default:
            return{
                ...state
            }
    }
}

