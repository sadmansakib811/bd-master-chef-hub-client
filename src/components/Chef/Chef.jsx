import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefRecipes from '../ChefRecipes/ChefRecipes';
import { FaHeart, FaStarHalfAlt } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';





const Chef = () => {
    const {id} = useParams();
    const chefRecipes = useLoaderData();
   const[chefsBio, setChefBio] = useState([]);
   useEffect(()=>{
    fetch(`https://bd-master-chef-hub-server-sadmansakib811.vercel.app/chefbio/${id}`)
    .then(res=> res.json())
    .then(data=> setChefBio(data))
   },[])
    return (
        <div>
            
            {/* chef banner design  */}
  
          <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
     <LazyLoad once height={200} offset={100}>
    <img src={chefsBio.img} className="max-w-sm rounded-lg shadow-2xl " />
    </LazyLoad>
    <div>
      <h2 className="text-5xl font-bold">Hi! I'm {chefsBio.name}</h2>
      <p className="py-6">{chefsBio.bio}</p>
      <p>Number of Recipes: {chefsBio.recipes}</p>
      <div className='flex items-center'> <FaHeart/> <span className='ms-1'>{chefsBio.likes} </span> <p className='ms-1'> likes</p> </div>
    </div>
  </div>
</div>
          </div>
            
{/* recipes data */}

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-6'>
          
            {
                chefRecipes.map(recipe => <ChefRecipes
                key={recipe.recipe_id}
                recipe={recipe}
                ></ChefRecipes>)
            }
            </div>
            
        </div>
    );
};

export default Chef;