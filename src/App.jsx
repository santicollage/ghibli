import { useState } from 'react';
import {Background} from './Background';
import {Main} from './Main/index';
import {Title} from './Title';
import {Button} from './Button';
import {Message} from './Message';
import {Gallery} from './Gallery';
import './App.css'

function App() {

  return (
    <>
      <Background/>

      <Main
        onTitle={() => <Title/>}
        onButton={(width, height, icon, top, left) => 
          <Button 
            width={width} 
            height={height}
            icon={icon}
            top={top}
            left={left}
          />}
        onMessage={() => <Message/>}
        onGallery={() => <Gallery/>}
      />
    </>
  )
}

export default App
