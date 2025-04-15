import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import ChefCard from '../../../components/chefCard/ChefCard';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <ChefCard/>
            <PopularMenu/>
            <ChefRecommends/>
        </div>
    );
};

export default Home;