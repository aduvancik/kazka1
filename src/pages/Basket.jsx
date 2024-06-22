import React, { useContext } from 'react';
import { BasketContext } from '../BasketContext';
//style
import "../style/basket.scss";

export default function Basket() {
  const { basket, addBasket, removeBasket, deleteProduct } = useContext(BasketContext);
  const sumPrice = basket.reduce((total, item) => total + (item.count * item.product.price), 0);

  return (
    <div className='basket'>
      <h1 className='title-product'>Ваше замовлення</h1>
      <div className="line"></div>
      <ul className="basket__listProducts">
        {basket.map(item => (
          <li className='basket__item' key={item.product.title}>
            <img src={`../images/${item.product.section}/${item.product.img}`} alt={item.product.title} />
            <div className='basket__title-price'>
              <p className='basket__title'>
                {item.product.title}
              </p>
              <p className='basket__number'>
                {item.product.number}
              </p>
              <p className='basket__price'>
                {item.product.price} грн
              </p>
            </div>
            <div className='basket__button'>
              <div onClick={() => removeBasket(item)}>
                <svg width="9" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.66667 1.33333H1" stroke="#393835" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p>{item.count}</p>

              <div onClick={() => addBasket(item.product)}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1V11M11 6H1" stroke="#393835" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <button className='basket__cross' onClick={() => deleteProduct(item.product)}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div className='basket__sumPrice'>
        До сплати:
        <span className='basket__price'>
          {sumPrice}  грн
        </span>
      </div>
      <div className='basket__info'>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6V6.5M10 10V14M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#F4C70F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <p>
          Якщо ви сформували ваше замовлення, будь ласка, пройдіть на касу, щоб зробити та сплатити його. Дякуємо♥)
        </p>
      </div>
    </div>
  );
}
