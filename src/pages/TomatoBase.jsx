import React from 'react'
import ListProducts from '../function/ListProducts'

export default function TomatoBase() {
  return (
    <div className='tomatoBase'>
      <h1 className='title-product'>Томатна основа</h1>
      <div className="line"></div>
      <ListProducts section="tomatoBase" />
    </div>
  )
}
