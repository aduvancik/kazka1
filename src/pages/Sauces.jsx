import React from 'react'
import ListProducts from '../function/ListProducts'

export default function Sauces() {
  return (
    <div className='sauces'>
      <h1 className='title-product'>Соуси</h1>
      <div className="line"></div>
      <ListProducts section="sauces" />
    </div>
  )
}
