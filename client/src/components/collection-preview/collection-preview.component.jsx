import React from 'react';

import { withRouter } from "react-router-dom"

import {default as CollectionItem} from '../collection-item/CollectionItemContainerGql';

import './collection-preview.css';

const CollectionPreview = ({ title, items, match, history }) => (
  <div className='collection-preview'>
    <h1 className='title' onClick={() => history.push(`${match.path}/${title.toUpperCase}`)}>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
