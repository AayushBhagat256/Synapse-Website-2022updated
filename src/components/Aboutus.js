import "./Aboutus.css";
import roboimg from './Roboimg.png';
import mlimg5 from './mlimg5.png';
import mlimg6 from './mlimg6.png';

const About = () => {
  return (
    <>
    <div className="a">
      <div className="a-left">
        <p className="a-desc">
          <h1 className="a-title container">ABOUT US</h1>
          Founded in 2020 out of passion for the AI/ML domain we are Synapse ,
          The official AI/ML club of DJ Sanghvi working on ML projects,
          researching on various topics and having fun in the process. Synapse
          truly believes in the transformative powers of ML and
          hence provides mentorship and motivation to a student for
          researching a field of his/her interest and creates an innovative
          solution to the world problems by implementing modern solutions.
        </p>
      </div>
      <div className="b-right">
        <div className="a-card">
          <img
            src={roboimg}
            alt=""
            className="img-fluid" />
        </div>
      </div>
    </div>
    <div className="b">

        <div className="b-right">
          <div className="a-card">
            <img
              src={mlimg5}
              alt=""
              className="img-fluid1" />
          </div>
        </div>
        <div className="b-left">
          <p className="a-desc">
            <h1 className="a-title container">MISSION</h1>
            To encourage research aptitude. Developing professional skills
            and providing systematic and modern approach in learning.
          </p>
        </div>
      </div>
      <div className="b">
      <div className="b-left">
        <p className="a-desc">
          <h1 className="a-title container">VISION</h1>
          To provide high quality knowledge and ethical values to develop competent and capable engineers.
        </p>
      </div>
      <div className="b-right">
        <div className="a-card">
          <img
            src={mlimg6}
            alt=""
            className="img-fluid1" />
        </div>
      </div>
    </div>
      </>


  );
};

export default About;