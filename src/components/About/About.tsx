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
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>ABOUT ME</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p id="head">I am Surendra</p>
          <br></br>
          <p>
            A front-end oriented aspiring full stack web developer who enjoy
            creating things that live on the internet. I am passionate about
            solving real-world problems in the field of web development and
            software engineering.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I develop websites using HTML, CSS, JavaScript and React. I'm always
            improving myself with each project I get my hands on, I always seek
            to achieve my best version.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            Learned a great deal about teamwork, leadership, and communication.
            After months of rigorous training, Eager to be a part of a team
            which gives me ability to learn and grow .
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
