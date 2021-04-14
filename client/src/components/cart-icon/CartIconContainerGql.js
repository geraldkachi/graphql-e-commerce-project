import React from "react";
// import { compose , graphql } from "react-apollo";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";
// import Spinner from '../spinner/Spinner'

import CartIcon from "./cart-icon.component";
// import { toggleCartHidden } from '../../redux/cart/cart.actions';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

// using compose, HOC
// const CartIconContainer = ({data: { itemCount }, toggleCartHidden}) => (
//           <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
      
// );

const CartIconContainer = () => (
  <Query query={GET_ITEM_COUNT}>
    {({ data: { itemCount } }) => (
      <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {(toggleCartHidden) => (
          <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
        )}
      </Mutation>
    )}
  </Query>
);

export default CartIconContainer
// export default compose(
//   graphql(GET_ITEM_COUNT),
//   graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden' }),
// )(CartIconContainer);

// import React from "react";

// import { gql } from "apollo-boost";
// import { compose, graphql } from "react-apollo";
// this can be used inplace with Muation and Query
// import { Mutation, Query } from "react-apollo";

// import Spinner from '../spinner/Spinner'

// import CartIcon from "./cart-icon.component";
// import { toggleCartHidden } from '../../redux/cart/cart.actions';

// const TOGGLE_CART_HIDDEN = gql`
//   mutation ToggleCartHidden {
//     toggleCartHidden @client
//   }
// `;

// const GET_ITEM_COUNT = gql`
//   {
//     itemCount @client
//   }
// `;

// const CartIconContainer = ({ data: {itemCount }, toggleCartHidden }) => (
//   <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
// );
// export default compose(
//   graphql(GET_ITEM_COUNT),
//   graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden'})
// )(CartIconContainer);

// const TOGGLE_CART_HIDDEN = gql`
//   mutation ToggleCartHidden {
//     toggleCartHidden @client
//   }
// `;

// const GET_ITEM_COUNT = gql`
//   {
//     itemCount @client
//   }
// `;

// const CartIconContainer = () => (
// <Query query={GET_ITEM_COUNT}>
//   {({ data: { itemCount } }) => (
//     <Mutation mutation={TOGGLE_CART_HIDDEN}>
//       {(toggleCartHidden) => (
//         <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
//       )}
//     </Mutation>
//   )}
// </Query>;
//  )

// export default CartIconContainer;

// compose is not impoet from 'react-apollo'
