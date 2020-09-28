// fetchProducts.js

import {userRequest, userError, userSuccess, productlisting } from '../action/productActions';

export function fetchProductsAction() {
    return dispatch => {
        dispatch(userRequest())
        axios('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(res => {
                    if(res.error) {
                        throw(res.error);
                    }
                   return  dispatch(userSuccess(res))
                 //  return res.products;
                })
                .catch(error => {
                   dispatch(userError(error))
                })
    }
}



export function type2() {

    console.log('second time');
    return dispatch => {
        dispatch(userRequest())
        fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(res => res.json())
                .then(res => {
                    if(res.error) {
                        throw(res.error);
                    }
                   return  dispatch(productlisting(res))
                 //  return res.products;
                })
                .catch(error => {
                   dispatch(userError(error))
                })
    }
}
