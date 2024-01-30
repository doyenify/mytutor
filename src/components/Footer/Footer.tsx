import {Facebook, Instagram, Linkedin, Twitter,Youtube} from 'react-bootstrap-icons';
import kelelogo from '../../img/kelelogo.png';
import doyen1 from '../../img/doyen1.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();

  return (
    <div  className='footer-container text-center mt-5 d-flex flex-column align-items-center justify-content-center' 
          style={{backgroundColor: "#FEF8E1" , height: "300px" }}
    >
    
    <img className='mb-3' src={kelelogo} style={{height:"", width: ""}} alt="russian flag"/>
     
       <div className='footer-writeup' style={{color: "#050A27"}}>
            <p> <b> {t('A GOOD TEACHER IS LIKE A CANDLE – IT CONSUMES ITSELF TO LIGHT')} <br />
            {t('THE WAY FOR OTHERS Mustafa Kemal Ataturk')} 
                   {/* {t("and achieve your language goals")}.  */}
            </b> </p>
        </div>
        <div>
        <a href='https://www.facebook.com' className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Facebook className="footer-link" /> </a>
        <a  href="https://www.linkedin.com" className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Linkedin className="footer-link" /> </a>
        <a  href="https://twitter.com"className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Twitter className="footer-link" /> </a>
        <a href="https://www.instagram.com" className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><Instagram className="footer-link" /> </a>
        <a href={window.location.href} className="mx-3" style={{color: "#050A27", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Youtube className="footer-link" /> </a>
        </div>
        <div className='mt-5'>{t('developed by')} {'\n'} <img src={doyen1} width="80px" alt="auto" /> </div>
    </div>
  )
}

export default Footer