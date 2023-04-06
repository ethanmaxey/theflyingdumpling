import React from 'react'

const Hero = () => {
    return (
        <div className='flex items-center justify-center h-screen
         mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='p-5 text-white mt-[-10rem]'>

                <p className='py-5 text-xl'>
                    Asian-inspired chicken wings, dumplings, baos and more.
                </p>

                <button className='px-8 py-2 border'>Order Now</button>

            </div>
        </div>
    )
}

export default Hero