import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import emailll from '../../assets/emailll.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      {/* <a href="https://vinayaksingh.in" className="logo">
        <span>www.vinayak</span>
        <span>singh.in</span>
      </a> */}
      <div>
        <p>
          This website is built with<img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
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
        </a>
        <a
          href="https://www.instagram.com/_alphaankit?igsh=MTYzMTB3MjI0bGl1Zw=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
