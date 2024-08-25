import React from 'react';
import './Button.css';

function Button({id, page, setPage, setMessage, setPhoto, width, height, icon, top, left}) {

  const changePage = () => {
    switch (id) {
      case 'next':
        setPage(prevCount => prevCount + 1);
        break;
      case 'previous':
        setPage(prevCount => prevCount - 1);
        break;
      case 'message':
        setMessage(true);
        break;
      case 'photos':
        setPhoto(true);
        break;
    
      default:
        break;
    }
  }

  return (
    <>
      <button onClick={changePage} style={{width: width, height: height, top: top, left: left}} className='icon-container'>
        <div className={`icon ${icon}`}></div>
      </button>
    </>
  );
}

export { Button };