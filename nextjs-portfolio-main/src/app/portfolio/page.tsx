import type { NextPage } from "next";
import Link from "next/link";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <Link href="https://devpost.com/software/beachify-e1k98y" className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Beachify</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <Link href="https://blindspot.website/" className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Blindspot</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <Link href="https://devpost.com/software/fiable" className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Fiable</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <Link
              href="https://devpost.com/software/withu"
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>WithU</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <Link href="https://firstyear-checklist.vercel.app/" className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>First year Checklist</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <Link href="https://github.com/basilysf1709" className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/6.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Many more on Github</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
