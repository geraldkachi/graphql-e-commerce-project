import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Spinner from "../spinner/Spinner";
import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ loading, data: cartHidden }) => {
      if (loading) return <Spinner />
      return <Header hidden={cartHidden} />
    }}
  </Query>
);
export default HeaderContainer;
