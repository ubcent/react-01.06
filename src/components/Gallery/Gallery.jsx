import './Gallery.scss';

import React, { Component } from 'react';

import { ImageBox } from '../ImageBox';

export function Gallery(props) {
  const { pictures, renderItem } = props;

  const renderItemDefault = (picture) => {
    return (
      <ImageBox key={picture.id} {...picture} />
    );
  }

  return (
    <div className="container">
      <div className="gallery">
        {pictures.map(renderItem ? renderItem : renderItemDefault)}
      </div>
    </div>
  );
}
