// import React from "react";
import hdfcfund_ss from "../assets/images/hdfcfund_ss.svg";
import curiousworld_ss from "../assets/images/curiousworld_ss.svg";
import etf_ss from "../assets/images/etf_ss.svg";
import linius_ss from "../assets/images/linius_ss.svg";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://www.curiousworld.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={curiousworld_ss} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.curiousworld.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Curious World - E-Learning Platform</h2>
          </a>
          <p>
            I have developed RESTful APIs using PHP and Node.js and built a web
            portal using React. Additionally, I optimized the API performance,
            successfully reducing response times by 50%.
          </p>
        </div>
        <div className="project">
          <a href="https://www.hdfcfund.com/" target="_blank" rel="noreferrer">
            <img src={hdfcfund_ss} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.hdfcfund.com/" target="_blank" rel="noreferrer">
            <h2>HDFC Mutual Fund</h2>
          </a>
          <p>
            Designed, developed, and launched a 3D multiplayer racing game with
            C# and Unity. This is available on Itch.io for gamers worldwide to
            enjoy.
          </p>
        </div>
        <div className="project">
          <a href="https://www.etf.com/" target="_blank" rel="noreferrer">
            <img src={etf_ss} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.etf.com/" target="_blank" rel="noreferrer">
            <h2>ETF.com - Portfolio Management</h2>
          </a>
          <p>
            Developed and released a 2D shooting game with C# and Unity. This
            project is hosted on the Itch.io public marketplace.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.linius.com/whizzard-portal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linius_ss} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.linius.com/whizzard-portal"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Linius - OTT Platform</h2>
          </a>
          <p>
            This is an online educational platform that provides high-quality,
            data science-focused learning resources in the Japanese language. I
            created the entire platform from scratch using Ruby on Rails.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
