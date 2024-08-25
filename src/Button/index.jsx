import React from 'react';
import './Button.css';
import arrowIcon1 from '../assets/icons/arrow-01.svg';
import arrowIcon2 from '../assets/icons/arrow-02.svg';
import camera from '../assets/icons/camera-01.svg';
import list from '../assets/icons/list-01.svg';

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
        <div style={{backgroundImage: `url(${icon})`}} className='icon'></div>
      </button>
    </>
  );
}

export { Button };