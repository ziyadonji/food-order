
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const MealItem = ({ meal }) => {
    const ctx = useContext(CartContext);
    const price = `$${meal.price.toFixed(2)}`;
    const onAddtoCartHandler=(amount)=>{
       ctx.addItem({
              id:meal.id,
              name:meal.name,
              amount:amount,
              price:meal.price
         })
    }

    return <div className={classes.meal}>
        <div >
            <h3>{meal.name}</h3>
            <div className={classes.description}>{meal.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={meal.id} onAddToCart={onAddtoCartHandler}/>
        </div>
    </div>

}

export default MealItem;