import React from 'react';
import './categories.scss';

const categories = ({ categories, filterItems }) => {
  return (
    <div className="menu-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-menu"
            key={index}
            onClick={() => filterItems(category)} >
              {category}
          </button>
        );
      })}
    </div>
  );
}

export default categories;
