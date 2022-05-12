import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <div className='ps-5'>
                <span class="navbar-brand main-color-title">
                <img src="/pi_logo.svg" width="auto" height="30" alt="" className='rounded'></img>
                    BilboIII
                </span>
            </div>
            <div className="d-flex flex-row">
                <Link className='nav-link' to='/'>/home</Link>
                <Link className='nav-link' to='/projects'>/projects</Link>
                <Link className='nav-link' to='/info'>/info</Link>
            </div>
        </nav>
    </div>
  )
}
  
  