import React from "react";

const Projects = () => {
  return (
    <div id="portfolio">
      <h1 style={{ textAlign: "center" }}>Portfolio</h1>
      <div className="projects">
        <div>
          <a href="https://cosmic-platypus-36c3f0.netlify.app/" target="_blank">
            <img src="crypto.jpg" alt="" />
          </a>{" "}
          <br />
          <h1>Cryptoverse</h1>
          <div>
            <b>Details:&nbsp;</b> This is a cryptocurrency app that keeps you updated
            on the current happenings in the crypto world. <br />
            <b> Features:&nbsp;</b>Get latest price of cryptos, Ranking of coins,
            crypto news e.t.c <br />
            <b>Status:&nbsp;</b>Not live
            <div className="link">
            <a href="https://cosmic-platypus-36c3f0.netlify.app/" target='_blank'><button>Live link</button></a>
              <a href="https://github.com/Jubril07/crypto-price-tracker"><button>Github</button></a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div>
          <a href="https://haruna.netlify.app/" target="_blank">
            <img src="logos.jpg" alt="" />
          </a>{" "}
          <br />
          <h1>Logo Designs</h1>
          <div>
            <b>Details:&nbsp;</b> Git, Google Photos and Figma logo design with vanilla css. <br />
            <br />
            <b>Status:&nbsp;</b>Live
            <div className="link">
            <a href="https://quiet-pudding-e8cb08.netlify.app/"><button>Live link</button></a>
              <a href="https://github.com/Jubril07/Test"><button>Github</button></a>
            </div>
          </div>         
        </div>
        {/* Project 3 */}
        <div>
          <a href="https://haruna.netlify.app/" target="_blank">
            <img src="weather.jpg" alt="" />
          </a>{" "}
          <br />
          <h1>Weather App</h1>
          <div>
            <b>Details:&nbsp;</b> Weather App with React.js <br />
            <b> Features:&nbsp;</b>Get Weather informations base on your location <br />
            <b>Status:&nbsp;</b>Not live
            <div className="link">
            <a href="https://github.com/Jubril07/Test"><button>Live link</button></a>
              <a href="https://github.com/Jubril07/Test"><button>Github</button></a>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div> 
          <a href="https://haruna.netlify.app/" target="_blank">
            <img src="portfolio.jpg" alt="" />
          </a>{" "}
          <br />
          <h1>Portfolio</h1>
          <div>
            <b>Details:&nbsp;</b> A personal portfolio to showcase my works and track my growth. <br />
            <b> Features:&nbsp;</b>Made with React.js <br />
            <b>Status:&nbsp;</b>Live
            <div className="link">
            <a href="https://haruna.netlify.app/" target="_blank"><button>Live link</button></a>
              <a href="https://github.com/Jubril07/Portfolio-one"><button>Github</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
