import axios from 'axios';
import React, { useEffect, useState } from 'react';

//Component
import Header from './Header';
import Products from './Products';

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products'); //Retrives all Products
    setProducts(response.data);
  };

  const getCategory = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}` //Retrives category products
    );
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (category === '') getProducts();
    else getCategory();
  }, [category]);

  return (
    <div>
      <Header
        setCategory={(value) => setCategory(value)}
        setSearch={(value) => setSearch(value)}
      />
      <Products productsList={products} searchProducts={search} />
    </div>
  );
}

export default App;
