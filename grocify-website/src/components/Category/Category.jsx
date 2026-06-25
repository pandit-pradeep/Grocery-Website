import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import Dairy from '../../assets/dairy-and-eggs.png'
import SeaFood from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Category = () => {


    const renderCards = category.map(card => {
        return (
            <div className='flex-1 basis-[300px]' key={card.id}>

                {/* card Image */}

                <div className='w-full min-h-[30vh] relative -mb-5'>
                    <img src={card.image} alt="" className='absolute bottom-0' />
                </div>

                {/* card Content */}
                <div className='bg-zinc-100 pt-10 p-8 rounded-xl '> 
                    <h3  className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    {/* <Button content ="See All" /> */}
                    <Link  className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full  md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer' content ="See All" ></Link>
                </div>
            </div>
        )
    })


    return (
        <section>

            <div className='md:py-20 py-15 px-10 max-w-[1400px] mx-auto  '>
                <Heading highlight="Shop" heading=" by Category" />

                {/* Category Card */}
                <div className='flex gap-10 flex-wrap md:mt-15 -mt-5 '>
                    {renderCards}
                </div>
            </div>
        </section>
    )
}

export default Category


const category = [

    {
        id: "1",
        title: "Fruits & Veggies",
        description: "Fresh, organic produce sourced daily from local farms.Explore a wide range of seasonal fruits and crisp vegetables.",
        image:  FruitsCat 
    },

    {
        id: "2",
        title: "Dairy & Eggs",
        description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image:  Dairy 
    },

    {
        id: "3",
        title: "Meat & SeaFood",
        description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        image:  SeaFood 
    },
]