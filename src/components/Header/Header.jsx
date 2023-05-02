/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
 

const Header = () => {
 
    return (
        <div>
            {/* navbar start*/}
            <div className="navbar bg-indigo-400">
  <div className="navbar-start">
   
    <a className="btn btn-ghost normal-case text-xl text-white">Bd MasterChef Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end">
  {/* onClick={handleLogout} */}
   
        {/* {user? <span className='text-white'>welcome {user?.email} <button >SignOut</button></span>  : <span> <Link to='/login'><button>SignIn</button></Link>  </span>} */}

  </div>
</div>
            {/* navbar end */}
        </div>
    );
};

export default Header;