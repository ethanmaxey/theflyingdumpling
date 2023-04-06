import Link from "next/link"
import React, {useEffect, useState} from "react"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'

export default function Navbar() {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);

    return (

        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>

                <h1 className=
                    "fixed left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    Logo
                </h1>

                <ul 
                    style={{color: `${textColor}`}} 
                    className="hidden sm:flex container mx-auto justify-end py-4"
                >

                    <li className="p-4 px-14"><Link href="/menu">Menu</Link></li>
                    <li className="p-4 px-14"><Link href="/hours">Hours</Link></li>
                    <li className="p-4 px-14"><Link href="/location">Location</Link></li>
                </ul>

                {/* Mobile Button*/}
                <div onClick = {handleNav} className="block sm:hidden z-10">
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>

                {/* Mobile Menu*/}
                <div className={

                    nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" 
                    
                    : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>

                    <ul>
                        <li className="p-4 text-4xl hover:text-gray-500"><Link href="/menu">Menu</Link></li>
                        <li className="p-4 text-4xl hover:text-gray-500"><Link href="/hours">Hours</Link></li>
                        <li className="p-4 text-4xl hover:text-gray-500"><Link href="/location">Location</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
