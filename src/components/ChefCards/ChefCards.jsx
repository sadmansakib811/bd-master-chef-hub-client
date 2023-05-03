import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
const ChefCards = ({chef}) => {
   const {id,img,name, experience,recipes, likes} = chef;
    return (
        <div className=''>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={img} alt="chef img" className="rounded-xl h-96 w-96" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>{experience}</p>
    <p>Recipes Available: {recipes}</p>
    <p className='flex justify-center items-center'> <span className='text-indigo-600'><AiFillLike/></span> <span className='ms-1'>{likes}</span> </p>
    <div className="card-actions">
    <Link to={`/chef/${chef.id}`} > <button className="btn btn-primary">View Recipes</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCards;