import React, { Fragment } from "react";
import mealImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt='an table of delicious meals'></img>
            </div>

        </Fragment>
    )
}

export default Header;