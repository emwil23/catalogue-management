import React, { useState } from 'react';

//Component
import ProductCard from './ProductCard';

//Modal Component
import Modal from '../Modal';

function Product({ productsList, searchProducts }) {
  const [isopen, setIsOpen] = useState(false);

  return Object.keys(productsList).length === 0 ? (
    'LOADING'
  ) : (
    <div className='products__container'>
      {productsList
        .filter((list) => {
          if (searchProducts === '') {
            return list;
          } else if (
            list.title.toLowerCase().includes(searchProducts.toLowerCase())
          ) {
            return list;
          }
        })
        .map((list) => (
          <ProductCard list={list} key={list.id} />
        ))}
      <button className='products__analyse' onClick={() => setIsOpen(true)}>
        ANALYSE
      </button>
      <Modal open={isopen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Product;
