import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import hokIcon from "../../assets/hok.png";
import zaraIcon from "../../assets/zara.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>MY PROJECTS</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="pImg">
              <img src={hokIcon} alt="GitHub" className="pImg" />
            </div>
            <br></br>

            <div className="body">
              <div id="title">
                <h3>Hok-Makeup Clone</h3>
              </div>
              <p>
                This is a clone of Hok-Makeup website. We were a team of six
                worked on this project during our first construct week project
                at <a href="https://www.masaischool.com/"> Masai School</a>, and
                completed it in six days.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
            <br></br>
            <div className="live">
              <a
                href="https://thirsty-goldstine-ea42fc.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>GO LIVE</button>
              </a>
              <a
                href="https://github.com/SurendraKumarRout/hokmakeup"
                target="_blank"
                rel="noreferrer"
              >
                <button>VIEW CODE</button>
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="pImg">
              <img src={zaraIcon} alt="GitHub" className="pImg" />
            </div>
            <br></br>
            <div className="body">
              <div id="title">
                <h3>Zara Home Clone</h3>
              </div>
              <p>
                A collaborative project of unit - 4 is done using both frontend
                and backend technologies. In this project we had cloned the
                Zara-Home website.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>EJS</li>
                <li>EXPRESS</li>
                <li>MONGO DB</li>
              </ul>
            </footer>
            <br></br>
            <div className="live">
              <a
                href="https://zarahome.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>GO LIVE</button>
              </a>
              <a
                href="https://github.com/SurendraKumarRout/ZaraHome-Backened"
                target="_blank"
                rel="noreferrer"
              >
                <button>VIEW CODE</button>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
