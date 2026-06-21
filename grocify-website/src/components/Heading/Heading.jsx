import React from 'react'

const Heading = (props) => {
    return (
        <div className='w-fit md:top-0 mx-auto'>
            <h2 className='text-zinc-800 md:text-6xl text-[1.5rem]  font-bold'> <span className='text-orange-500'>{props.highlight}
            </span> {props.heading}</h2>
            <div className='h-1  md:w-40 w-20 bg-orange-300 md:mt-4  ml-auto'></div>
        </div>
    )
}

export default Heading
