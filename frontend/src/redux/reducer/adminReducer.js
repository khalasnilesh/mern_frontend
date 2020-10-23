const initialState = {
  isLoggedIn : false,
    token : '',
    emailId : '',
    userId : '',
    msg: '' ,
    loginUserDetails: {}
}

export default function userReducer(state = initialState , action)
{
    switch(action.type) {
        case 'LOGIN_USER':
          return {
            ...state, msg: action.payload , isLoggedIn : action.isLoggedIn , loginUserDetails : action.loginUserDetails
          };
        case 'SET_CURRENT_USER':
        console.log('step#2' + action.payload);
          return{
            ...state,
            loginUserDetails:action.payload,
            isLoggedIn:true
        }
        case 'REGISTER_USER':
            return {
              ...state, allUsers:JSON.parse(action.payload).data,  msg: ''
            };
        case 'ADMIN_LOGOUT':
              return {
                ...state,
                loginUserDetails:action.payload,
                isLoggedIn:false,
                msg: 'Admin LogOut Successfully!!'
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