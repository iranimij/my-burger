import React from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
const BurgerBuilder = (props) => {
  return (
      <Aux>
          <Burger />
          <div>Burger Controls</div>
      </Aux>
  );
};

export default BurgerBuilder;