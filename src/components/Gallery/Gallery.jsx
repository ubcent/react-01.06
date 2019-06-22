import './Gallery.scss';

import React, { Component, useEffect } from 'react';

import { ImageBox } from '../ImageBox';

export function Gallery(props) {
  const { pictures, renderItem, onScroll } = props;

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }

    if(typeof onScroll === 'function') {
      onScroll();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
