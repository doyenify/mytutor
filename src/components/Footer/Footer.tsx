import {Facebook, Instagram, Linkedin, Twitter,Youtube} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();

  return (
    <div  className='footer-container text-center mt-5 d-flex flex-column align-items-center justify-content-center' 
          style={{backgroundColor: "#F0EBE9" , height: "300px" }}
    >
    
        <h3 style={{display: "inline", color: "#985421"}}>my<h3 style={{display: "inline", color: "#050A27"}}>Tutor</h3> </h3> 
     
       <div className='footer-writeup' style={{color: "#050A27"}}>
            <p> <b> {t('Embark on an exciting language learning journey with me as your Estonian language tutor')}. <br />
                   {t("Together, we'll conquer challenges, explore the beauty of the language")}, 
                   {t("and achieve your language goals")}. 
            </b> </p>
        </div>
        <div>
        <a href='https://www.facebook.com' className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Facebook className="footer-link" /> </a>
        <a  href="https://www.linkedin.com" className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Linkedin className="footer-link" /> </a>
        <a  href="https://twitter.com"className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Twitter className="footer-link" /> </a>
        <a href="https://www.instagram.com" className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><Instagram className="footer-link" /> </a>
        <a href={window.location.href} className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Youtube className="footer-link" /> </a>
        </div>
    </div>
  )
}

export default Footer