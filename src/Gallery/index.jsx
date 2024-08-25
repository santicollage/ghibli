import React from 'react';
import './Gallery.css';
import images from '../assets/images';

function Gallery(props) {

  const onUpdate = () => {
    props.setPhoto(false);
  }

  return (
    <>
      <div className='gallery-container'>
        <button onClick={onUpdate}>X</button>
        <img className='photo photo-1' src={images[`Photo${((props.page - 2) * 3) + 1}`]} alt="Photo" />
        <img className='photo photo-2' src={images[`Photo${((props.page - 2) * 3) + 2}`]} alt="Photo" />
        <img className='photo photo-3' src={images[`Photo${((props.page - 2) * 3) + 3}`]} alt="Photo" />
      </div>
    </>
  );
}

export { Gallery };