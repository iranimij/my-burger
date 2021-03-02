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
        const AdditionalPrice = INGREDIENT_PRICE[type];
        let newPrice = oldPrice + AdditionalPrice;

        setBurgerData({
            ingredient: Ingredients,
            totalPrice: newPrice
        });
    };

    const removeIngredient = (type) => {
        let Ingredients = {...burgerData.ingredient};

        Ingredients[type] = Ingredients[type] - 1;

        const oldPrice = burgerData.totalPrice;
        const AdditionalPrice = INGREDIENT_PRICE[type];
        let newPrice = oldPrice - AdditionalPrice;

        if (Ingredients[type] < 0 || newPrice < 0) {
            return;
        }

        setBurgerData({
            ingredient: Ingredients,
            totalPrice: newPrice
        });
    };

    return (
        <Aux>
            <Burger ingredients={burgerData.ingredient}/>
            <BuildControls
                addIngHandler={addIngredient}
                removeIngHandler={removeIngredient}
                ingredientData={burgerData.ingredient}
                totalPrice={burgerData.totalPrice}
            />

        </Aux>
    );
};

export default BurgerBuilder;