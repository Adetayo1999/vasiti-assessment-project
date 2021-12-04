import React from "react";
import Testimonial from "../Testimonial";
import "./Testimonials.css";
import userImage from "../../images/Ellipse 22.png";

function Testimonials({ stories }) {
  return (
    <div className='testimonials'>
      <div className='container'>
        <Testimonial
          userImage={userImage}
          username='Joseph Ike'
          userType='CUSTOMER'
          userTestimony='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
          userLocation='In Ikeja'
        />
        <Testimonial
          userImage={userImage}
          username='Joseph Ike'
          userType='CUSTOMER'
          userTestimony='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
          userLocation='In Ikeja'
        />
        <Testimonial
          userImage={userImage}
          username='Joseph Ike'
          userType='CUSTOMER'
          userTestimony='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
          userLocation='In Ikeja'
        />
        <Testimonial
          userImage={userImage}
          username='Joseph Ike'
          userType='VENDOR'
          userTestimony='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
          userLocation='In Ikeja'
        />
        <Testimonial
          userImage={userImage}
          username='Joseph Ike'
          userType='VENDOR'
          userTestimony='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
          userLocation='In Ikeja'
        />
        <Testimonial
          userImage={userImage}
          username='Joseph Ike'
          userType='VENDOR'
          userTestimony='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
          userLocation='In Ikeja'
        />
        {stories &&
          stories.usersStory.map((story) => (
            <Testimonial
              userImage={userImage}
              userType={story.interact === "vendor" ? "VENDOR" : "CUSTOMER"}
              userTestimony={story.message}
              userLocation={"Not Defined"}
              username={`${story.firstname} ${story.lastname}`}
            />
          ))}
      </div>
    </div>
  );
}

export default Testimonials;
