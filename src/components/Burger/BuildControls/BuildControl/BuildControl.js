import React from 'react';
import Classes from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.label}>{props.label}</div>
            <button className={Classes.less}>Less</button>
            <button onClick={props.addIngHandler} className={Classes.more}>More</button>
        </div>
    );
};

export default BuildControl;