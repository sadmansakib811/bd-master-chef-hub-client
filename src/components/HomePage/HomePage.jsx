import React from 'react';
import Chefs from '../Chefs/Chefs.jsx'
const HomePage = () => {
    return (
        <div>
            {/* banner section */}
    
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/5393830.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to BD MasterChef Hub</h1>
      <p className="mb-5">Here you will find all kind of chefs of Bangladesh who are expert in their field making bangladeshi cuisine</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            {/* banner ends here */}

          <Chefs></Chefs>

        </div>
    );
};

export default HomePage;