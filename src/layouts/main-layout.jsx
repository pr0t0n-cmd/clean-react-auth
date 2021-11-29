import React from 'react'

import Navbar from '../components/navbar'

import { Outlet } from 'react-router-dom'

import './css/main-layout.css'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <section>
                <Outlet />
            </section>
        </>
    )
}

export default MainLayout
