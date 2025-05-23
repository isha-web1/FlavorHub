import React from 'react';
import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed h-[848px] text-white  pt-8 my-20'>
           <SectionTitle subHeading={"check it out"} heading={"Featured Items"}>
            </SectionTitle> 
            <div className='md:flex justify-center bg-black opacity-60 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
              <div className='md: ml-10'>
              <p>April 17, 2025</p>
                <p className='uppercase'>where can i get some ?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className='btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 mt-4 rounded-md text-black '>Order Now</button>
              </div>
            </div>
        </div>
    );
};

export default Featured;