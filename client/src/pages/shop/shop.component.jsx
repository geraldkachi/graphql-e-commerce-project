import React from 'react';
import { Route } from 'react-router-dom';

// import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.component';

import { default as CollectionsOverview } from '../../components/collections-overview/CollectionsOverviewContainerGql';
// this way or this way the container is still passed  dont want to change code so i used { default as  CollectionsOverview}
// import CollectionsOverviewContainerGql from '../../components/collections-overview/CollectionsOverviewContainerGql';
import {default as CollectionPage} from '../collection/CollectionPageContainerGql';
// import CollectionPageContainerGql from '../collection/CollectionPageContainerGql';

// import CollectionPage from '../collection/collection.component';
// import {default as CollectionPage} from '../collection/CollectionPageContainerGql';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} /> {/* CollectionsOverviewContainerGql */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> {/* CollectionPageContainerGql */}
  </div>  
);

export default ShopPage;
