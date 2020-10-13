const initialState = {
    isLoggedin : false,
    msg : '',
    allOrders: [],
    action: 'Add',
    _orderId : ''

}

export default function orderReducer(state = initialState , action)
{
    switch(action.type) {
      case 'FETCH_ORDERS':
        return {
          ...state, allOrders:JSON.parse(action.payload).data,  msg: ''
        };
        case 'CREATE_ORDER':
          return {
            ...state, msg:JSON.parse(action.payload).message
          };
        case 'ADD_USER':
          return {
            ...state, allUsers:JSON.parse(action.payload).data,  msg: JSON.parse(action.payload).message
          };
          case 'EDIT_USER':
            return {
              ...state, allUsers:JSON.parse(action.payload).data,  msg: JSON.parse(action.payload).message
            };
          case 'GET_USER_DETAILS':
            return {
              ...state, allUsers:JSON.parse(action.payload).data[0],  msg: '' , action  : 'Edit'
            };
            case "DELETE_USER":
            return {
                ...state,allUsers:state.allUsers.filter(territory => territory._id !== action.payload), msg:'User deleted successfully!' , act: 'delete'
            }
          case 'DB_ERROR':
            return {
              ...state, allOrders:JSON.parse(action.payload),  msg: JSON.parse(action.payload).message
            };
        default:
          return state;
      }  

    /* if(action.type === 'ADMIN') 
    { 
      //state;
        state.total = state.total - 1;
        console.log('inside reducer' + state.total);

        return {
            ...state
        }
    }
    else
    {
        return state;
    } */

} 