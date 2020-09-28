

const USER_TYPE = 'ADMIN'; 
 const INCREMENT = "INCREMENT";
 const DECREMENT = "DECREMENT";
 const defualtNumber = 5;
export function userShow(defualtNumber = 5 )
{
    return {
        type : USER_TYPE,
        payload : defualtNumber

        
     }
}
export function increment(defualtNumber = 5) {
    return { type: INCREMENT,
      payload : defualtNumber };
  }
  
export function decrement() {
    return { type: DECREMENT };
  }

  