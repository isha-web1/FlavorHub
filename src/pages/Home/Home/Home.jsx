import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import ChefCard from '../../../components/chefCard/ChefCard';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <ChefCard/>
            <PopularMenu/>
            <ChefRecommends/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;