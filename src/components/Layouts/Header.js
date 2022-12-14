import React, { Fragment } from "react";
import mealImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton showCartHandler={props.showCartHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt='an table of delicious meals'></img>
            </div>

        </Fragment>
    )
}

export default Header;