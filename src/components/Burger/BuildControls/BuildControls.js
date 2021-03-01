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
            {ingredients.map( ing => <BuildControl key={ing.label} label={ing.label} addIngHandler={ () => props.addIngHandler(ing.type) }/>)}
        </div>
    );
};

export default BuildControls;