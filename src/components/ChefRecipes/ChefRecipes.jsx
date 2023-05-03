import React from 'react';
import { FaBeer, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefRecipes = ({recipe}) => {
    const {name,img,ingredients,rating} = recipe
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={img} alt="Shoes" className="rounded-xl h-96 w-96" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Ingredients: {ingredients}</p>
    <div className='flex items-center'> <FaStar/><FaStar/><FaStar/><FaStar/> <FaStarHalfAlt/> <span>{rating}</span> </div>
    <div className="card-actions">
      
      <Link to={`/fullRecipe/${recipe.recipe_id}`} > <button className="btn btn-primary">Show Full Recipe</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefRecipes;