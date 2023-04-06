import React from 'react'

const Logo = () => {
    return (
        <div className="fixed top-1/2 right-1/4 transform translate-y-1/2">
            {/* Overlay */}
            <div className='p-5 text-white mt-[-10rem]'>

                <p className='py-5 text-xl'>
                    Asian-inspired chicken <br/>
                    wings, dumplings, baos <br/>
                    and more.
                </p>

                <button className='px-8 py-2 font-extrabold' 
                style={{ 
                    backgroundColor: '#c3073f', 
                    color: '#1a1a1a',
                    borderRadius: '10px'
                }}>
                    Order Now</button>



            </div>
        </div>
    )
}

export default Logo