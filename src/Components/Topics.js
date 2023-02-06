import React from 'react';

import { Link,Outlet } from 'react-router-dom';

export default function Topics() {
  return (
    <div>
      <nav>
        <Link to='/Topics/html'> Html </Link>
        <Link to='/Topics/css'> Css </Link>
      </nav>
      <Outlet/>
    </div>
  )
}

