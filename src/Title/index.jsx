import React, { useState, useEffect } from 'react';
import './Title.css';

function Title() {
  const [qualities, setQualities] = useState(0)
  const words = ['Amor', 'Amistad', 'Aventuras', 'Crecimiento', 'Apoyo', 'Cariño', 'Experiencias'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setQualities((prevQualities) => {
        return prevQualities === words.length - 1 ? 0 : prevQualities + 1;
      });
    }, 2000);

    return () => clearTimeout(timer);
      
  }, [qualities]);


  return (
    <div className='title-container'>
      <h1>Cuatro Años De 
        <div className='span-container'>
          {words.map((word, index) => {
            return <span key={word} className={`word ${index == qualities ? 'visible' : 'invisible'}`}>{word}</span>  
          })}
        </div>
      </h1>
      <h2>Una gran avntura con la persona correcta</h2>
    </div>
  );
}

export { Title };