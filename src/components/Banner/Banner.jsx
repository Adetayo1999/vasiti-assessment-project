import React from "react";
import "./Banner.css";
import BannerImage from "../../images/Testimonial image 1.png";

function Banner() {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner__left'>
          <h1>
            Amazing <br /> Experiences from Our Wonderful Customers
          </h1>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className='banner__right'>
          <img src={BannerImage} alt='Vasiti Banner' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
