const initialState = {
    isLoggedin : false,
    userDetails : {username: '' , email : '' , role : ''} ,
    msg : '',
    allUsers: [],
    email:'',
    password:'',
    action: 'Add',
    _userId : ''

}

export default function userReducer(state = initialState , action)
{
    switch(action.type) {
        case 'REGISTER_USER':
          return {
            ...state, msg: 'user register successfully!!!'
          };
        case 'GET_USERS':
            return {
              ...state, allUsers:JSON.parse(action.payload).data,  msg: ''
            };
        case 'ADD_USER':
          return {
            ...state, allUsers:JSON.parse(action.payload).data,  msg: JSON.parse(action.payload).message
          };
          case 'EDIT_USER':
            console.log(JSON.parse(action.payload).message);
            return {
              ...state, allUsers:JSON.parse(action.payload).data,  msg: JSON.parse(action.payload).message
            };
          case 'GET_USER_DETAILS':
            return {
              ...state, allUsers:JSON.parse(action.payload).data[0],  msg: '' , action  : 'Edit'
            };
            case "DELETE_USER":
              console.log();
            return {
                ...state,allUsers:state.allClients.filter(territory => territory._id !== action.payload), msg:'User deleted successfully!' , act: 'delete'
            }
          case 'DB_ERROR':
            return {
              ...state, allUsers:JSON.parse(action.payload),  msg: JSON.parse(action.payload).message
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