// import React from "react";
import mock07 from "../assets/images/mock07.png";
// import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function PersonalProject() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://dev-medistore.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://dev-medistore.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>E-Commerce Platform</h2>
          </a>
          <p>
            Developed a full-stack e-commerce application for medicines and
            pharmaceutical products using React, Node.js, and MongoDB,
            implementing continuous deployment pipelines to ensure seamless
            updates and efficient delivery.
          </p>
        </div>
        <div className="project">
          <a
            href="https://covidfyi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://covidfyi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Covid Information Platform</h2>
          </a>
          <p>
            Designed, developed, and launched a COVID-19 information platform
            with a React-based frontend, Python APIs for backend processing, and
            Airtable as the data source.
          </p>
        </div>
        {/* <div className="project">
          <a href="https://www.etf.com/" target="_blank" rel="noreferrer">
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.etf.com/" target="_blank" rel="noreferrer">
            <h2>Compensation Dashboard</h2>
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
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.linius.com/whizzard-portal"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Referral Portal</h2>
          </a>
          <p>
            This is an online educational platform that provides high-quality,
            data science-focused learning resources in the Japanese language. I
            created the entire platform from scratch using Ruby on Rails.
          </p>
        </div> */}
        <div className="project">
          <a
            href="https://www.linius.com/whizzard-portal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.linius.com/whizzard-portal"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Asset Management System</h2>
          </a>
          <p>
            Developed a comprehensive asset management platform from the ground
            up, designed to store and track organizational assets, utilizing
            HTML, CSS, JavaScript, PHP, and MySQL.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalProject;
