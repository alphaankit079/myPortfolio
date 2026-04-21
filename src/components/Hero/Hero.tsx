import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import Hello from '../../assets/Hello.gif'
import emailll from '../../assets/emailll.svg'
import whatsapp from '../../assets/whatsapp.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Ankit Kumar</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Freshers</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Built Real-World MERN Projects</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/ankit-kumar-3b75aa203/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/alphaankit079"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/_alphaankit?igsh=MTYzMTB3MjI0bGl1Zw=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
                  href="https://api.whatsapp.com/send?phone=917903908743&text=Hello Ankit, I found your portfolio and would like to connect."
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp} alt="Whatsapp" />
                </a>
        <a
          href="mailto:ankit.singh28112011@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={emailll} alt="email" />
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}