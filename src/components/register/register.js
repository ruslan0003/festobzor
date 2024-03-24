import React from "react";
import Tabs from '../tabs/tabs';
import PopupForm from '../popupForm/popupForm';
import PropTypes from 'prop-types';

function Register(props) {
  return (
    <PopupForm name="popup-register" onClose={props.onClose} isOpen={props.isOpen}>
      <Tabs />
      <div className="popup__bottom-row">
        <p className="popup__text">Уже есть личный кабинет?&nbsp;</p><button type="button" className="popup__link popup-register__link">Войти</button>
      </div>
    </PopupForm>
  )
}

Register.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Register;