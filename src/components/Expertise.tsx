// import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  // faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React",
  "HTML5",
  "CSS3",
  // "SASS",
  // "Flask",
  // "Python",
  "SQL",
  "MongoDB",
  "Postman",
  "DynamoDB",
  "MySQL"
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  // "Azure",
  "Linux",
  // "Snowflake",
  // "Pandas",
  // "Selenium",
];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
             I build full-stack web applications using React, Node.js, and TypeScript. I work across the entire SDLC and handle both frontend and backend development. I also have experience with SQL/NoSQL databases and serverless workflows using AWS Lambda and Step Functions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I streamline development workflows using DevOps best practices, including automated testing, CI/CD pipelines, and deployment automation. I also work with containerization, cloud services, and version control to ensure smooth and reliable releases.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
