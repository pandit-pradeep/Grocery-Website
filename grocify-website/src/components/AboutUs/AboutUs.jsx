import React from "react";
import AboutImage from '../../assets/about-image.jfif'

const AboutUs = () => {
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
              <h3 className="text-2xl font-bold text-zinc-600">100%</h3>
              <p className="text-gray-600">Fresh Products</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4">
              <h3 className="text-2xl font-bold text-zinc-600">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4">
              <h3 className="text-2xl font-bold text-zinc-600">5000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4">
              <h3 className="text-2xl font-bold text-zinc-600">Fast</h3>
              <p className="text-gray-600">Home Delivery</p>
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