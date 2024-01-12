
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/OIP.jpeg"
              alt="Basil Yusuf Profile"
              className="shadow-dark"
            />
            <h1>Basil Yusuf</h1>
            <p>Software Engineer</p>
            <div className="social-links">
              <a href="https://x.com/basilysf1709" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://github.com/basilysf1709" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/basilyusuf1709" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/basil-yusuf-388326273/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
