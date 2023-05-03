import React, { useRef } from 'react';
import Chefs from '../Chefs/Chefs.jsx'
const HomePage = () => {
  const chefsRef = useRef(null);

  const handleGetStartedClick = () => {
    chefsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <div>
            {/* banner section */}
    
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/5393830.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to BD MasterChef Hub</h1>
      <p className="mb-5">Here you will find all kind of chefs of Bangladesh who are expert in their field making bangladeshi cuisine</p>
      <button onClick={handleGetStartedClick} className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            {/* banner ends here */}
            {/* chef card section */}
          <div ref={chefsRef}>
          <div className='text-center'>
            <h1 className='text-7xl	mt-6'>Our Chefs</h1>
          </div>
          <Chefs></Chefs>
          </div>
          

          {/* carasoul image library */}
        
          <div className='flex flex-col items-center justify-center mx-auto'>
          <div className=''>
            <h1 className='text-7xl	mt-6'>Photo Gallary</h1>
          </div>
          <div className="carousel rounded-box gap-4 my-8 text-center ">
  <div className="carousel-item">
    <img src="https://media.istockphoto.com/id/1152493500/photo/authentic-indian-dishes-and-snacks.jpg?s=612x612&w=0&k=20&c=IF969JnN1lKLMHyZ_Sc0q7beVYOmWAOOCja_UeMSOv0=" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://media.istockphoto.com/id/997345886/photo/indian-cuisine-on-diwali-holiday-tikka-masala-samosa-patties-and-sweets-with-mint-chutney-and.jpg?s=612x612&w=0&k=20&c=W8yPlkaH0VA1SvR64tKv53lBO0Xfgk0bM82tGS1xATE=" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://media.istockphoto.com/id/1212329362/photo/table-top-view-of-indian-food.jpg?s=170667a&w=0&k=20&c=Ov2M5yweQMRgUD05TCmJN6DwOpfTSGUPpJUwyp3gKfE=" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://media.istockphoto.com/id/1005390222/photo/chicken-tikka-masala-spicy-curry-meat-food-with-rice-and-naan-bread.jpg?s=612x612&w=0&k=20&c=UPKJT67Bn-2ZL1TakWLK9IhpAOIMgryGhLwoHRsP8ZI=" alt="Burger" />
  </div> 
 
  <div className="carousel-item">
    <img src="https://media.istockphoto.com/id/162244500/photo/table-filled-with-freshly-made-indian-food.jpg?s=612x612&w=0&k=20&c=g9-Wz-_wyltAWCaiNM-cI4QoXO_xY4IscCAdvP20Me8=" alt="Burger" />
  </div>
</div>
</div>

        </div>
    );
};

export default HomePage;