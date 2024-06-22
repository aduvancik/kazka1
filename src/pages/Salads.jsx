import React from 'react'
import ListProducts from '../function/ListProducts'

export default function Salads() {
  return (
    <div className='salads'>
      <h1 className='title-product'>Салати</h1>
      <div className="line"></div>
      <ListProducts section="salads" />
    </div>
  )
}
