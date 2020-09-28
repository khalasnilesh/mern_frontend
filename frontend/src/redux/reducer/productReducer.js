import {userRequest , userError, userSuccess } from '../action/productActions';

const initialState = {
    loading : false,
    users : [] ,
    error: '',
    success: '',
    productsData : '',
    type2data: []
}

export default function productReducer(state = initialState , action)
{
   // console.log('hello world' + action.type);

        //console.log(action.type);
       // action.
        switch(action.type)
        {
            case "USER_REQUEST":
                    return {
                        ...state,loading:true
                    }
            case "USER_SUCCESS":
                return {
                    users:action.payload,loading:false,error:''
                }
            case "USER_ERROR":
                return {
                    users:[],loading:false,error:action.payload
                }
            case "PRODUCT_SUCCESS":
                return {
                    type2data:action.payload,loading:false,error:action.payload
                }
            default:
                return{
                    ...state
                }
        }
}


