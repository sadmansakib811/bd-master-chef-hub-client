import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefRecipes from '../ChefRecipes/ChefRecipes';
import ChefBannerPage from './ChefBannerPage/ChefBannerPage';

const Chef = () => {
    const {id} = useParams();
    const chefRecipes = useLoaderData();
    return (
        <div>
            {/* chef cover page design  */}
  
         
            
{/* recipes data */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>

           
            </div>
            
        </div>
    );
};

export default Chef;