import React from 'react';
import { FaBeer, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ChefRecipes = ({recipe}) => {
    const {name,img,ingredients,rating} = recipe
    return (
        <div>
            <div className="card w-150 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{ingredients}</p>
    <div className='flex items-center'> <FaStar/><FaStar/><FaStar/><FaStar/> <FaStarHalfAlt/> <span>{rating}</span> </div>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefRecipes;