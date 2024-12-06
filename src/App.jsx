import React from 'react'
import ViewProduct from './features/products/ViewProduct'
import AddProcuts from './features/products/AddProcuts'

const App = () => {
  return (
    <>
    <h1 style={{fontWeight:"900", fontSize:"4rem"}}>E-commerce CRUD Application</h1>
    <AddProcuts />
      <ViewProduct />
    </>
  )
}

export default App
