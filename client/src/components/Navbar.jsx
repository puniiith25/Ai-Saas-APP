import React from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = () => {
    const Navigate = useNavigate();
    const { user } = useUser()
    const { openSignIn } = useClerk()
    return (
        <>
            <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between item-center py-3 px-4 sm:px-5 xl:px-5'>
                <img src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' onClick={() => Navigate('/')} />
                {
                    user ? <UserButton /> : (<button onClick={() => openSignIn()} className='flex items-center gap-1 rounded-full  cursor-pointer bg-[#7086E0] text-white  w-32 h-8'>Get started<ArrowRight className='w-4 h-4' /></button>)
                }

            </div>
        </>
    )
}

export default Navbar