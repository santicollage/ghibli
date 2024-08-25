import { useState } from 'react';
import {Background} from './Background';
import {Main} from './Main/index';
import {Title} from './Title';
import {Button} from './Button';
import {Message} from './Message';
import {Gallery} from './Gallery';
import './App.css'


function App() {
  const[page, setPage] = useState(1);
  const[message, setMessage] = useState(false);
  const[photo, setPhoto] = useState(false);

  return (
    <>
      <Background page={page}/>

      <Main
        page={page}
        message={message}
        photo={photo}
        onTitle={() => <Title/>}
        onButton={(id, width, height, icon, top, left) => 
          <Button 
            id={id}
            page={page}
            setPage={setPage}
            setMessage={setMessage}
            setPhoto={setPhoto}
            width={width} 
            height={height}
            icon={icon}
            top={top}
            left={left}
          />}
        onMessage={() => <Message page={page} setMessage={setMessage}/>}
        onGallery={() => <Gallery page={page} setPhoto={setPhoto}/>}
      />
    </>
  )
}

export default App
