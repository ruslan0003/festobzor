import React from 'react';
import './subscribe.css';

function Subscribe() {
  return(
    <section className="subscribe">
    <h2 className="subscribe__call-to-action">Подпишитесь, чтобы оставаться в курсе фестивальных новостей!</h2>
    <div className="subscribe__input-box">
      <input type="email" className="subscribe__input" placeholder="Укажите ваш email..."/>
      <button type="submit" className="button subscribe__button button_orange">Подписаться</button>
    </div>
  </section>
  )
}

export default Subscribe;