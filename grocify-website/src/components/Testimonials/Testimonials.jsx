import React from 'react'
import Heading from '../Heading/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdOutlineArrowBack, MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import Customer6 from '../../assets/customer6.jpeg'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa6";




const Testimonials = () => {


    return (
        <section>
            <div className='max-w-[1400px] px-10 mx-auto py-20 md:-mt-40 -mt-20  '>
                <Heading highlight='Customers' heading='Saying' />

                <div className='py-5 flex mt-5 justify-end gap-x-3'>
                    <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
                        <MdOutlineArrowBackIosNew />
                    </button>
                    <button className='custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>

                <Swiper
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev"
                    }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (

                                <SwiperSlide className=' bg-zinc-100 rounded-xl p-8'>
                                    <div className='flex gap-5 items-center'>
                                        <div className='w-22 md:w-16 md:h-16 h-15  rounded-full  bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                                            <img src={item.image} className='w-full h-full'/>
                                        </div>

                                        <div>
                                            <h5 className='text-xl font-bold'>{item.name}</h5>
                                            <p className='text-zinc-600'>{item.profession}</p>
                                            <span className='flex text-yellow-400 mt-2 text-xl gap-1'>
                                                {Array.from({ length: item.rating }, (_, index) => (
                                                    <FaStar/>
                                                ))}
                                                
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mt-5 min-h-[5vh] '>
                                        <p className='text-zinc-600'>{item.para}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>


            </div>
        </section>
    )
}

export default Testimonials

const review = [

    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        rating: 3.5,
        para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. ',
        image: Customer1,
    },

    {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        rating: 4.5,
        para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. ',
        image: Customer2,
    },

    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        rating: 3.9,
        para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh.',
        image: Customer3,
    },

    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 4.2,
        para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
        image: Customer4,
    },

    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 3.5,
        para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
        image: Customer5,
    },

    {
        id: 6,
        name: 'Pradeep Pandit',
        profession: 'Student',
        rating: 4,
        para: "I had a great shopping experience. The website is fast, user-friendly, and offers a wide variety of products.",
        image: Customer6,
    }
]
