import React from 'react';
import './card.css';
import '../../css/buttons.css';
import pathDeadline from '../../images/date-time.svg';
import pathRuble from '../../images/ruble-sign.svg';
import pathWrite from '../../images/write.svg';
import pathLike from '../../images/like.svg';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="catalog__card">
      <div className="catalog__card-image"></div>
      <div className="catalog__info-block">
        <div className="catalog__card-upper-row">
          <div className="catalog__card-date-box">
            <div className="catalog__date-info">
              <p className="catalog__date">28-31</p>
              <p className="catalog__month">октября</p>
            </div>
            <button className="catalog__button-like">
              <img alt="Добавить в избранное" className="catalog__button-like-icon" src={pathLike}/>
            </button>
          </div>
          <div className="catalog__titles-column">
            <h4 className="catalog__city">Казань</h4>
            <h4 className="catalog__card-title">{props.number}-й Международный фестиваль-конкурс детского и юношеского творчества
              «Свободу попугаям!»</h4>
          </div>
        </div>
        <div className="catalog__details-column">
          <div className="catalog__details-row"><img className="catalog__info-icon" alt="Цена" src={pathRuble}/>
            <p className="catalog__card-text"><span className="catalog__card-text_bold">Стоимость поездки:</span> от 10300
              руб./чел.</p>
          </div>
          <div className="catalog__details-row"><img className="catalog__info-icon" alt="Даты поездки"
            src={pathDeadline}/>
            <p className="catalog__card-text"><span className="catalog__card-text_bold">Срок приема заявок:</span> до 1
              октября 2022</p>
          </div>
        </div>
        <div className="catalog__buttons-row">
          <button type="button" className="catalog__button-open button_light-purple button">Подробнее</button>
          <button type="button" className="catalog__button-apply button_purple button"><img
            className="banner__button-like-icon" alt="Подать заявку" src={pathWrite}/>Заявка</button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  number: PropTypes.number
}

export default Card;