import React from 'react';

const ChefBannerPage = ({recipe}) => {
    const {cimg} = recipe;
    return (
        <div>
            <img src={cimg} alt="" />
        </div>
    );
};

export default ChefBannerPage;