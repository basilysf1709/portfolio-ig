import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Basil Yusuf, a{" "}
                    <span>Computer Science and Economics Specialist</span>
                  </h2>
                  <p>
                    Hi! My name is Basil Yusuf. I am a graduate in Computer
                    Science and Economics from the University of Guelph,
                    passionate about developing innovative software solutions.
                    With experience in various internships and projects, I have
                    honed my skills in languages like Java, Go, C/C++, and in
                    tools such as React, Node, AWS, and Azure. I'm dedicated to
                    leveraging my knowledge to contribute to meaningful
                    projects.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>basilyusuf1709@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>5197310464</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        GitHub :{" "}
                        <span>
                          <a href="https://github.com/basilysf1709/">
                            GitHub Profile ←
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        LinkedIn :{" "}
                        <span>
                          <a href="https://linkedin.com/in/basil-yusuf-388326273/">
                            LinkedIn Profile ←
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    {/* Add skill items here like the original template */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline shadow-dark">
                      {/* University of Guelph */}
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar" /> Sep 2020 - Apr 2024
                        </h6>
                        <h4 className="timeline-title">
                          Bachelor of Computing
                        </h4>
                        <p className="timeline-text">
                          Studying at the University of Guelph, focusing on
                          Computer Science and Economics. Currently at a
                          cumulative GPA of 4.0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar" /> Oct 2023 - Present | Deloitte
                        </h6>
                        <h4 className="timeline-title">
                          Software Engineer (DevOps / Infrastructure)
                        </h4>
                        <p className="timeline-text">
                          At Deloitte in Toronto, orchestrated the application's
                          migration to AWS and implemented Continuous Deployment
                          in Azure DevOps.
                        </p>
                      </div>
                      {/* Amazon */}
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar" /> May 2023 - Aug 2023 | Amazon
                        </h6>
                        <h4 className="timeline-title">
                          Software Engineer Intern
                        </h4>
                        <p className="timeline-text">
                          Engineered a web app for Amazon Kids+ at Amazon,
                          Toronto, automating AWS AppConfig deployments and
                          developing VPC and AWS Lambda infrastructure.
                        </p>
                      </div>
                      {/* TD Bank */}
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar" /> Jan 2023 - Apr 2023 | TD Bank
                        </h6>
                        <h4 className="timeline-title">
                          Software Engineer Intern
                        </h4>
                        <p className="timeline-text">
                          Worked at TD Bank in Toronto, migrated SOAP API
                          endpoints to REST API, and led the design of SOAP API
                          sequence diagrams.
                        </p>
                      </div>
                      {/* University of Guelph - Undergraduate Researcher */}
<div className="timeline-item">
  <div className="circle-dot" />
  <h6 className="timeline-date">
    <i className="fa fa-calendar" /> Jan 2023 - Apr 2023 | University of Guelph
  </h6>
  <h4 className="timeline-title">Undergraduate Researcher</h4>
  <p className="timeline-text">
    Developed game matchmaking server architecture, integrating microservices and RabbitMQ for scalability at the University of Guelph. Implemented MongoDB for player data storage and deployed automated scaling and monitoring systems.
  </p>
</div>

{/* Interac - Software Engineer Intern */}
<div className="timeline-item">
  <div className="circle-dot" />
  <h6 className="timeline-date">
    <i className="fa fa-calendar" /> Sep 2022 - Dec 2022 | Interac
  </h6>
  <h4 className="timeline-title">Software Engineer Intern (Platform and Cloud Architecture)</h4>
  <p className="timeline-text">
    Developed authentication infrastructure for Interac e-Transfers using Azure technologies. Initiated and coordinated the building of Interac’s Digital Platform architecture and infrastructure.
  </p>
</div>

{/* University of Guelph - Software Developer Intern */}
<div className="timeline-item">
  <div className="circle-dot" />
  <h6 className="timeline-date">
    <i className="fa fa-calendar" /> May 2022 - Aug 2022  | University of Guelph
  </h6>
  <h4 className="timeline-title">Software Developer Intern</h4>
  <p className="timeline-text">
    Programmed the landing page of ResearchSpace web application at the University of Guelph. Migrated JavaScript code to TypeScript React Components, reducing production and build time by 20%.
  </p>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
