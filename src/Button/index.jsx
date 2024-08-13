import React from 'react';
import './Button.css';

function Button({width, height, icon, top, left}) {

  return (
    <>
      <button style={{width: width, height: height, top: top, left: left}} className='icon-container'>
        <div style={{backgroundImage: `url(${icon})`}} className='icon'></div>
      </button>
    </>
  );
}

export { Button };