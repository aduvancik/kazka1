import React from 'react'
import ListProducts from '../function/ListProducts'

export default function Milk() {
    return (
        <div className='beer'>
            <h1 className='title-product'>Молочні Коктелі</h1>
            <div className="line"></div>
            <ListProducts section="milk" />
        </div>
    )
}
