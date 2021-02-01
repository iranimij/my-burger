import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    let hasIngredient = false;
    let allIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            hasIngredient = true;
            return <BurgerIngredient type={ingKey} key={ingKey + i}/>
        })
    });

    if ( ! hasIngredient ) {
        allIngredients = <p>Please start to add Ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {allIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;