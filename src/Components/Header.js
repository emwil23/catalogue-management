import React from 'react';

//Dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
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
