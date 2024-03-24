import React from 'react';
import { VirtualizedGrid } from '@mierak/react-virtualized-grid';
import './catalog';
import Card from '../card/card';

const children = [];
for (let i = 0; i < 1000; i++) {
    children.push(<Card key={i} number={i + 1} />);
}

function CatalogWindow() {
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
            <VirtualizedGrid itemCount={children.length} rowHeight={750} cellWidth={425} gridHeight={1200}>
                {(index) => <div>{children[index]}</div>}
            </VirtualizedGrid>
            <button className="button button_purple catalog__button-more">Смотреть все фестивали&nbsp;&rarr;</button>

        </section>
    )
}

export default CatalogWindow;