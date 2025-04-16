import React from "react";
import { Helmet } from 'react-helmet-async';
import Banner from "../banner/Banner";
import Category from "../category/Category";
import ChefCard from "../../../components/chefCard/ChefCard";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FlavorHub | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefCard />
      <PopularMenu />
      <ChefRecommends />
      <Featured />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
