import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null);

const defaultCart = () => {
    let cart = {};
    for(let i = 0; i < all_products.length; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cart, setCart] = useState(defaultCart);
    
    const addToCart = (item) => {
        setCart((prev) => ({...prev, [item]: prev[item] + 1}));
        console.log(cart);
    }

    const removeFromCart = (item) => {
        setCart((prev) => ({...prev, [item]: prev[item] - 1}));
    }


    const contextValue = {all_products, cart, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;