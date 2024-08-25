import React from 'react';
import './Main.css';

function Main(props) {
  const { page, message, photo, onTitle, onButton, onMessage, onGallery } = props;
  const showButtons = !message && !photo;

  return (
    <>
      {page === 1 && onTitle()}
      {showButtons && page >= 1 && page <= 5 && onButton('next', '130px', '150px', 'arrowIcon1', '58vh', '70vw')}
      {showButtons && page >= 2 && page <= 6 && onButton('previous', '130px', '150px', 'arrowIcon2', '11vh', '-5vw')}
      {showButtons && page >= 2 && page <= 6 && onButton('message', '100px', '100px', 'list', '20vh', '55vw')}
      {showButtons && page >= 2 && page <= 6 && onButton('photos', '100px', '100px', 'camera', '46vh', '25vw')}
      {message && onMessage()}
      {photo && onGallery()}
    </>
  );
}

export { Main };