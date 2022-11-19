import { ACTION_TYPE } from "../types/ActionType";

export const addToCart = (Products)=>{
    return{type:ACTION_TYPE.ADD_TO_CART,
    payload : Products}
    
}

export const removeFromCart = (id) =>{
    return{
        type:ACTION_TYPE.REMOVE_FROM_CART,
        payload : id
    }
}

export const fetchProducts = () =>{
            return async(dispatch)=>{
                const response = await fetch(`https://fakestoreapi.com/products`);
                const data = await response.json();
                dispatch({type:ACTION_TYPE.FETCH_PRODUCTS,
                payload: data
                })
            }

    // const response = await fetch(`https://fakestoreapi.com/products`);
    // const data = await response.json();

    // return{type:ACTION_TYPE.FETCH_PRODUCTS,
    //     payload : data
    // }
}