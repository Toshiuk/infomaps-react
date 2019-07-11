import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header () {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <h2 class='title is-2'>Infomaps</h2>
        </Link>
      </div>
      <div class='navbar-menu'>
        <div class='navbar-start'>
          <Link className='navbar-item' to='/map'>
            Map
          </Link>
        </div>
      </div>
    </nav >
  )
}
