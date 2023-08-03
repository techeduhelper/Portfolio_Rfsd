import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import CV from "../../assets/document/Maniruddin.pdf";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsGithub } from "react-icons/bs";
import Layout from "../../components/Layout/Layout";
import { useTheme } from "../../context/ThemeContext";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Layout>
        <div className="home-page mobile-view visible-lg overflow-hidden ">
          <div className="home-container ">
            <div className="content-container d-flex flex-column text-center ">
              <Fade left cascade>
                <h2 className="hi-class d-inline ">Hi, I am a</h2>
              </Fade>
              &nbsp;
              <h2 className="typewriter-effect d-inline display-4">
                <Typewriter
                  options={{
                    strings: [
                      "Maniruddin Khan",
                      "React Developer!",
                      "MERN Stack Developer!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <Zoom left cascade>
                <span className="text-white text-justify fs-5 px-3  mt-3 mb-4">
                  Innovative Full Stack Web Developer skilled in HTML, CSS,
                  JavaScript, Node.js, MongoDB, React.js, and more. Expert in
                  APIs, Material UI, Bootstrap, Tailwind CSS. Exploring React
                  Native and Next.js for mobile and server-side brilliance.
                  Passionate about creating exceptional web experiences.
                </span>
              </Zoom>
            </div>
          </div>
          <div className="button-container text-center gap-4 mt-2 z-1">
            <button type="button" className="btn btn-danger btn-lg text-white">
              Hire Me
            </button>
            <a
              type="button"
              href={CV}
              download="Maniruddin_Khan_CV"
              className="btn btn-outline-light btn-lg text-danger"
            >
              Download CV
            </a>
          </div>
          <div className="social-media d-flex justify-content-center gap-3 mt-5">
            <a
              className="btn btn-outline-primary"
              style={{ animationDelay: "0.3s" }}
            >
              <BiLogoFacebook size={30} />
            </a>
            <a
              className="btn btn-outline-danger"
              style={{ animationDelay: "0.5s" }}
            >
              <BsInstagram size={30} />
            </a>
            <a
              className="btn btn-outline-secondary"
              style={{ animationDelay: "0.7s" }}
            >
              <BsGithub size={30} />
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
