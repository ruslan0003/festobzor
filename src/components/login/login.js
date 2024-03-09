import React from 'react';
import '../../css/buttons.css';
import './login.css';
import '../../css/popup.css';
import PopupForm from '../popupForm/popupForm';
import PropTypes from 'prop-types';

function Login(props) {
  return (
    <PopupForm name="popup-login" onClose={props.onClose} isOpen={props.isOpen}>

          <h4 className="popup__title">Войти в личный кабинет</h4>

          <form className="popup__form popup-login__form" id="login-form">

            <label className="popup__label" htmlFor="login-email">Email</label>
            <input type="email" className="popup__input" id="login-email" />
            <label className="popup__label" htmlFor="login-password">Пароль</label>
            <input type="password" className="popup__input" id="login-password" />
            <a href="/#" className="popup__link">Забыли пароль?</a>
            <button type="submit" className="button button_purple popup__submit-button">Войти&nbsp;&rarr;</button>
          </form>

          <div className="popup__bottom-row">
            <p className="popup__text">Нет личного кабинета?&nbsp;</p><button type="button" className="popup__link popup-login__link">Зарегистрируйтесь сейчас</button>
          </div>
    </PopupForm>
  )
}

Login.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool
}

export default Login;