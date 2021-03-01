import React, {useState} from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
    'cheese' : 0.5,
    'bakon' : 0.5,
    'salad' : 0.5,
    'meat' : 0.5,
};

const BurgerBuilder = (props) => {
    const [burgerData, setBurgerData] = useState(
        {
            ingredient: {
                'salad': 0,
                'cheese': 1,
                'bakon': 1,
                'meat': 0,
            },
            totalPrice : 4
        });

    const addIngredient = (type) => {
        let Ingredients = {...burgerData.ingredient};
        Ingredients[type] = Ingredients[type] + 1;

        const oldPrice = burgerData.totalPrice;
        console.log(oldPrice);
        console.log(INGREDIENT_PRICE[type]);
        const AdditionalPrice = INGREDIENT_PRICE[type];
        let newPrice = oldPrice + AdditionalPrice;
        console.log(newPrice);

        setBurgerData({
            ingredient: Ingredients,
            totalPrice: newPrice
        });
    };

    return (
        <Aux>
            <Burger ingredients={burgerData.ingredient}/>
            <BuildControls addIngHandler={addIngredient}/>
            <div>Price : {burgerData.totalPrice}</div>
        </Aux>
    );
};

export default BurgerBuilder;