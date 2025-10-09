import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { profilePicture } from "./ComonIcon";

const About = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleResumeShow = () => {
    setOpen(true);
  };

  // Trigger animations on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="about">
      {/* About Section */}
      <div className={`about-container ${animate ? "fade-in" : ""}`}>
        <div className="about-image">
          <img src={profilePicture} alt="Shanmukh Shannu" />
        </div>
        <div className="about-content">
          <p className="about-text">
            Hello! I'm <span className="highlight-name">Shanmukh V</span>, a
            creative and dedicated{" "}
            <span className="highlight-designation">Frontend Developer</span>{" "}
            with <strong>4 years of experience</strong> building responsive,
            modern, and interactive web applications using ReactJS, Redux,
            JavaScript, HTML5, and CSS3. I enjoy turning ideas into visually
            appealing and user-friendly digital experiences while continuously
            learning new technologies to deliver high-quality solutions.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className={`skills-section ${animate ? "fade-in" : ""}`}>
        <div className="skills-content">
          <h2 className="skills-title">Professional Summary</h2>
          <p className="skills-text">
            Experienced in state management using <strong>Redux</strong> to
            efficiently handle global application states, with expertise in
            React hooks such as{" "}
            <strong>useState, useEffect, useContext, useReducer, and useMemo</strong>{" "}
            to optimize functional components.
            <br />
            <br />
            Proficient in <strong>useSelector</strong> and{" "}
            <strong>useDispatch</strong>, integrating third-party libraries and
            RESTful APIs for real-time data updates, and building reusable,
            modular components for maintainable code. Skilled in developing
            interactive UI elements like dynamic forms, tables, and dashboards,
            focusing on performance, API latency reduction, and responsive
            design. Adept at collaborating with cross-functional teams,
            writing front-end test cases, and solving complex technical
            challenges efficiently.
          </p>
        </div>
      </div>

      {/* Resume Button */}
      <div className="resume-button-container">
        <a
          style={{ cursor: "pointer" }}
          onClick={handleResumeShow}
          className="btn-resume"
        >
          View Resume
        </a>
      </div>

      {/* Resume Modal */}
      <Modal show={open} onHide={() => setOpen(false)} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="/ShanmukhV.pdf"
            title="Resume"
            width="100%"
            height="500px"
          ></iframe>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button
            style={{
              color: "white",
              backgroundColor: "gray",
              border: "none",
            }}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default About;
