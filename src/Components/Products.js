import React, { useState } from 'react';

//Component
import ProductCard from './ProductCard';

//Modal Component
import Modal from '../Modal';

function Product({ productsList, searchProducts, categoryCount }) {
  const [isopen, setIsOpen] = useState(false);

  return Object.keys(productsList).length === 0 ? (
    <div class='wrapper'>
      <span class='circle circle-1'></span>
      <span class='circle circle-2'></span>
      <span class='circle circle-3'></span>
      <span class='circle circle-4'></span>
      <span class='circle circle-5'></span>
      <span class='circle circle-6'></span>
      <span class='circle circle-7'></span>
      <span class='circle circle-8'></span>
    </div>
  ) : (
    <div className='products__container'>
      {productsList //FILETRS THE DATA ACCODING TO THE SEARCH RESULTS
        .filter((list) => {
          return searchProducts === ''
            ? list
            : list.title.toLowerCase().includes(searchProducts.toLowerCase())
            ? list
            : null;
        })
        .map((list) => (
          <ProductCard list={list} key={list.id} />
        ))}
      <button className='products__analyse' onClick={() => setIsOpen(true)}>
        ANALYSE
      </button>
      <Modal
        open={isopen}
        onClose={() => setIsOpen(false)}
        categoryCount={categoryCount}
      />
    </div>
  );
}

export default Product;
