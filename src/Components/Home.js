import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <p className="intro">
          👋 Hi, I'm <span className="highlight-name">Shanmukh</span>, a passionate <span className="highlight-designation">Frontend Developer</span> who loves building modern, responsive, and interactive web applications using ReactJS,Redux  and JavaScript. I enjoy turning ideas into beautiful user experiences and constantly learning new technologies to enhance my skills.
        </p>
        <a href="/about" className="btn">About me</a>
      </div>
    </section>
  );
};

export default Home;
