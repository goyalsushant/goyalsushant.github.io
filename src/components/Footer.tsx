// import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/goyalsushant"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/goyalsushant/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        Built with passion, caffeine, and clean code by{" "}
        <a
          href="https://github.com/goyalsushant"
          target="_blank"
          rel="noreferrer"
        >
          Sushant Goyal
        </a>{" "}💜
      </p>
    </footer>
  );
}

export default Footer;
