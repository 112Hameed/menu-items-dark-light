import React from 'react';
import './menu.scss';

//Include props "items"
const  menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItems) => {
        const {id, title, img, desc, price} = menuItems;
        return(
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo'></img>
            <div className='item-info'>
              <div className='item-title-price'>
                <h4>{title}</h4>
                <span className='price'>${price}</span>
              </div>
              <p className='item-desc'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
}

export default menu;