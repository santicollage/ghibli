import React from 'react';
import './Background.css';
import Image from '../assets/images/Fondo-1.png';

function Background() {

  return (
    <>

      <div className='clouds'>
        <div className='cloud cloud-1' alt="cloud" />
        <div className='cloud cloud-2' alt="cloud" />
        <div className='cloud cloud-3' alt="cloud" />
        <div className='cloud cloud-4' alt="cloud" />
        <div className='cloud cloud-5' alt="cloud" />
        <div className='cloud cloud-6' alt="cloud" />
        <div className='cloud cloud-7' alt="cloud" />
      </div>

      <img className='image-footer' src={Image}/>
    </>
  );
}

export { Background };