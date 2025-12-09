const projects = [
  {
    title: "Singapore Airlines Review Sentiment Analysis",
    description:
      "Sentiment analysis on Singapore Airlines reviews. Classifying airline customer review based on text and ratings using Natural Language Processing and Likert Scale.",
    tech: "Python",
    github: "https://github.com/Crumbbs/SA-Sentiment_Analysis",
  },
  {
    title: "EduLib Library Management System",
    description:
      "Class group project for library management. This software aims to track books, handle borrowing, returns, and generate reports.",
    tech: "PHP, HTML, CSS, JS",
    github: "https://github.com/Alerica/SE-Library-Management-System",
  },
  {
    title: "Music Streaming Website Prototype",
    description:
      "Website protoype for a music streaming platform. Built using HTML, CSS and JS.",
    tech: "HTML, CSS, JS",
    github: "https://github.com/Crumbbs/Music-Streaming-Prototype-Web",
  },
];

function Projects() {
  return (
    <section className="section projects-section">
      <h2>Projects</h2>

      <div className="projects-linear">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
