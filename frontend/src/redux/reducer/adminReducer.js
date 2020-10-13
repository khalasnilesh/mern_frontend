const initialState = {
  isLoggedIn : false,
    token : '',
    emailId : '',
    userId : '',
    msg: ''   
}

export default function userReducer(state = initialState , action)
{
    switch(action.type) {
        case 'LOGIN_USER':
          return {
            ...state, msg: action.payload , isLoggedIn : action.isLoggedIn
          };
        case 'REGISTER_USER':
            return {
              ...state, allUsers:JSON.parse(action.payload).data,  msg: ''
            };
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