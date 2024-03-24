import React, { useState } from 'react';
import './catalog.css';
import Card from '../card/card';
import '../../css/buttons.css';
import Pagintaion from '../pagination/pagination';
import '../pagination/pagination.css';

function CatalogPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10);

  const children = [];
  for (let i = 0; i < 1000; i++) {
    children.push(<Card key={i} number={i+1}/>);
  }

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = children.slice(firstCardIndex, lastCardIndex);

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

      <div className="catalog__cards">
        {currentCards}
      </div>

      <Pagintaion
        totalCards={children.length}
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setCardsPerPage={setCardsPerPage}
      />

      <button className="button button_purple catalog__button-more">Смотреть все фестивали&nbsp;&rarr;</button>

    </section>
  )
}

export default CatalogPagination;