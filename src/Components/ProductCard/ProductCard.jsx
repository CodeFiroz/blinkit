import React from 'react'

const ProductCard = (props) => {
    return (
        <>

            <div className="border border-zinc-200 p-4 rounded-2xl">

                <img src={props.image}
                    className='w-full'
                />

                <h4 className='font-semibold text-sm text-zinc-700'>
                    {props.title}
                </h4>
                <p className='text-xs my-3 text-zinc-500'>
                    {props.quantity}
                </p>

                <div className="flex items-center justify-between">
                    <h5 className='text-20 font-semibold my-3 text-zinc-800'>
                    ₹ {props.price}
                    </h5>
                    <a
                        href="#"
                        className='px-3 py-2 rounded hover:text-white hover:bg-green-500 text-sm font-bold text-center border border-b-green-400 text-green-600'
                    >Add</a>
                </div>

            </div>

        </>
    )
}

export default ProductCard