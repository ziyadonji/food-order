import CartContext from "./cart-context";
import { useReducer } from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducerFn = (state, action) => {
    if(action.type==='ADD'){
        console.log(state);
       state.items = [...state.items, action.item];
       state.totalAmount = state.totalAmount + action.item.price * action.item.amount;
       console.log(state)
       return {
              items: state.items,
              totalAmount: state.totalAmount,
       }
    }
    if(action.type==='REMOVE'){
        state.items=state.items.filter(item=>item.id !== action.id);
        state.totalAmount = state.totalAmount - action.item.price * action.item.amount;
        return {
            items: state.items,
            totalAmount: state.totalAmount,
     }

    }
    return defaultCartState;
}


const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducerFn, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });

    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;