import React from 'react';
import Aux from '../../hoc/auxiliary';
import classes from './layout.module.css';

const layout = (props) => (
    <Aux>
        <div className={classes.Content}>Header,menu, Logo</div>
        <main>
        {props.children}
        </main>
    </Aux>
);

export default layout;