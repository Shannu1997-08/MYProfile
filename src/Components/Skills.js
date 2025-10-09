import React, { useState } from "react";

// Each section has a title, description, and cards


export const Skills = () => {
  const sections = [
    {
      title: "Technical Skills",
      description: (
        <>
          I specialize in front-end development with a strong focus on
          <span className="highlight react"> React JS </span>
          and <span className="highlight js">JavaScript</span>, building
          high-performance and scalable web applications. My expertise includes
          state management with <span className="highlight redux">Redux</span>,
          efficient routing using <span className="highlight router">React Router</span>,
          and crafting responsive, modern UI designs with
          <span className="highlight bootstrap"> React Bootstrap</span>.
        </>
      ),
      cards: [
        { name: "React JS", src: process.env.PUBLIC_URL + "/assets/logo192.png" },
        { name: "JavaScript", src: process.env.PUBLIC_URL + "/assets/JavaScript.png" },
        { name: "Redux", src: process.env.PUBLIC_URL + "/assets/Redux.png" },
        { name: "React Router", src: process.env.PUBLIC_URL + "/assets/reactrouter.png" },
        { name: "React Bootstrap", src: process.env.PUBLIC_URL + "/assets/ReactBootstrap.png" },
      ],
    },
    {
      title: "Used Tools",
      description: (
        <>
          I am proficient with essential development tools:
          <span className="highlight axios"> Axios </span> — for HTTP requests and API handling,
          <span className="highlight postman"> Postman </span> — for API testing and debugging,
          <span className="highlight bitbucket"> Bitbucket </span> — for source control and repository management,
          <span className="highlight jira"> Jira </span> — for Agile project management and issue tracking,
          and <span className="highlight github"> GitHub</span> — for version control, collaboration, and deployment.
        </>
      ),
      cards: [
        { name: "Axios", src: process.env.PUBLIC_URL +"/assets/Azios.png" },
        { name: "Postman", src: process.env.PUBLIC_URL +"/assets/Postman.png" },
        { name: "Bitbucket", src: process.env.PUBLIC_URL +"/assets/BitBucket.png" },
        { name: "Jira", src: process.env.PUBLIC_URL +"/assets/Jira.png" },
        { name: "GitHub", src: process.env.PUBLIC_URL +"/assets/GitHub.png" },
      ],
    },
    {
      title: "Used Libraries & Frameworks",
      description: <>
        I am proficient with modern web libraries and technologies:
        <span className="highlight css3"> CSS3 </span> — for advanced styling, layouts, and animations,
        <span className="highlight bootstrap"> Bootstrap </span> — for rapid cross-device compatible designs,
        <span className="highlight html5"> HTML5 </span> — for semantic and accessible markup,
        and <span className="highlight tailwind"> Tailwind CSS</span> — for utility-first, maintainable styling.
        <span className="highlight antd"> Ant Design </span> — for enterprise-ready React components and professional UI.
      </>,
      cards: [
        { name: "CSS3", src: process.env.PUBLIC_URL +"/assets/CSS3.png" },
        { name: "Bootstrap", src: process.env.PUBLIC_URL +"/assets/Bootstrap.png" },
        { name: "HTML5", src: process.env.PUBLIC_URL +"/assets/HTML5.png" },
        { name: "Tailwind CSS", src: process.env.PUBLIC_URL +"/assets/Tailwind CSS.png" },
        { name: "Antd", src: process.env.PUBLIC_URL +"/assets/Ant Design.png" },
      ],
    },
    {
      title: "Learning & Personal Projects",
      description: <>
        I have explored and gained hands-on experience with technologies like
        <span className="highlight mongodb"> MongoDB </span>,
        <span className="highlight express"> Express.js </span>,
        <span className="highlight react-native"> React Native </span>,
        <span className="highlight nodejs"> Node.js </span>,
        and  <span className="highlight jest"> Jest </span>.
        I learn and experiment with these tools in my free time by building small projects,
        which helps me understand how they work and how to integrate them in real-world applications.
      </>,
      cards: [
        { name: "MongoDB", src: process.env.PUBLIC_URL +"/assets/mongoDB.png" },
        { name: "Express.js", src: process.env.PUBLIC_URL +"/assets/Express.png" },
        { name: "React Native", src: process.env.PUBLIC_URL +"/assets/logo192.png" },
        { name: "Node.js", src: process.env.PUBLIC_URL +"/assets/Node.js.png" },
        { name: "Jest", src: process.env.PUBLIC_URL +"/assets/Jest.png" },

      ],
    },
  ];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleNext = () => {
    setCurrentSectionIndex((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setCurrentSectionIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const currentSection = sections[currentSectionIndex];

  return (
    <section className="sections-carousel">
      <div className="sections-container">
        <h2 className="section-title">{currentSection.title}</h2>

        <div className="cards-container fade-in">
          {currentSection.cards.map((card) => (
            <div className="card-item" key={card.name}>
              <img src={card.src} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>

        <p className="section-description">{currentSection.description}</p>

        <div className="nav-buttons">
          <button className="prev-btn" onClick={handlePrev}>
            &#8592; Previous
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};
