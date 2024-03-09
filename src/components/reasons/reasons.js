import React from 'react';
import './reasons.css';
import pathList from '../../images/list.svg';
import pathSecurity from '../../images/security.svg';
import pathHelp from '../../images/help.svg';

function Reasons() {
  return (
    <section className="why-us">
      <div className="why-us__title-block">
        <h2 className="why-us__title">Почему мы?</h2>
        <p className="why-us__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua</p>
      </div>
      <div className="why-us__cards">
        <div className="why-us__card">
          <div className="why-us__icon-box why-us__icon-box_orange"><img className="why-us__icon" src={pathList} alt="Иконка список" /></div>
          <h4 className="why-us__card-title">Огромный выбор фестивалей</h4>
          <p className="why-us__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua</p>
        </div>

        <div className="why-us__card">
          <div className="why-us__icon-box why-us__icon-box_purple"><img className="why-us__icon" src={pathSecurity} alt="Иконка щит" />
          </div>
          <h4 className="why-us__card-title">Проверенные организаторы</h4>
          <p className="why-us__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua</p>
        </div>

        <div className="why-us__card">
          <div className="why-us__icon-box why-us__icon-box_blue"><img className="why-us__icon" src={pathHelp} alt="Иконка помощь" /></div>
          <h4 className="why-us__card-title">Помощь и поддержка на всех этапах</h4>
          <p className="why-us__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua</p>
        </div>
      </div>
    </section>)
}

export default Reasons;