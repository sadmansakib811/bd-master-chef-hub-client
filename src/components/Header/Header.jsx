/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
 

const Header = () => {
  const{user, logOut} = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}
    return (
        <div>
            {/* navbar start*/}
            <div className="navbar bg-indigo-400">
  <div className="navbar-start">
   <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Bd MasterChef Hub</Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end">
  {/* onClick={handleLogout} */}
   
  {
                    user ? <>
                        <span> <img className='rounded-full h-10 w-10 mr-1' src={user.photoURL?user.photoURL:user.email} alt="" /> </span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                    </> : <> <Link to="/login">Login </Link> / <Link to="/register">Register </Link> </> 
                }

  </div>
</div>
            {/* navbar end */}
        </div>
    );
};

export default Header;