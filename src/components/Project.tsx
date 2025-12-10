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
          <p style={{textAlign: 'justify'}}>
            Created RESTful APIs using PHP and Node.js and built a web
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
          <p style={{textAlign: 'justify'}}>
           Developed Node.js APIs and a ReactJS website with real-time integrations, optimizing architecture to boost performance by 20%.
          </p>
        </div>
        <div className="project">
          <a href="https://www.etf.com/" target="_blank" rel="noreferrer">
            <img src={etf_ss} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.etf.com/" target="_blank" rel="noreferrer">
            <h2>ETF.com - Portfolio Management</h2>
          </a>
          <p style={{textAlign: 'justify'}}>
            Developed a dashboard for tracking stock and mutual fund portfolios using React, Node.js, and AWS, leveraging Docker for seamless setup and environment portability.
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
          <p style={{textAlign: 'justify'}}>
            Created workflows using AWS Lambda and Step Functions to ingest videos and generate clips of specified durations from metadata files for full game coverage (cricket, football, hockey).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
