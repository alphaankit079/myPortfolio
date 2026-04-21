import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Open to Opportunities</p>
        <p>I am actively seeking entry-level roles where I can apply my skills and grow as a developer.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ankit.singh28112011@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ankit.singh28112011@gmail.com">ankit.singh28112011@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917903908743"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917903908743">(+91) 7903908743</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}