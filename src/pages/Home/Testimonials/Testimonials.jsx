import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"what our client say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                
                isRequired
              />
              <div className="">
              <FaQuoteLeft className="h-16 w-16 mt-4"></FaQuoteLeft>
              </div>
              <p className="py-8">{review.details}</p>
              <h1 className="text-3xl text-orange-400">{review.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;