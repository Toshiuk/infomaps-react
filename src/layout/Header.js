import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <h2 className='title is-2'>Infomaps</h2>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/map'>
            Map
          </Link>
        </div>
      </div>
    </nav >
  )
}
