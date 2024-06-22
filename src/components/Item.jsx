import React, { useContext } from 'react';
import "../style/item.scss";
import { BasketContext } from '../BasketContext';

export default function Item({ item, section }) {
    const { addBasket, basket, deleteProduct } = useContext(BasketContext);
    item.section = section;
    console.log(basket);
    const isInBasket = basket.some(basketItem => basketItem.product.title === item.title);

    return (
        <div className={`item ${isInBasket ? 'in-basket' : ''}`}>
            <img src={`../images/${section}/${item.img}`} alt={item.title} />
            <p className='item__section'>
                <p>{item.title}</p>
                <p className='item__price'>{item.price} грн</p>
            </p>
            <p className='item__section'>
                <p>{item.number}</p>
                <div className='item__container'>
                    <div className='item__1'></div>
                    <div className='item__3'>
                        <div className='item__2'></div>
                        <div className='item__add'>
                            <div
                                className='item__add-button'
                                onClick={() => {
                                    if (isInBasket) {
                                        deleteProduct(item);
                                    } else {
                                        addBasket(item);
                                    }
                                }}
                            >
                                {isInBasket ?
                                    <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1.5H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1V13M13 7H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    );
}
