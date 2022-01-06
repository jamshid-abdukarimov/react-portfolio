import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left__wrapper">
          <h2 className="intro-intro">Hello, My name is</h2>
          <h1 className="intro-name">Jamshid Abdukarimov</h1>
          <div className="intro-title">
            <div className="intro-title__wrapper">
              <div className="intro-title__wrapper-item">Web Developer</div>
              <div className="intro-title__wrapper-item">UI/UX Designer</div>
              <div className="intro-title__wrapper-item">Photographer</div>
              <div className="intro-title__wrapper-item">Youtuber</div>
            </div>
          </div>
          <p className="intro-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            ipsa voluptatum earum sed tempora consequuntur veniam, eius
            reiciendis nihil voluptate dolorem repudiandae error vel. Quis!
          </p>
        </div>
        <svg />
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img
          src="https://24-pro.ru/img/sp/support-img2.png"
          alt="me png"
          className="intro-img"
        />
      </div>
    </div>
  );
};

export default Intro;
