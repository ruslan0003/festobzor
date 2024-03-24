import React, { useState } from 'react';
import './catalog.css';
import Card from '../card/card';
import '../../css/buttons.css';
import '../pagination/pagination.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function CatalogScroll() {
  const children = [];
  for (let i = 0; i < 1000; i++) {
    children.push(<Card key={i} number={i+1}/>);
  }

  const perPage = 11;
  const [lastPosition, setLastPosition] = useState(perPage);
  const [allCards, setallCards] = useState(children.slice(0, perPage));
  const loadCards = () => {
    setTimeout(() => {
      setallCards((prev) => [...prev, ...children.slice(lastPosition, lastPosition + perPage)]);
    }, 4000);
    setLastPosition(lastPosition + perPage);
  };

  return (
    <section className="catalog">
      <div className="catalog__upper-row">
        <h3 className="catalog__title">Предстоящие фестивали</h3>
        <div className="catalog__filters">
          <select className="catalog__filter">
            <option>Лето</option>
            <option>Зима</option>
          </select>
          <select className="catalog__filter">
            <option>Сначала новые</option>
            <option>По популярности</option>
          </select>
        </div>
      </div>

      <InfiniteScroll
        dataLength={allCards.length}
        next={loadCards}
        hasMore={true}
        loader={<h4>Загрузка...</h4>}
      >
        <div className="catalog__cards">
          {allCards}
        </div>
      </InfiniteScroll>

      <button className="button button_purple catalog__button-more">Смотреть все фестивали&nbsp;&rarr;</button>

    </section>
  )
}

export default CatalogScroll;