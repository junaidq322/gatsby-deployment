import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'
function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <footer>
            <p>Copyright 2022 @JunaidQureshi</p>
        </footer>
    </div>
  )
}

export default Layout