import { Row, Col, Button , Card} from 'react-bootstrap';
import tutorone from '../../img/tutorone.png';
import tutortwo from '../../img/tutortwo.png';
import online from '../../img/online.png';
import lifetime from '../../img/lifetime.png';
import activate from '../../img/activate.png';
import bookone from '../../img/bookone.png';
import booktwo from '../../img/booktwo.png';
import Videocourse from '../Videocourse/Videocourse';
import './home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const {t} = useTranslation();

    // const onClickLanguageChange = (e: any) => {
    //     const language = e.target.value;
    //     i18n.changeLanguage(language)
    // }
  return (
    //    Entire Home Section
    <div style={{width: "100%", overflowX: "hidden"}}>
       {/* hero section */}
        
        <div className='hero-container' style={{backgroundColor: "#CBB9B2" }}> 
            <Row>
                <Col className='hero-col-1 col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                 <div>
                   <h1>{t('Learning Estonian')} <br /> {t('With Us is Fun')} <br /> {t('And Easy')}</h1>
                   <h5>{t('We are a good starting point for those who  want to')} <br /> 
                   {t('improve its Estonian language to fluency')} </h5>
                 <Button className='her0-contact-btn' 
                  style={{backgroundColor: "#3F556B", borderRadius: "50px", width: "150px", marginTop:"10px"}}>
                  {t('Get Started')}
                 </Button>     
                 </div>
                 </Col>
                 <Col className=' col-12 col-sm-6 mt-5'>
                 <div><img className='hero-img' src={tutorone} alt="Tutor"/></div>
                 </Col>
             </Row>
        </div>
        {/* Mytutor section */}
        <div>
        {/* <select onChange={onClickLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select> */}
        {/* <h1>{t('Learning Estonian')}</h1> */}
            <div className='text-center mt-5'>
                <h5>{t('myTutor is your one-stop shop for all your Estonian language needs')}. <br />
                    {t('From lessons to translation and any other Estonian language services you might require')},<br />
                    {t('we will help you to communicate in Estonian')}
                </h5>
            <div className='mt-5 mb-5'>
                <Row>
                <Col><img src={online} alt="Online Learning"/>  <h5>{t('Online Learning')}</h5></Col>
                <Col><img src={lifetime} alt="Lifetime Access"/>  <h5>{t('Lifetime Access')}</h5></Col>
                <Col><img src={activate} alt="Activate learning"/>  <h5>{t('Activate Learning')}</h5></Col>
                </Row>
            </div>
           </div>
        </div>
        {/* service section */}
        <div>
           <div className='hero-service-section' style={{backgroundColor: "#CBB9B2"}}>
            <Row>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'><img src={tutortwo} alt="Tutor two" style={{width:"500px",height:""}}/> </Col>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                <Row className='home-card'>
                    <Row className='mb-5' ><div><h2>{t('Find Out Why You Should Learn With')} <br /> {t('myTutor')}</h2></div></Row>
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                           
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={bookone} alt="Tutor two"/> 
                                </div>
                                <div className="col-md-8">
                                    <h5>{t('Language  Tutoring')}</h5>
                                    <p>{t('Some quick example text to build on the card')} .</p>
                                    
                                </div>
                            </div>
                            
                        </Card.Body>
                        </Card>  
                    </Col>       
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={bookone} alt="Tutor two"/> 
                                </div>
                                <div className="col-md-8">
                                    <h5>{t('Interpretation Service')}</h5>
                                    <p>{t('Some quick example text to build on the card')} .</p>
                                    
                                </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={booktwo} alt="Tutor two"/>
                                </div>
                                <div className="col-md-8">
                                    <h5>{t('Translation Service')}</h5>
                                    <p>{t('Some quick example text to build on the card')} .</p>
                                    
                                </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={booktwo} alt="Tutor two"/>
                                </div>
                                <div className="col-md-8">
                                    <h5>{t('Language Assessment')}</h5>
                                    <p>{t('Some quick example text to build on the card')} .</p>
                                    
                                </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                </Col> 
            </Row>
           </div> 
           {/* Courses Section */}
           <div className="container coursessection"  >
            <div className='home-video'> 
                <h3 className='text-center mt-5'>{t('Check Our Courses Out')}</h3>
                <div style={{marginTop: "35px"}}>
                    <Row>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                    </Row>
                </div>
            </div>
           </div>
           
        </div>
    </div>
  )
}

export default Home