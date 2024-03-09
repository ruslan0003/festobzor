import React from 'react';
import './banner.css';
import '../../css/buttons.css';
import pathCalendar from '../../images/calendar.svg';
import pathPin from '../../images/pin.svg';
import pathWrite from '../../images/write.svg';
import pathLike from '../../images/like.svg';

function Banner() {
  return (
    <section className="banner">
      <div className="banner__left-side">
      </div>
      <div className="banner__right-side">
        <h4 className="banner__title-featured">Популярные фестивали</h4>
        <h2 className="banner__title-main">Фестиваль-конкурс детского творчества &quot;Свободу попугаям!&quot;</h2>
        <div className="banner__info-row">
          <div className="banner__title-details-row"><img className="banner__info-icon" alt="Даты поездки"
            src={pathCalendar} />
            <p className="banner__title-details">1-4 апреля 2023</p>
          </div>
          <div className="banner__title-details-row"><img className="banner__info-icon" alt="Город" src={pathPin} />
            <p className="banner__title-details">Йошкар-Ола</p>
          </div>
        </div>
        <p className="banner__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        <div className="banner__button-row">
          <button className="banner__button-apply button button_purple"><img className="banner__button-like-icon"
            alt="Подать заявку" src={pathWrite} />Подать заявку</button>
          <button className="banner__button-like button button_purple"><img className="banner__button-like-icon"
            alt="Добавить в избранное" src={pathLike} />В избранное</button>
        </div>
      </div>
    </section>
  )
}

export default Banner;