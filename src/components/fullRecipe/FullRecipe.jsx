import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FullRecipe = () => {
    const {id} = useParams();
    const fullRecipes = useLoaderData();
    return (
        <div className='my-10 flex flex-col items-center justify-center'>
            <img className='my-10' src={fullRecipes.img} alt="" />
            <h1 className='font-bold text-cyan-400'>{fullRecipes.name}</h1>
            <h1 className='text-yellow-600'>Full Recipe:</h1>
            <h2 className='my-10 text-center'>{fullRecipes.cooking_method}</h2>
        </div>
    );
};

export default FullRecipe;