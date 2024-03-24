import React from 'react';
import { FixedSizeList as List } from 'react-window';
import Card from '../card/card';
// import PropTypes from 'prop-types';

function Example() {

    const children = [];
    for (let i = 0; i < 1000; i++) {
        children.push(<Card key={i} number={i+1}/>);
    }

      function Row() {
        return children;
      }
      
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

            <List
               itemData={children}
               itemCount={children.length}
               itemSize={100}
               height={800}
               width={800}
      >
        {Row}
      </List>


            <button className="button button_purple catalog__button-more">Смотреть все фестивали&nbsp;&rarr;</button>

        </section>
    )
}


export default Example;
