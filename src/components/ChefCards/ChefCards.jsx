import React from 'react';
import { Link } from 'react-router-dom';

const ChefCards = ({chef}) => {
   const {id,img,name, experience,recipes, likes} = chef;
    return (
        <div className='grid grid-cols-4 gap-4 w-150'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="chef img" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>{experience}</p>
    <p>Recipes Available: {recipes}</p>
    <p>{likes}</p>
    <div className="card-actions">
    <Link to={`/chef/${chef.id}`} > <button className="btn btn-primary">View Recipes</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCards;