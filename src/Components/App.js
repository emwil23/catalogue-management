import axios from 'axios';
import React, { useEffect, useState } from 'react';

//Component
import Header from './Header';
import Products from './Products';

function App() {
  const [products, setProducts] = useState([]); //TRACKS THE PRODUCT LIST
  const [category, setCategory] = useState(''); //GETS THE PRODUCT CATEGORY FROM HEADER
  const [search, setSearch] = useState(''); //KEEP TRACKS OF THE SEARCH TERM AND PASSES IT TO PRODUCTS FOR FILTER
  const [categoryCount, setCategoryCount] = useState([]); //TRACKS THE NO. OF PRODUCTS IN A CATEGORY

  //GET ALL THE PRODUCTS
  const getProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => console.log(err)); //Retrives all Products
    setProducts(response.data);

    let Items = {};
    response.data.map((list) =>
      Items[list.category] ? Items[list.category]++ : (Items[list.category] = 1)
    );
    setCategoryCount(Items);
  };

  //FETCH ALL THE PRODUCTS WHEN THE APP STARTS
  useEffect(() => {
    getProducts();
  }, []);

  //GET THE PRODUCTS WHEN THE CATEGORY CHANGES
  useEffect(() => {
    if (category === '') getProducts();
    else if (search === '' && category !== '') {
      const getCategory = async () => {
        const response = await axios
          .get(
            `https://fakestoreapi.com/products/category/${category}` //Retrives category products
          )
          .catch((err) => console.log(err));
        setProducts(response.data);
      };
      getCategory();
    }
  }, [category, search]);

  useEffect(() => {
    if (search === '') return;
    getProducts();
  }, [search]);

  console.log(search);
  return (
    <div>
      <Header
        setCategory={(value) => setCategory(value)}
        setSearch={(value) => setSearch(value)}
      />
      {search === '' && category === '' ? (
        <Products
          productsList={products}
          searchProducts={''}
          categoryCount={categoryCount}
        />
      ) : search === '' && category !== '' ? (
        <Products
          productsList={products}
          searchProducts={''}
          categoryCount={categoryCount}
        />
      ) : (
        <Products
          productsList={products}
          searchProducts={search}
          categoryCount={categoryCount}
        />
      )}
    </div>
  );
}

export default App;
