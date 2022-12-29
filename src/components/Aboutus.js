import "./Aboutus.css";
import roboimg from './Roboimg.png';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <p className="a-desc">
          <h1 className="a-title container">About us</h1>
          Founded in 2020 out of passion for the AI/ML domain we are Synapse ,
          The official AI/ML club of DJ Sanghvi working on ML projects,
          researching on various topics and having fun in the process. Synapse
          truly believes in the transformative powers of ML and 
          hence provides mentorship and motivation to a student for
          researching a field of his/her interest and creates an innovative
          solution to the world problems by implementing modern solutions.
        </p>
      </div>
      <div className="a-right">
        <div className="a-card">
          <img
            src={roboimg}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;