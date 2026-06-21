import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-contain bg-right ' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col py-10 max-w-[1400px] mx-auto md:px-0 px-10'>
            <span className='md:text-9xl text-7xl text-orange-500 font-bold md:-rotate-90 transform h-fit md:self-center'>20%</span>
            <div className=' max-w-[600px]'>
                <h3 className='md:text-7xl text-2xl mt-3 mb-0 text-zinc-800  font-bold'>First Order Discount</h3>
                <p className='text-zinc-600 my-6 '>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                <Button content = 'Get a Discount' />
            </div>

        </div>
    </section>
  )
}

export default Discount
