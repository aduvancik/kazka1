import React from 'react'
import ListProducts from '../function/ListProducts'

export default function CreamBase() {
  return (
    <div className='salads'>
      <h1 className='title-product'>Вершкова основа</h1>
      <div className="line"></div>
      <ListProducts section="creamBase" />
    </div>
  )
}
