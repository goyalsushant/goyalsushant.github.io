// import React from "react";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
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
            {/* <img src={mock10} className="zoom" alt="thumbnail" width="100%" /> */}
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
            {/* <img src={mock09} className="zoom" alt="thumbnail" width="100%" /> */}
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
            {/* <img src={mock08} className="zoom" alt="thumbnail" width="100%" /> */}
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
            {/* <img src={mock07} className="zoom" alt="thumbnail" width="100%" /> */}
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
