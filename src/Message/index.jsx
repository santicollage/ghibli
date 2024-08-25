import React from 'react';
import './Message.css';

const messages = [
  'Hace cuatro años conocí una morenita poderosa💪, una chica hermosa que no llamo a las amigas para escapar 😂 era una chica muy interesante, inteligente y graciosa🤡, apasionada por lo que le gusta y una persona muy valiosa por conocer. Y hace cuatro años decidí que quería descubrir ese tesorito consentido y rudo💎.',
  'Nunca imagine construir la historia que hemos recorrido🌌, me siento muy pleno y feliz por el amor que seguimos cultivando, hemos aprendido y crecido un montón juntos🧗‍♂️. Amo lo que tenemos y como podemos ser nosotros mismos siempre, apoyándonos, alegrándonos, motivándonos y sobre todo amándonos❤️ con todo el corazón.',
  'Quiero seguir eligiéndonos toda la vida, quiero vernos cumplir nuestros sueños🌟, por donde nos lleve esta vida loca no importa si estamos juntos🫸🫷, me ilusiona pensar que aún nos queda una vida por conocernos🙂‍↕️.',
  'Eres el amor de mi vida, lo mas bonito🌸 de mi vida. Te agradezco por todo el amor que me das, por cada muestra de amor de tus distintas formas de hacerme sentir amado❤️‍🩹 y valorado. Gracias por ser tan especial y estar siempre presente, eres mi mayor complemento y me llenas completamente el alma🔋.',
  'Jamás olvides que te amo con todo mi corazón, y cada día elijo a esa morenita preciosa para consentir, amar y apoyar. TE AMOOOOOO ❤️'
]

function Message(props) {

  const onUpdate = () => {
    props.setMessage(false);
  }

  return (
    <>
      <div className='message-container'>
        <div className='message-background'></div>
        <button onClick={onUpdate}>X</button>
        <p>{messages[props.page - 2]}</p>
      </div>
    </>
  );
}

export { Message };