import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar.jsx'
import { useUser, SignIn } from '@clerk/clerk-react'

const Layout = () => {
    const navigate = useNavigate();
    const [sidebar, setsidebar] = useState(false);
    const { user } = useUser();
    return user ? (
        <>
            <div className='flex flex-col items-start justify-start h-screen'>
                <nav className='w-full px-4 min-h-14 flex items-center justify-between border-b border-gray-200'>
                    <img className='w-40 cursor-pointer ' src={assets.logo} alt="logo" onClick={() => navigate('/')} />
                    {sidebar ? <X onClick={() => setsidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' /> : <Menu onClick={() => setsidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />}
                </nav>
                <div className='flex-1  w-full flex h-[clac(100vh-64px)]'>
                    <Sidebar sidebar={sidebar} setsidebar={setsidebar} />
                    <div className='flex-1 bg-[#F4F7FB]'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    ) : <div className='flex items-center justify-center h-screen'>
        <SignIn />
    </div>
}

export default Layout