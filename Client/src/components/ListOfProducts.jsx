import React from 'react'
import { useParams } from 'react-router-dom'

const ListOfProducts = () => {
  const {product} = useParams()

  console.log(product);
  return (
    <div>

        <h2>Products 1{product}</h2>
    </div>
  )
}

export default ListOfProducts