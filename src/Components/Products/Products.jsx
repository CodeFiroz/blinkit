import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import productlist from './ProductList'

const Products = () => {
  return (
    <>
    
    <div className="my-5 px-5 md:px-20">

        <h2 className='cal-sans text-2xl '>
        Dairy, Bread & Eggs
        </h2>

        <div className="grid md:grid-cols-7 grid-cols-2 my-5 gap-4">

            {
                productlist.map((product, index)=>(
<ProductCard key={index} title={product.title} quantity={product.quantity} price={product.price} image={product.image} />
                ))
            }

            

        </div>

    </div>

    </>
  )
}

export default Products