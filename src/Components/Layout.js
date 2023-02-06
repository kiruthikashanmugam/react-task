import React from 'react';
import {Outlet, Link } from 'react-router-dom';


export default function Layout() {
  return (
    <div>
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/service'>Service</Link>
      <Link to='contact'>Contact</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

