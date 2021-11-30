import React from 'react';

function ProductCard(props) {
  const { image, title, description, category } = props.list;

  return (
    <div className='productCard__container'>
      <div className='productCard__section1'>
        <div className='productCard__section1-image'>
          <img
            src={image}
            alt={props.id}
            className='productCard__section1-image--1'
          />
        </div>
        <div className='productCard__section1-category'>
          {category.toUpperCase()}
        </div>
      </div>
      <div className='productCard__section2'>
        <div className='productCard__section2-title'>{title}</div>
        <div className='productCard__section2-description'>
          {description.slice(1, 25)}...
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
