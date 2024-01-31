import { Row, Col, Button , Card} from 'react-bootstrap';
import tutorone from '../../img/tutorone.png';
import aboutimg from '../../img/aboutimg.png';
import circlearrow from '../../img/circlearrow.png';
import rusflag from '../../img/rusflag.png';
import estflag from '../../img/estflag.png';
import engflag from '../../img/engflag.png';
import bookone from '../../img/bookone.png';
import courseImg from '../../img/course-img.png';
import workimg from '../../img/workimg.png';
import booktwo from '../../img/booktwo.png';
import sun from '../../img/sun.png';
import 'animate.css';
import './home.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// import Consultation from '../Consultation/Consultation';


const Home = () => {
    const navigate = useNavigate();

    const {t} = useTranslation();

    // const onClickLanguageChange = (e: any) => {
    //     const language = e.target.value;
    //     i18n.changeLanguage(language)
    // }
    const toConsultation = () => {
        navigate("/consultation")
      }
  return (
    //    Entire Home Section
    <div style={{width: "100%", overflowX: "hidden"}}>
       {/* hero section */}
        
        <div className='hero-container d-flex justify-content-center align-items-center' style={{backgroundColor: "#FBDC6E", }}> 
            <Row>
                <Col className='hero-col-1 col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                <div className='ps-5 pt-5 p5-5'>
                    <div style={{fontSize: "24px"}}>{t('Lets get acquainted!')}</div>
                    <h1>{t('I am Natalia Komarova,')}
                    {t('CEO and language')}{"\n" }
                    {t('instructor at Keelerõõmud')} {"\n" }
                    {t('Keeltekool OÜ')}</h1>
                    <div>
                     "{t('A good teacher is like a candle – it consumes itself to light')}{"\n"}
                     {t('the way for others')}" {"\n"}
                    <i>{t('Mustafa Kemal Ataturk')}</i>
                    </div>
                    <div className='' style={{display: "flex", marginTop: "15px"}}>
                    <Button className='her0-contact-btn' href='#aboutme'
                    style={{backgroundColor: "transparent", color: "#000000" , borderRadius: "50px", width: "120px", fontWeight: "bold", marginTop:"10px", marginRight:"20px"}}>
                    {t('About me')}
                    </Button> 
                    <Button className='her0-contact-btn' onClick={toConsultation} 
                    style={{backgroundColor: "#3F556B", borderRadius: "50px", width: "130px", marginTop:"10px"}}>
                    {t('consultation')}
                    </Button> 
                    </div>    
                 </div>
                 </Col>
                 <Col className='hero-img hero-col-2 col-12 col-sm-6 mt-md-5 d-flex justify-content-end'>
                 <div><img className='hero-img pt-md-5 me-md-5' src={tutorone} alt="Tutor"/></div>
                 </Col>
             </Row>
        </div>
        {/* about me  section */}
        <div id='aboutme'>
        <Row>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: ''}}>
            <div><img className='aboutimg' src={aboutimg} style={{height:"450px", width: "auto"}} alt="about me"/></div>
            </Col>
            <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='about-content'>
                    <div style={{display:"flex"}} > 
                        <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('About me')}</Button> </div>
                        <a className='ms-5 swinging-link' href="#Whoiteach" style={{ textDecoration: 'none' }}> {t('Who I teach')}<img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </a>
                    </div>
                    <div className='mt-3' style={{maxWidth:"500px"}}>
                        {t('I am a professional teacher of Estonian and English language. I have over 20 years of')} {"\n"}
                        {t('experience teaching in basic and high schools, and I have conducted language courses in')}  {"\n"} 
                        {t('both Estonian and English for adult')} 
                        <br />
                        <br />
                        {t('I love promoting joyful language learning, I emphasize collaborative student-teacher')} {"\n"}
                        {t('partnerships. As a guiding light, I inspire language skills development through active')} {"\n"}
                        {t('methods, modern materials, and digital technologies. Continuous assessment ensures a')}{"\n"}
                        {t('comprehensive grasp of knowledge')}
                    </div>
                    </div>
            </Col>
        </Row>
        </div>
        {/* Who I teach */}
       <div className= "who-content mb-5" id='Whoiteach'>
        <Row>
             <div style={{ display: 'flex', justifyContent: 'center'}} > 
                    <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('Who I teach')} </Button> </div>
                    <a className='ms-5 swinging-link' href="#howiwork" style={{ textDecoration: 'none' }}> {t('How I work')}<img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </a>
              </div>
                
                <div className='row justify-content-center'>
                    <div className='col-sm-3 col'>
                        <div className='mt-5 p-3 px-4' style={{backgroundColor:"#E2E5E9", width:"300px", marginLeft: "auto", marginRight: "auto"}}>
                            <div className="d-flex justify-content-end mb-4">
                                <img className='ms-3' src={rusflag} style={{height:"30px", width: "30px"}} alt="russian flag"/>
                                <img className='ms-3' src={estflag} style={{height:"30px", width: "30px"}} alt="estonian flag"/>
                            </div>
                            <p style={{height: "100px"}}> {t('I teach English to both')} <br /> {t('Russian and Estonian')}  <br /> {t('speakers')} </p>
                            <p> {t('Levels')}:<br />{t('A1, A2, B1, B2, and C1.')} </p>

                        </div >
                    </div>
                    <div className='col-sm-3 col'>
                        <div className='mt-5 p-3 px-4' style={{backgroundColor:"#FEF8E1", width:"300px", marginLeft: "auto", marginRight: "auto"}}>
                            <div className="d-flex justify-content-end mb-4">
                                <img className='ms-3' src={rusflag} style={{height:"30px", width: "30px"}} alt="russian flag"/>
                                <img className='ms-3' src={engflag} style={{height:"30px", width: "30px"}} alt="english flag"/>
                            </div>
                            <p style={{height: "100px"}}> {t('I teach Estonian as a')} <br /> {t('second language to both Russian')}  
                            <br /> {t('and English')} <br />
                            {t('speakers')} </p>
                            <p>{t('Levels')}: <br />{t('A1, A2, B1, and B2.')} </p>
                        </div>
                    </div>
                </div>
        </Row>
       </div>

     {/* work image */}
     <div id='howiwork'>
        <Row>
        <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='work-content' style={{maxWidth:"500px"}}>
                    <div style={{display:"flex"}} > 
                    <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('How I work')} </Button> </div>
                    <a className='ms-5 mb-3 swinging-link' href="#courses" style={{ textDecoration: 'none' }}> {t('Courses')} <img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </a>
                     </div>
                    <div className='mt-3'> {t('I work with groups of adults and school students, providing both')} 
                    {t('group and individual lessons. Classes can be held either in')} 
                    {t('person (at my home office in Narva or rented space) or online (via Zoom).')} 
                    <br />
                    <br />
                    {t('I assist school students in preparing for Estonian and English language state')} {"\n"}
                    {t('exams and organize training sessions based on clients preferences.')}
                    </div>
                 </div>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: ''}}>
            <div><img className='workimg' src={workimg} style={{height:"478px", width: "auto"}} alt="work pict"/></div>
            </Col>
           
        </Row>
        </div>


        {/* course section */}
        <div id='courses'>
           <div className='hero-service-section' style={{marginTop: ""}}>
            <Row>
                <Col className='col-12 col-sm-5 d-flex justify-content-center align-items-center'><img src={courseImg} alt="Tutor two" style={{width:"400px",height:""}}/> </Col>
                <Col className='col-12 col-sm-7 d-flex justify-content-center align-items-center'>
                <Row className='home-card'>
                    <Row className='mb-5' ><div><h2>
                    {t('Find Out Our Courses With KEELERÕÕMUD KEELTEKOOL.')}
                        </h2></div></Row>
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem' , backgroundColor:"#ECEEF0" }}>
                        <Card.Body>
                           
                            <div className="row">
                                <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={engflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                                </div>
                                <div className="col-md-4">
                                    <img src={booktwo} alt="Tutor two"/> 
                                </div>
                                <div className="col-md-8">
                                    <p>{t('ENGLISH FOR ADULTS')}</p>
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link'onClick={toConsultation} style={{cursor:'pointer'}}> {t('consultation')} <img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>  
                        </Card.Body>
                        </Card>  
                    </Col>       
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem', backgroundColor:"#FEF8E1" }}>
                        <Card.Body>
                            
                            <div className="row">
                            <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={engflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                                </div>
                                <div className="col-md-4">
                                    <img src={bookone} alt="Tutor two"/> 
                                </div>
                                <div className="col-md-8">
                                    <p>{t('ENGLISH FOR SCHOOL STUDENTS')}</p>
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('consultation')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem', backgroundColor:"#FEF8E1" }}>
                        <Card.Body>
                            <div className="row">
                            <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={estflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                                </div>
                                <div className="col-md-4">
                                    <img src={bookone} alt="Tutor two"/>
                                </div>
                                <div className="col-md-8">
                                    <p>{t('ESTONIAN FOR ADULTS')}</p> 
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('consultation')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem' , backgroundColor:"#ECEEF0" }}>
                        <Card.Body>
                            <div className="row">
                            <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={estflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                             </div>
                                <div className="col-md-4">
                                    <img src={booktwo} alt="Tutor two"/>
                                </div>
                                <div className="col-md-8">
                                    <p>{t('ESTONIAN FOR SCHOOL STUDENTS')}</p> 
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('consultation')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                </Col> 
            </Row>
           </div> 
           <div>
           <div className='d-flex justify-content-center align-items-center mt-5'>
           <img 
           src={sun} style={{height:"70px", width: "70px"}} 
           alt="sun"/> 
          </div>
          <div  className='text-center mt-5'>
                    <div className='flex '>
             <div>
           {t('If you are interested in learning, you can please book a consultation with me by clicking this.')}
           </div>
           <div className='swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('consultation')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
             </div>
            </div>
    
             {t('to be able to assess your skills and for proper mentorship.')}
             <br />
             {t('I welcome all enthusiasts, regardless of age, to joyfully learn foreign languages, explore their beauty,')}
             <br />
            {t('conquer challenges, and achieve their set goals.')} 
          </div> 
          </div>
         <div className='d-flex justify-content-center align-item-center mt-5'>
        {/* <Link to="/Consultation"> */}
         <Button className='her0-consulation-btn ' onClick={toConsultation}
         style={{backgroundColor: "#FCE79C", color: "#3F556B" , borderRadius: "50px", width: "200px", marginTop:"10px"}}>
         {t('consultation')}
         </Button> 
         {/* </Link> */}
       </div>
        </div>
    </div>
  )
}

export default Home