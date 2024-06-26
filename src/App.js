import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing'

export default function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      </div>
  )
}
