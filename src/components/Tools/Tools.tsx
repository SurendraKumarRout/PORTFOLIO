import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mongoIcon from "../../assets/mongoDb.png";
import expressIcon from "../../assets/express.png";
import mongooseIcon from "../../assets/mongoose.png";
import profilePicture from "../../assets/profile-pic.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Tools() {
  return (
    <Container id="container">
      <div id="tools">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h2>TOOLS & TECH-STACKS:</h2>
        </ScrollAnimation>
        <br></br>
        <div className="hard-skills">
          {/* ----------------FRONTEND---------------- */}
          <div id="frontEnd">
            <h3>FRONTEND :</h3>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                <img src={htmlIcon} alt="Html" />
                <p>HTML</p>
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
                <img src={cssIcon} alt="Css" />
                <p>CSS</p>
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
                <p>JAVASCRIPT</p>
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <img src={reactIcon} alt="React" />
                <p>REACT</p>
              </ScrollAnimation>
            </div>
          </div>

          {/* ---------------BACKEND-------------- */}
          <div id="backEnd">
            <h3>BACKEND :</h3>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                <img src={expressIcon} alt="Express" />
                <p>EXPRESS JS</p>
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                <img src={nodeIcon} alt="Node" />
                <p>NODE JS</p>
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
                <p>JAVASCRIPT</p>
              </ScrollAnimation>
            </div>
          </div>

          {/* ------------------DATABASES---------------- */}
          <div id="dataBase">
            <h3>DATABASE :</h3>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <img src={mongoIcon} alt="Mongo" />
                <p>MONGODB</p>
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                <img src={mongooseIcon} alt="Mongoose" />
                <p>MONGOOSE</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
