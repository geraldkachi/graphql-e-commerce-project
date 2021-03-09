import { gql } from "apollo-boost";

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
    extend type Item {
        parentID:
    }

`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export const resolvers = {
  Mutation: {
    // toggleCartHidden: ( _root, _args, _context, _info) =>
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });

      return !cartHidden
    },
  },
  // Item: {
  //   parentId: _root,
  // },
};
