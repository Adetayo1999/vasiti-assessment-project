import React from "react";
import Banner from "../../components/Banner";
import Experience from "../../components/Experience";
import "./Home.css";
import blackbeauty from "../../images/Group 89.png";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <div className='home'>
      <Banner />
      <Experience
        experienceImage={blackbeauty}
        isDark
        experienceTitle='Tolu & Joy’s Experience'
        experienceText='I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!'
        userType='CUSTOMER'
      />
      <Testimonials />
    </div>
  );
}

export default Home;
