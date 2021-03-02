import React from 'react';
import BuildControl from "./BuildControl/BuildControl";
import Classes from './BuildControls.module.css';

const BuildControls = ( props ) => {
    const ingredients= [
        {label:'Cheese', type:'cheese'},
        {label:'Meat', type:'meat'},
        {label:'Bakon', type:'bakon'},
        {label:'Salad', type:'salad'},
    ];

    return (
        <div className={Classes.BuildControls}>
            <p>Total Price is : <strong>${props.totalPrice}</strong></p>
            {ingredients.map( ing =>
            <BuildControl
                key={ing.label}
                label={ing.label}
                addIngHandler={ () => props.addIngHandler(ing.type) }
                removeIngHandler={ () => props.removeIngHandler(ing.type) }
                lessIsDisable={ props.ingredientData[ing.type] <= 0 }
            />
                )}
        </div>
    );
};

export default BuildControls;