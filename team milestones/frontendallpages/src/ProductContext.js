// Importing functions to create and use a Context component
import React, { useReducer, createContext, useCallback } from 'react';

// Create a Context component
export const ProductContext = createContext();

// Declare actions for this component
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// Declare an initial state for the Context component (i.e, the global state)
const initialState = {
    productName: localStorage.getItem('productName') || undefined,
    productDescription: localStorage.getItem('productDescription') || undefined,
    jsonwebtoken: localStorage.getItem('jsonwebtoken') || undefined,
    loggedIn: localStorage.getItem('firstname') ? true :false,
    productPrice: localStorage.getItem('productPrice') || undefined,
    avatar: localStorage.getItem('avatar') || undefined
}


// The reducer that will change the (global) state
const reducer = (state=false, action) => {
    if(action.type === UPDATE_PRODUCT) {
        return {
            ...state,
            ...action.payload
        }
    }
}


// Create the Provider component
export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Declare function to send payload to reducer
    const updateProduct = useCallback(
        (payload) => {

            // Set the values in the user's computer
            localStorage.setItem('productName', payload.productName);
            localStorage.setItem('productDescription', payload.productDescription);
            localStorage.setItem('productPrice', payload.productPrice);
            localStorage.setItem('avatar', payload.avatar);
            localStorage.setItem('jsonwebtoken', payload.jsonwebtoken);


            dispatch(
                {
                    type: UPDATE_PRODUCT,
                    payload: payload
                }
            )
        }, [dispatch]
    );

    return (
        <ProductContext.Provider 
            value={{
                productName: state.productName,
                productDescription: state.productDescription,
                jsonwebtoken: state.jsonwebtoken,
                loggedIn: state.loggedIn,
                avatar: state.avatar,
                productPrice: state.productPrice,
                updateProduct
            }}
        >{children}
        </ProductContext.Provider>

    )
};