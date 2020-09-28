const USER_TYPE = 'ADMIN'; 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
    total : 100,
    actionInfo : 'Book Example' ,

}

export default function Reducer1(state = initialState , action)
{
  //  console.log('inside reducer' + action.);
    switch(action.type) {
        case 'INCREMENT':
          return {
            total: state.total + 1
          };
        case 'DECREMENT':
          return {
            total: state.total - 1
          };
        case 'RESET':
          return {
            total: 0
          };
        case 'ADMIN':
          return {
            total: state.total + 1
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