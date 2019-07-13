import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import { Gallery } from 'components/Gallery';
import { Loading } from 'components/Loading';

import { PostContainer } from 'containers/PostContainer';
import { load } from 'actions/pictures';

class GalleryUnmounted extends Component {
  componentDidMount() {
    const { loadImages } = this.props;

    loadImages();
  }

  render() {
    const { pictures, loading } = this.props;

    return (
      <Fragment>
        {pictures.length > 0 && <Gallery onScroll={this.handleScroll} pictures={pictures} />}
        <Route path="/posts/:id" component={PostContainer} />
        {loading && <Loading />}
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    pictures: state.pictures.entries,
    loading: state.pictures.loading,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    loadImages: () => load(dispatch),
  }
}

export const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryUnmounted);
