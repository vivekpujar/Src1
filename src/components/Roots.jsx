import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Roots() {
  return (
    <div className='root'>
             <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/meals">Meals</NavLink>
             </nav>
             <div className='outlet'>
                <Outlet></Outlet>
             </div>
    </div>
  )
}

export default Roots