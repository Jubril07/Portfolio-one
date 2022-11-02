const Intro = () => {
  return (
    <div className="intro" id="home">
      <div className="intro-text">
        Hi <br />
        I'm Haruna M. Jubril <br />A Frontend Web Developer (React.js)
        <div>
          <a href="#contact">
            <button className="button">Contact Me</button>
          </a>
        </div>
      </div>{" "}
      <br />
      <div className="image">
        <img src="myPic.jpg" alt="" />
      </div>
    </div>
  );
};

export default Intro;
