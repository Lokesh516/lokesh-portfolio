import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Cyto Study Manager",
      desc: "A system for managing genetic toxicology studies. Built reusable components, role-based UI, and integrated REST APIs using React. Used Azure Boards for defect tracking."
    },
    {
      title: "Provider Portal & Common Product Platform",
      desc: "Developed modules for cancer checkup orders and past order tracking using React, Redux, and REST APIs. Enabled result generation and automation for cancer screening processes."
    },
    {
      title: "QuickBuy E-commerce App",
      desc: "A fully responsive shopping app with login/signup, cart, wishlist, and product reviews using React, Context API & LocalStorage.",
      github: "https://github.com/Lokesh516/quickbuy-app/",
      live: "https://quickbuy-store.netlify.app/"
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio to showcase my projects, skills, and contact information. Built using React and styled with CSS.",
      github: "https://github.com/Lokesh516/lokesh-portfolio",
      live: "https://lokeshg-portfolio.netlify.app"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projectList.map((project, i) => (
            <div className="project-card" key={i}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              {project.github && project.live && (
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
