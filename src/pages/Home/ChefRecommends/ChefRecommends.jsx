import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import salad from "../../../assets/home/slide1.jpg";

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-4 mb-12 px-4  ">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={salad} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body text-center">
            <div className="flex justify-center items-center">
              <h2 className="card-title ">Caeser Salad</h2>
            </div>
            <p>Lettuce,Eggs,Parmesan cheese,Chicken breast,Olive oil,</p>
            <div className="card-actions justify-center">
            <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-500 transition-colors duration-300 ease-out border-2 border-gray-200 rounded-lg group-hover:text-yellow-500">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-200"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-800 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Add to Cart</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={salad} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body text-center">
            <div className="flex justify-center items-center">
              <h2 className="card-title ">Caeser Salad</h2>
            </div>
            <p>Lettuce,Eggs,Parmesan cheese,Chicken breast,Olive oil,</p>
            <div className="card-actions justify-center">
            <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-500 transition-colors duration-300 ease-out border-2 border-gray-200 rounded-lg group-hover:text-yellow-500">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-200"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-800 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Add to Cart</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={salad} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body text-center">
            <div className="flex justify-center items-center">
              <h2 className="card-title ">Caeser Salad</h2>
            </div>
            <p>Lettuce,Eggs,Parmesan cheese,Chicken breast,Olive oil,</p>
            <div className="card-actions justify-center">
              <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-500 transition-colors duration-300 ease-out border-2 border-gray-200 rounded-lg group-hover:text-yellow-500">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-200"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-800 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Add to Cart</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
