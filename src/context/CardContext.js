import { createContext, useContext } from "react"

const initialState={
    cartList: [],
    total: 0
}

const CartContext=createContext(initialState);

export const CartProvider =({children})=>{

    const value={
        total:0
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart=() => {
    const context=useContext(CartContext);
    return context;
}