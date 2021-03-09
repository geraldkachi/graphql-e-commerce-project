import React from 'react'
import { Query } from 'react-apollo'
import { gql } from "apollo-boost"

import Spinner from '../spinner/Spinner'
import CollectionsOverview from './collections-overview.component'

const GET_COLLECTIONS = gql`
    {
        collections {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionsOverviewContainerGql = () => (
    <Query query={GET_COLLECTIONS}>
        {
            ({ loading, data })  => {
                if (loading) return <Spinner />
                return <CollectionsOverview collections={data.collections} />
            }
        }
    </Query>
)

export default CollectionsOverviewContainerGql

// console.log({loading})
// console.log({error})
// console.log({data})