import React from 'react'
import ListProducts from '../function/ListProducts'

export default function Appetizer() {
  return (
    <div className='appetizer'>
    <h1 className='title-product'>Закуски</h1>
    <div className="line"></div>
    <ListProducts section="appetizer"/>
  </div>  )
}
