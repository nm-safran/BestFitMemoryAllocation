import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className='flex items-end w-full h-full cursor-pointer'>
      <img className='h-full' src={logo} alt="" />
      <div className='mb-2 text-3xl font-semibold text-white font-mont'>721424060_<span className=' text-logo-color'>MNM.SAFRAN</span></div>
    </Link>
  )
}

export default Logo
