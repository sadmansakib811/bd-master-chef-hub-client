import React, { useState } from 'react';
import { FaBeer, FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = ({recipe}) => {
    const {name,img,ingredients,rating} = recipe;
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
      setIsFavorite(true);
      toast('Recipe added to favorites!');
    };
    
    return (

        <div >
          
          <ToastContainer />
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <LazyLoad threshold={1}>
    <img  src={img} alt="Shoes" className="rounded-xl h-96 w-96" />
    </LazyLoad>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Ingredients: {ingredients}</p>
    <div className='flex items-center'> <FaStar/><FaStar/><FaStar/><FaStar/> <FaStarHalfAlt/> <span>{rating}</span> </div>
    <div className="card-actions flex">
      
      <Link to={`/fullRecipe/${recipe.recipe_id}`} > <button className="btn btn-primary">Show Full Recipe</button></Link>
      <button className="btn btn-primary" onClick={handleFavoriteClick} disabled={isFavorite}> <FaHeart className='text-white hover:text-red-500'></FaHeart></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefRecipes;