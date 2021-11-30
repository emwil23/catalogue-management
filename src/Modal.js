import React from 'react';
import ReactDom from 'react-dom';

//PIE CHART
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Modal = ({ open, onClose, categoryCount }) => {
  if (!open) return null;

  //ARGUMENTS FOR THE PIE CHART
  const data = {
    labels: ['Electronics', 'Jewelary', "Men's Clothing", "Women's Clothing"],
    datasets: [
      {
        label: 'Categories',
        data: [
          categoryCount.electronics,
          categoryCount.jewelery,
          categoryCount["men's clothing"],
          categoryCount["women's clothing"],
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 159, 64, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(54, 162, 235, 0.4)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return ReactDom.createPortal(
    <div className='modal__overlay'>
      <div className='modal__content'>
        <div className='modal__content-header'>
          <div className='modal__content-header--title'>
            Categories in Catalogue
          </div>
          <div className='modal__content-header--close'>
            <button
              className='modal__content-header--close-btn'
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
        <div className='modal__content-chart'>
          <Pie
            data={data}
            options={{ maintainAspectRatio: false }}
            width={'90%'}
            height={'90%'}
          />
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
