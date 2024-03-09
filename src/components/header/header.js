import React from 'react';
import './header.css';
import '../../css/buttons.css';
import pathLogo from '../../images/festobzor-logo.png';
import pathSearch from '../../images/search.svg';
import PropTypes from 'prop-types';

function Header(props) {

  return (
    <section className="header">
      <img className="header__logo" src={pathLogo} alt="Логотип" />

      <ul className="header__menu-list">
        <li className="header__menu-item"><a href="/#" className="header__menu-link">Фестивали</a></li>
        <li className="header__menu-item"><a href="/#" className="header__menu-link">О проекте</a></li>
        <li className="header__menu-item"><a href="/#" className="header__menu-link">Контакты</a></li>
      </ul>

      <div className="header__right-bar">
        <div className="header__search-bar">
          <input type="text" name="search" className="header__search-field" placeholder="Найти фестиваль..." />
          <button className="header__button-search" type="submit">
            <img alt="Искать" src={pathSearch} />
          </button>
        </div>
        <button className="header__login-button button button_light-purple" onClick={props.onLoginClick}>Вход</button>
        <button className="header__register-button button button_purple" onClick={props.onRegisterClick}>Регистрация</button>
      </div>
    </section>
  )
}

Header.propTypes = {
  onLoginClick: PropTypes.func,
  onRegisterClick: PropTypes.func
}


export default Header;

