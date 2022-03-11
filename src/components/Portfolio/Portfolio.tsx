import { Container } from "./styles";
import hokIcon from "../../assets/hok.png";
import zaraIcon from "../../assets/zara.png";
import netflixIcon from "../../assets/netflix_home2.png";
import ahaIcon from "../../assets/aha_home.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="project">
      <h2>MY PROJECTS</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="pImg">
              <img src={ahaIcon} alt="GitHub" className="pImg" />
            </div>
            <br></br>
            <div className="body">
              <div id="title">
                <h3>Aha Video Clone</h3>
              </div>
              <p>
                A clone of{" "}
                <a href="https://aha-clone.netlify.app/" target="_blank">
                  {" "}
                  Aha Video.{" "}
                </a>
                Aha video is a typical OTT platform where user can stream and
                watch various Tv shows and Movies in both Telugu and Tamil
                language. As there is no way to show the whole movie or tv
                shows, our end goal was to play the trailer for the selected
                content.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>REACT</li>
                <li>JAVASCRIPT</li>
                <li>REDUX</li>
                <li>STYLED-COMPONENTS</li>
                <li>FIREBASE</li>
              </ul>
            </footer>
            <br></br>
            <div className="live">
              <a
                href="https://aha-clone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>GO LIVE</button>
              </a>
              <a
                href="https://github.com/SurendraKumarRout/aha-clone"
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
                A clone of{" "}
                <a href="https://www.zarahome.com/ww/" target="_blank">
                  {" "}
                  Zara Home{" "}
                </a>
                website. It's an e-commerce web application to purchase
                lifestyle products. We were a team of five, had worked on Home
                page, Login page and Signup Page, Product's Page, Items Page,
                Cart Page and Payment page.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
            </footer>
            <br></br>
            <div className="live">
              <a
                href="https://zarahome-ww-clone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>GO LIVE</button>
              </a>
              <a
                href="https://github.com/SurendraKumarRout/Clone-ZaraHome"
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
              <img src={hokIcon} alt="GitHub" className="pImg" />
            </div>
            <br></br>

            <div className="body">
              <div id="title">
                <h3>Hok-Makeup Clone</h3>
              </div>
              <p>
                This is a clone of{" "}
                <a href="https://www.hokmakeup.com/" target="_blank">
                  {" "}
                  Hok Makeup{" "}
                </a>{" "}
                website. We were a team of six worked on this project during our
                first construct week project at{" "}
                <a href="https://www.masaischool.com/"> Masai School</a>, and
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
              <img src={netflixIcon} alt="GitHub" className="pImg" />
            </div>
            <br></br>
            <div className="body">
              <div id="title">
                <h3>NETFLIX CLONE</h3>
              </div>
              <p>
                A simple clone of{" "}
                <a href="https://www.netflix.com/browse" target="_blank">
                  {" "}
                  Netflix homepage .{" "}
                </a>
                This is a solo project, which i did for my better understandment
                of reactjs. Here I dsplayed different kind of movies and
                orignals for various categories and able to play trailer for
                selected content.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>REACT</li>
                <li>JAVASCRIPT</li>
                <li>STYLED-COMPONENTS</li>
                <li>CONTEXT-API</li>
              </ul>
            </footer>
            <br></br>
            <div className="live">
              <a
                href="https://surendra-netflix.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>GO LIVE</button>
              </a>
              <a
                href="https://github.com/SurendraKumarRout/NETFLIX-CLONE"
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
