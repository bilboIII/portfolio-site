import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='container'>
        <Navbar />
        <div class="content">
            {children}
        </div>
        <footer>
            <p>Copyright 2022 BilboIII</p>
        </footer>
    </div>
  )
}
