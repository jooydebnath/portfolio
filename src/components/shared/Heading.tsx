import React from 'react'

const Heading = ({text}: {text: string}) => {
    return (
        <div className='flex justify-center items-center mb-5'>
            <h2 className='md:text-heading text-[40px] capitalize font-medium bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent inline-block'>{text}</h2>
        </div>
    )
}

export default Heading
