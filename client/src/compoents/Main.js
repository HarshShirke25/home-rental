import React from 'react';
import '../css/main.css'

import shape from '../images/shape.png';
import home from '../images/home.svg';


const Main = () => {
  let url="";
  return (
    <>
      <main>
      <div className="big-wrapper light">
      <header>
          <div className="container">
            <div className="logo">
              <h3>HOME-LY</h3>
            </div>

            <div className="links">
              <ul>
                <li><a href={url}>Features</a></li>
                <li><a href={url}>Pricing</a></li>
                <li><a href={url}>Testimonials</a></li>
                <li><a href={url} className="btn">Sign up</a></li>
              </ul>
            </div>

            <div className="overlay"></div>

            <div className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </header>
        
        <img src={shape} alt="" className="shape" />
        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div className="big-title">
                <h1>Don't be Lonely,</h1>
                <h1>To find your Dream Home Visit  <span style={{color: '#2b6777', marginLeft: '10px'}}>HOME-LY</span></h1>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
              <div className="cta">
                <a href={url} className="btn">Get started</a>
              </div>
            </div>

            <div className="right">
              <img style={{height: '40%', width: '60%', marginTop: '-30%'}} src={home} alt="home" className="person" />
            </div>
          </div>
        </div>

        
      </div>
    </main>  
    </>
  )
};

export default Main;
