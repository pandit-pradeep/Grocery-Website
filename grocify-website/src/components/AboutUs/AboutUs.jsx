import React from "react";
import AboutImage from '../../assets/about-image.jfif'
import { useState, useEffect } from "react";

const AboutUs = () => {



    const [count, setCount] = useState(1);
    const [customer, setCustomer] = useState(1);


    useEffect(() => {
        let start = 1;
        const end = 100;

        const interval = setInterval(() => {
            start++;
            setCount(start);

            if (start >= end) {
                clearInterval(interval);
            }
        }, 50); // jitna kam hoga utna fast chalega

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let start = 0;

        const interval = setInterval(() => {
            start += 50;
            setCustomer(start);

            if (start >= 5000) {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-20 items-center">

                {/* Left Side Image */}
                <div>
                    <img
                        src={AboutImage}
                        alt="Fresh Grocery"
                        className="rounded-2xl shadow-lg"
                    />
                </div>

                {/* Right Side Content */}
                <div>
                    <span className="text-zinc-600 font-semibold uppercase tracking-wider">
                        About Us
                    </span>

                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        Fresh Groceries Delivered Straight to Your Door
                    </h2>

                    <p className="text-gray-600 mt-6 leading-8">
                        We are committed to providing fresh fruits, vegetables, dairy
                        products, seafood, and daily essentials at the best prices. Our
                        mission is to make grocery shopping simple, convenient, and
                        affordable for every family.
                    </p>

                    <p className="text-gray-600 mt-4 leading-8">
                        Every product is carefully selected from trusted farmers and
                        suppliers to ensure premium quality and freshness. With fast
                        delivery and secure payments, we make shopping easier than ever.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-white shadow-md rounded-xl p-4">
                            <h3 className="text-2xl font-bold text-zinc-600">{count} %</h3>
                            <p className="text-gray-600">Fresh Products</p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-4">
                            <h3 className="text-2xl font-bold text-zinc-600 animate-slideDown">24/7</h3>
                            <p className="text-gray-600 animate-slideDown">Customer Support</p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-4">
                            <h3 className="text-2xl font-bold text-zinc-600">{customer} +</h3>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-4 ">
                            <h3 className="text-2xl font-bold text-zinc-600 animate-slideDown">Fast</h3>
                            <p className="text-gray-600 animate-slideDown">Home Delivery</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full  md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer mt-5 '>
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;