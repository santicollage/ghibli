import React from 'react';
import './Message.css';

function Message(props) {

  const onUpdate = () => {
    props.setMessage(false);
  }

  return (
    <>
      <div className='message-container'>
        <div className='message-background'></div>
        <button onClick={onUpdate}>X</button>
        <p>Al igual que en Mi vecino Totoro, donde los momentos de tranquilidad y simplicidad revelan la verdadera magia de la vida, una relación sentimental a largo plazo enseña que es en la serenidad del día a día donde se construyen los lazos más fuertes. Así como Satsuki y Mei encuentran consuelo y alegría en lo sencillo y natural, una pareja que perdura aprende a valorar las pequeñas cosas, los gestos cotidianos, y la compañía silenciosa, descubriendo que la verdadera magia está en crecer juntos, enfrentar los desafíos con paciencia, y apreciar cada instante compartido.</p>
      </div>
    </>
  );
}

export { Message };