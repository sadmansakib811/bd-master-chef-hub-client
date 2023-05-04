import React, { useEffect, useState } from 'react';
import ChefCards from '../ChefCards/ChefCards';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://bd-master-chef-hub-server-sadmansakib811.vercel.app/chef')
        .then(res=> res.json())
        .then (data=> setChefs(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
            
            {
                chefs.map(chef=> <ChefCards
                key={chef.id}
                chef ={chef}
                ></ChefCards>)
            }
        </div>
    );
};

export default Chefs;