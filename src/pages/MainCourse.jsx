import React from 'react'
import ListProducts from '../function/ListProducts'

export default function MainCourse() {
  return (
    <div className='mainCourse'>
      <h1 className='title-product'>Головні страви</h1>
      <div className="line"></div>
      <ListProducts section="mainCourse" />
    </div>)
}
