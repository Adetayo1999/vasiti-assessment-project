import React from "react";
import Banner from "../../components/Banner";
import Experience from "../../components/Experience";
import "./Home.css";
import blackbeauty from "../../images/Group 89.png";
import womanshoppingbag from "../../images/woman-shoppingbag-card 1.png";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer";
import { StoryConsumer } from "../../context";

function Home({ handleOpen }) {
  const [stories, dispatch] = StoryConsumer();
  return (
    <div className='home'>
      <Banner />
      <Experience
        experienceImage={blackbeauty}
        isDark
        experienceTitle='Tolu & Joy’s Experience'
        experienceText='I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!'
        userType='CUSTOMER'
        handleOpen={handleOpen}
      />
      <Testimonials />
      <Experience
        experienceImage={womanshoppingbag}
        experienceTitle='Josiah’s Experience'
        experienceText='I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!'
        userType='VENDOR'
        handleOpen={handleOpen}
      />
      <Testimonials stories={stories} />
      <Footer />
    </div>
  );
}

export default Home;
