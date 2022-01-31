import React from 'react';
import './footer.css';

const Footer = (props) => {
  let url="";
  return (
    <>
      <div className="section5">
        <section>
          <h1 className="title inline-photo2 show-on-scroll2" style={{color: "black"}}>Subscribe to our newsletter</h1>
          <p className="inline-photo show-on-scroll">Get latest news on property postings, bankrupt details, new installment scheme.</p>
        </section>
        <section>
          <button className="btn2">Subscribe</button>
        </section>
      </div>

      <footer>
        <div className="footer">
          <section>
            <h3>HOMELY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </section>
          <section>
            <h3>LINKS</h3>
            <a href={url}>Home</a>
            <a href={url}>About Us</a>
            <a href={url}>Blog</a>
            <a href={url}>Contact Us</a>
          </section>
          <section>
            <h3>OTHER</h3>
            <a href={url}>Privacy Policy</a>
            <a href={url}>Terms & Conditions</a>
            <a href={url}>Cookie Policy</a>
          </section>
          <section>
            <h3>ANY QUESTIONS?</h3>
            <a href="emailto:support@websitename.com"><span><i className="fa fa-envelope"></i></span><span>support@homely.com</span></a>
            <a href="tel:xxxxxxxxx"><span><i className="fa fa-phone"></i></span><span>(+x)-xxx-xxxx-xxxxx</span></a>
          </section>
        </div>
      </footer>
      <div className="sub-footer">
        Copyright ©2021 All rights reserved | homely.com
      </div>
    </>
  )
};

export default Footer;
