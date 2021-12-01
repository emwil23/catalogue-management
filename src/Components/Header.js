import React from 'react';

//Dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'jewelery', label: 'Jewelery' },
  { value: "men's clothing", label: "Men's clothing" },
  { value: "women's clothing", label: "women's clothing" },
  { value: '', label: 'All Products' },
];

function Header({ setCategory, setSearch }) {
  const handleDrop = (e) => {
    setCategory(e.value);
  };

  return (
    <div className='header__container'>
      <div className='header__content'>
        <div className='header__content-dropdown'>
          <Dropdown
            options={options}
            onChange={(e) => handleDrop(e)}
            value={''}
            placeholder='Category'
          />
        </div>
        <div className='header__content-search'>
          <input
            className='header__content-search--item'
            type='search'
            placeholder='Search For Products'
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
