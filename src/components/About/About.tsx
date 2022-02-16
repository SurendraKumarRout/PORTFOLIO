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

export function About() {
  return (
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>ABOUT ME</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p id="head">I am Surendra KUMAR</p>
          <br></br>
          <p>
            Dynamic and technically-sound aspiring full-stack developer who
            always finds room for improvement. Self-motivated and flexible, with
            a keen interest to learn and adopt new technologies. Looking forward
            to utilizing and enhancing my skills in a challenging work
            environment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I develop websites and applications using HTML, CSS, and JavaScript.
            I am familiar with developing layouts that they provide me. I'm
            always improving myself with each project I get my hands on.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a dedicated person who pursues his dreams, hardworking and
            results oriented, I always seek to achieve my best version.
          </p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profilePicture} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
