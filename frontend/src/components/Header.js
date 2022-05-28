import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'><h1>Creative Matter</h1></Link>
    </div>
  )
}
