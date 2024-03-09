import React from 'react';
import pathCloseIcon from '../../images/close-icon.svg';
import PropTypes from 'prop-types';

function PopupWithForm(props) {

  return (
    <section className={props.isOpen ? `popup ${props.name} popup_opened` : `popup ${props.name}`}>
      <div className={`${props.name}__container`}>
        <button className={`popup__close-button ${props.name}__close-button`} onClick={props.onClose}>
          <img className={`popup__close-icon`} src={pathCloseIcon} alt="Иконка закрытия модального окна" />
        </button>
          {props.children}
        </div>
    </section>
  );
}

export default PopupWithForm;

PopupWithForm.propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onClose: PropTypes.bool,
    name: PropTypes.string
    };