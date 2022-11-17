import "./Aboutus.css";
import roboimg from './RobotImage.png'

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
        <p className="a-desc">
        <h1 className="a-title">ABOUT US</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed doeiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim adminim veniam, quis nostrud exercitation 
          ullamco laboris nisi utaliquip ex ea commodo consequat dui
          s aute irure dolor in reprehende.
        </p>
      </div>
      <div className="a-right">
        <div className="a-card">
          <img
            src={roboimg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;