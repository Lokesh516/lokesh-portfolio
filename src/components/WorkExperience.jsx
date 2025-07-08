import "./WorkExperience.css";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Associate Software Developer",
      company: "Instem India Pvt Ltd",
      duration: "Jul 2023 – Oct 2024",
      details: [
        "Worked with web development technologies like React, JavaScript, CSS3, and HTML5 for front-end development.",
        "Created and reused components for better code reduction and maintenance.",
        "Worked with Axios to retrieve the data in the application and manipulate it to the desired form.",
        "Debugged and resolved issues related to React components.",
        "Implemented automated tests for all React components using Jest.",
        "Worked closely with product owners on requirements gathering, design decisions, and implementation strategies for new features in areact application.",
        "Collaborated closely with team members to achieve project objectives and meet deadlines."
      ],
    },
    {
      role: "Associate QA Engineer",
      company: "Strand Life Sciences Pvt Ltd",
      duration: "May 2022 – Feb 2023",
      details: [
        "Implemented automated tests for all React components using Jest.",
        "Developed React applications using Redux state management and RESTful APIs.",
        "Managed source control systems like Git when working on collaborative teams building out complex react applications.",
        "Familiarity with modern development and build tools such as git, npm, babel, and webpack."
      ],
    },
    {
      role: "React Developer Intern",
      company: "TopCentile",
      duration: "Jan 2022 – Mar 2022",
      details: [
        "Comprehensive knowledge of the ReactJS platform and core principles.",
        "Command over HTML5, CSS3 and JavaScript languages.",
        "Command over developing React JS components, Virtual DOM, and workflows.",
        "User interface design and development."
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role} – {exp.company}</h3>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
