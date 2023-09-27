import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className='bg-slate-500 p-4'>
      <Link className='p-8 text-slate-100 hover:text-slate-300' to="home">Home</Link>
      <Link className='p-8 text-slate-100 hover:text-slate-300' to="about">About</Link>
      <Link className='p-8 text-slate-100 hover:text-slate-300' to="gallery">Gallery</Link>
      <Link className='p-8 text-slate-100 hover:text-slate-300' to="products">Products</Link>
      <Link className='p-8 text-slate-100 hover:text-slate-300' to="contact">Contact</Link>
    </div>
  )
}

export default NavBar