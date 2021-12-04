import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";

function Experience({
  experienceTitle,
  experienceText,
  userType,
  experienceImage,
  isDark,
}) {
  return (
    <div
      className='experience'
      style={{
        background: `${isDark ? "#222222" : "#FFF8F5"}`,
        color: `${isDark ? "#FFFFFF" : "#242120"}`,
      }}
    >
      <div className='container'>
        <div className='experience__left'>
          <img src={experienceImage} alt='Vasiti Experience' />
        </div>
        <div className='experience__right'>
          <h3>{experienceTitle}</h3>
          <div className='experience__user'>{userType}</div>
          <p>{experienceText}</p>
          <div className='experience__share'>
            <Link to='/'>Share Your Own Story!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
