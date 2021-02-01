import React, {useState} from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';


const BurgerBuilder = (props) => {
    const [ingredient] = useState(
        {
            'salad': 0,
            'cheese': 0,
            'bakon': 0,
            'meat': 0,
        });

    return (
        <Aux>
            <Burger ingredients={ingredient}/>
            <div>Burger Controls</div>
        </Aux>
    );
};

export default BurgerBuilder;