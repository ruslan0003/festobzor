import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

const Pagintaion = ({ totalCards, cardsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>{
            pages.map((page, index) => {
            return <button key={index} onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}>{page}</button>
            })
        }</div>
    )
}

Pagintaion.propTypes = {
    totalCards: PropTypes.number,
    cardsPerPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number
}

export default Pagintaion;