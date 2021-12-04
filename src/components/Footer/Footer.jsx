import React from "react";
import { Link } from "react-router-dom";
import subscriptionImage from "../../images/subscribe-banner 1.png";
import "./Footer.css";
import InImg from "../../images/in.png";
import fbImg from "../../images/fb.png";
import twImg from "../../images/tw.png";
import igImg from "../../images/ig.png";

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer__top'>
          <div className='footer__top-left'>
            <img src={subscriptionImage} alt='Vasisti subscription' />
          </div>
          <div className='footer__top-right'>
            <h2>
              Be a member <br /> of our community 🎉
            </h2>
            <p>
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </p>
            <form>
              <div className='form__control'>
                <input type='text' placeholder='enter your email' />
                <button type='submit'>SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='quicklinks'>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to='/'>About Us</Link>
              </li>
              <li>
                <Link to='/'>Terms Of Use</Link>
              </li>
              <li>
                <Link to='/'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/'>Press & media</Link>
              </li>
            </ul>
          </div>
          <div className='quicklinks'>
            <h4>Products</h4>
            <ul>
              <li>
                <Link to='/'>Marketplace</Link>
              </li>
              <li>
                <Link to='/'>Magazine</Link>
              </li>
              <li>
                <Link to='/'>Seller</Link>
              </li>
              <li>
                <Link to='/'>Wholesale</Link>
              </li>
              <li>
                <Link to='/'>Services</Link>
              </li>
            </ul>
          </div>
          <div className='quicklinks'>
            <h4>Careers</h4>
            <ul>
              <li>
                <Link to='/'>Become a campus rep</Link>
              </li>
              <li>
                <Link to='/'>Become a vasiti influencer</Link>
              </li>
              <li>
                <Link to='/'>Become a campus writer</Link>
              </li>
              <li>
                <Link to='/'>Become an Affiliate</Link>
              </li>
            </ul>
          </div>
          <div className='quicklinks'>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <Link to='/'>Contact us</Link>
              </li>
              <li>
                <Link to='/'>Partner with us</Link>
              </li>
              <li>
                <Link to='/'>Advertise with us</Link>
              </li>
              <li>
                <Link to='/'>Help/FAQs</Link>
              </li>
            </ul>
          </div>
          <div className='quicklinks'>
            <h4>Join our community</h4>
            <div className='smlinks'>
              <Link to='/'>
                {" "}
                <img src={InImg} alt='Vasiti Linkedin' />
              </Link>
              <Link to='/'>
                {" "}
                <img src={fbImg} alt='Vasiti Facebook' />
              </Link>
              <Link to='/'>
                {" "}
                <img src={igImg} alt='Vasiti Instagram' />
              </Link>
              <Link to='/'>
                {" "}
                <img src={twImg} alt='Vasiti Twittter' />
              </Link>
            </div>
            <ul>
              <li>
                <Link to='/'>Email Newsletter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
