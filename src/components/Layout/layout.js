import React from 'react';
import Aux from '../../hoc/auxiliary';

const layout = (props) => (
    <Aux>
        <div>Header,menu, Logo</div>
        <body>
        {props.children}
        </body>
    </Aux>
);

export default layout;