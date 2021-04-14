import React from 'react'
import { Query } from 'react-apollo'
import { gql } from "apollo-boost"
import CollectionPage from './collection.component'
import Spinner from '../../components/spinner/Spinner'


const GET_COLLECTiON_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
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
`
const CollectionPageContainerGql = ({ match }) => (
    <Query query={GET_COLLECTiON_BY_TITLE} variables={{ title: match.params.collectionId }}>
        {({ loading, data: { getCollectionsByTitle } }) => {
            if (loading)  return <Spinner />
                return <CollectionPage collection={getCollectionsByTitle} />
        } }
    </Query>
)

export default CollectionPageContainerGql
