import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="about-card__img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae velit
          est ea totam ipsam et ab sapiente ratione non! Aliquam.
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum
          quaerat odit quisquam minus asperiores? Eveniet, soluta reiciendis id
          est ratione voluptates tenetur dolorem nostrum neque maiores, cumque
          porro veniam repellendus pariatur non aliquam. Explicabo, tempore
          sapiente? Ullam culpa dolore, quae adipisci numquam quaerat ab totam,
          cupiditate iusto accusantium expedita?
        </p>
        <div className="about-award">
          <img
            src="https://www.exabytes.co.id/blog/wp-content/uploads/2020/03/iwa-postponed.jpg"
            alt="award"
            className="about-right__img"
          />
          <div className="about-award__text">
            <h4 className="about-award__title">
              International Web Development
            </h4>
            <p className="about-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
              modi autem magnam quas dolorem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
