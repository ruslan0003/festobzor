import React from 'react';
import './tabs.css';
import '../../css/buttons.css';
import MultistepForm from "../multistepForm/multistepForm";

function Tabs() {
  return (
    <div className="tabs">
      <input className="tabs__input" id="tab-one" type="radio" name="grp" checked="checked" />
      <label className="tabs__label" htmlFor="tab-one">Я – участник</label>
      <div className="tabs__content">
        <p className="popup__title">Регистрация участника</p>
        <form className="popup__form popup-register__form_person" id="person-form">
          <label className="popup__label" htmlFor="person-email">Имя</label>
          <input type="text" className="popup__input" id="person-name" />
          <label className="popup__label" htmlFor="person-email">Email</label>
          <input type="email" className="popup__input" id="person-email" />
          <label className="popup__label" htmlFor="person-password">Пароль</label>
          <input type="password" className="popup__input" id="person-password" />
          <label className="popup__label" htmlFor="person-password-repeat">Повторите пароль</label>
          <input type="password" className="popup__input" id="person-password-repeat" />
          <button type="submit" className="button button_purple popup__submit-button">Регистрация&nbsp;&rarr;</button>
        </form>
      </div>

      <input className="tabs__input" id="tab-two" type="radio" name="grp" />
      <label className="tabs__label" htmlFor="tab-two">Я – организатор</label>
      <div className="tabs__content">
        <p className="popup__title">Регистрация организатора</p>
        <MultistepForm />
      </div>

    </div>
  )
}

export default Tabs;