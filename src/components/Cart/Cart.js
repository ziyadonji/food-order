import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {

    const ctx= useContext(CartContext);
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const removeHandler=(id)=>{
        ctx.removeItem(id);
    }
    const addHandler=(item)=>{}

    const cartItems = <ul className={classes['cart-items']}>{ctx.items.map(item => <CartItem name={item.name} amount={item.amount} price={item.price} onRemove={removeHandler.bind(null,item.id)} onAdd={addHandler.bind(null,item)} ></CartItem>)}</ul>
    return <Modal showCartHandler={props.showCartHandler}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.showCartHandler} className={classes['button--alt']}>Close</button>
            {ctx.items.length>0 && <button className={classes.button}>Order</button>}
        </div>

    </Modal>

}

export default Cart