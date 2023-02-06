import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "./Auth";




const Navbar = () => {
    const auth=useAuth();
    
  return (
    <div className='sidenav'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li> <Link to='/service'>Service</Link></li>
       <li> <Link to='/contact'>Contact</Link></li>
       <li><Link to='/signinpage'>Signin</Link></li>
       {/* <li> <Link to='/Topics'>Topics</Link></li> */}
       <li><Link to='/profile'>Profile</Link></li>
       {!auth.user && 
       (<Link to='/login'>Login</Link>)}
    </div>
  )
}

export default Navbar
