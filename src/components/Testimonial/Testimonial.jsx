import React from "react";
import "./Testimonial.css";

function Testimonial({
  userImage,
  username,
  userLocation,
  userTestimony,
  userType,
}) {
  return (
    <div className='testimonial'>
      <div className='userimage'>
        <img src={userImage} alt='Vasiti User' />
      </div>
      <div className='username'>
        <h4>{username}</h4>
        <p>
          {" "}
          {userLocation}{" "}
          <span
            className={` ${userType === "CUSTOMER" ? "customer" : "vendor"}`}
          >
            {userType}
          </span>{" "}
        </p>
      </div>
      <p className='usertestimony'>{userTestimony}</p>
    </div>
  );
}

export default Testimonial;
