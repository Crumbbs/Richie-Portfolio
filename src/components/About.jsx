function About() {
  return (
    <section className="section about-section">
      <div className="about-layout">
        <div className="about-copy">
          <p className="eyebrow">About Me</p>
          <h1>Hi, I'm Richie</h1>
          <p className="about-lead">
            I'm a Computer Science student at Binus University with a strong
            interest in software development and data technologies.
          </p>
          <p>
            I enjoy learning new technologies and continuously improving my
            technical skills through hands-on projects and collaboration. I am
            active in student organizations and currently learning mobile
            programming using Java in Android Studio.
          </p>
        </div>

        <div className="about-visual">
          <div className="avatar-ring">
            <img
              src="icons/profile.jpg"
              alt="Richie Eleazar Isjwara"
              className="about-avatar"
            />
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
          <div className="skills-card">
            <h3 className="skills-subtitle">Programming Languages</h3>
            <div className="tag-list">
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/javascript.svg" />
                </div>
                JavaScript
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/html.svg" />
                </div>
                HTML
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/css.svg" />
                </div>
                CSS
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/php.svg" />
                </div>
                PHP
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/python.svg" />
                </div>
                Python
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/java.svg" />
                </div>
                Java
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/sql.svg" />
                </div>
                SQL
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/c.svg" />
                </div>
                C++
              </div>
            </div>
          </div>

          <div className="skills-card">
            <h3 className="skills-subtitle">Software & Tools</h3>
            <div className="tag-list">
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/github.svg" />
                </div>
                GitHub
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/vscod.svg" />
                </div>
                VS Code
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/figma.svg" />
                </div>
                Figma
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/hadoop.svg" className="logo-boost" />
                </div>
                Hadoop
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/spark.svg" className="logo-boost" />
                </div>
                Spark
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/docker.svg" />
                </div>
                Docker
              </div>
              <div className="tag">
                <div className="tag-icon">
                  <img src="icons/mysql.svg" className="logo-boost" />
                </div>
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2 className="skills-title">Contact</h2>

        <div className="contact-card">
          <div className="contact-inline">
            <div className="contact-left">
              <p>
                <strong>Email:</strong> richie.isjwara@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +62 81213228589
              </p>
            </div>

            <a
              className="contact-icon-link"
              href="https://www.linkedin.com/in/richie-isjwara-8191141a5/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="icons/linkedin.svg"
                className="contact-icon"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
