import React from 'react'
import logo from '../../images/logo.png'

function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="" />
        <h1 className='title'>Crafters</h1>
    </div>
  )
}

export default Header