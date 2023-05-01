/* eslint-disable no-unused-vars */
import React from 'react';


const Header = () => {
    return (
        <div>
            {/* navbar start*/}
            <div className="navbar bg-base-100">
  <div className="navbar-start">
   
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
            {/* navbar end */}
        </div>
    );
};

export default Header;