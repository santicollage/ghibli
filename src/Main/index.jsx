import React from 'react';
import arrowIcon1 from '../assets/icons/arrow-01.svg';
import arrowIcon2 from '../assets/icons/arrow-02.svg';
import camera from '../assets/icons/camera-01.svg';
import list from '../assets/icons/list-01.svg';
import './Main.css';

function Main(props) {

  return (
    <>
      {/* {props.onTitle()} */}
      {props.onButton('130px', '150px', arrowIcon1, '58vh', '70vw')}
      {props.onButton('130px', '150px', arrowIcon2, '11vh', '-5vw')}
      {props.onButton('100px', '100px', list, '20vh', '55vw')}
      {props.onButton('100px', '100px', camera, '46vh', '25vw')}
    </>
  );
}

export { Main };