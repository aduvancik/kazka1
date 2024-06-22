import React from 'react'
import ListProducts from '../function/ListProducts'

export default function Beer() {
  return (
    <div className='beer'>
      <h1 className='title-product'>Пиво</h1>
      <div className="line"></div>
            <ListProducts section="beer"/>
    </div>
  )
}
