import "./Skills.css";

const Skills = () => {
  const skillList = [
    "ReactJS",
    "React Hooks",
    "Context API",
    "Redux",
    "JavaScript",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "RESTful APIs",
    "Jest & React Testing Library",
    "Azure DevOps",
    "Git",
    "Webpack & Babel",
    "npm",
    "Data Structures & Algorithms"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <ul className="skills-list">
          {skillList.map((skill, i) => (
            <li key={i} className="skill-badge">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
