import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStartProp, match }) => {
  useEffect(() => {
    fetchCollectionsStartProp();
  }, [fetchCollectionsStartProp]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />    
    </div>
  );
} 

const mapDispatchToProps = dispatch => ({
  // This is possible using redux-thunk middleware
  // When dispatching a function instead of an object, the middleware will call that function with dispatch method itself as the first argument
  // dispatch(fetchCollectionsStartAsync(dispatch))
  fetchCollectionsStartProp: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
