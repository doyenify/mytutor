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
        
        <div className='hero-container' style={{backgroundColor: "#FBDC6E", height:"85vh" }}> 
            <Row>
                <Col className='hero-col-1 col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                 <div>
                   <div style={{fontSize: "24px"}}>{t('Lets get acquainted!')}</div>
                   <h1>{t('I am Natalia Komarova,')} <br /> 
                   {t('CEO and language')}  <br /> 
                   {t('instructor at Keelerõõmud')}  <br /> 
                   {t('Keeltekool OÜ')}</h1>
                   <div>{t('A GOOD TEACHER IS LIKE A CANDLE – IT CONSUMES ITSELF TO LIGHT')} <br /> 
                   {t('THE WAY FOR OTHERS Mustafa Kemal Ataturk')}</div>
                   <div className='' style={{display: "flex", marginTop: "15px"}}>
                 <Button className='her0-contact-btn' 
                  style={{backgroundColor: "transparent", color: "#000000" , borderRadius: "50px", width: "120px", fontWeight: "bold", marginTop:"10px", marginRight:"20px"}}>
                  {t('About me')}
                 </Button> 
                 <Button className='her0-contact-btn' 
                  style={{backgroundColor: "#3F556B", borderRadius: "50px", width: "130px", marginTop:"10px"}}>
                  {t('Contact')}
                 </Button> 
                 </div>    
                 </div>
                 </Col>
                 <Col className=' col-12 col-sm-6 mt-5'>
                 <div><img className='hero-img' src={tutorone} style={{height:"478px", width: "auto"}} alt="Tutor"/></div>
                 </Col>
             </Row>
        </div>
        {/* about me  section */}
        <div>
        <Row>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div><img className='aboutimg' src={aboutimg} style={{height:"478px", width: "auto"}} alt="about me"/></div>
            </Col>
            <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>
                    <div style={{display:"flex"}} > 
                    <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('About me')}</Button> </div>
                    <div className='ms-5'> {t('Who I teach')}<img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </div>
                     </div>
                    <div className='mt-3'>
                       {t('I am a professional teacher of Estonian and English language. I have over 20 years of')}
                       {t('experience teaching in basic and high schools, and I have conducted language courses in')}
                       {t('both Estonian and English for adult')} 
                        <br />
                        <br />
                        {t('I love promoting joyful language learning, I emphasize collaborative student-teacher')} 
                        {t('partnerships. As a guiding light, I inspire language skills development through active')} 
                        {t('methods, modern materials, and digital technologies. Continuous assessment ensures a')}
                        {t('comprehensive grasp of knowledge')}
                    </div>
                    </div>
            </Col>
        </Row>
        </div>
        {/* Who I teach */}
       <div className= "mb-5">
             <div style={{ display: 'flex', justifyContent: 'center'}} > 
                    <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('Who I teach')} </Button> </div>
                    <div className='ms-5'> {t('How I work')}<img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </div>
              </div>
                
                <div className='row justify-content-center'>
                    <div className='col-sm-3 col col-md-5'>
                        <div className='mt-5 p-3 px-4' style={{backgroundColor:"#E2E5E9", width:"300px", marginLeft: "auto", marginRight: "auto"}}>
                            <div className="d-flex justify-content-end mb-4">
                                <img className='ms-3' src={rusflag} style={{height:"30px", width: "30px"}} alt="russian flag"/>
                                <img className='ms-3' src={estflag} style={{height:"30px", width: "30px"}} alt="estonian flag"/>
                            </div>
                            <p style={{height: "100px"}}> {t('I teach English to both')} <br /> {t('Russian and Estonian')}  <br /> {t('speakers')} </p>
                            <p> {t('Levels')}:<br />{t('A1, A2, B1, B2, and C1.')} </p>

                        </div >
                    </div>
                    <div className='col-sm-3 col col-md-5'>
                        <div className='mt-5 p-3 px-4' style={{backgroundColor:"#FEF8E1", width:"300px", marginLeft: "auto", marginRight: "auto"}}>
                            <div className="d-flex justify-content-end mb-4">
                                <img className='ms-3' src={rusflag} style={{height:"30px", width: "30px"}} alt="russian flag"/>
                                <img className='ms-3' src={estflag} style={{height:"30px", width: "30px"}} alt="estonian flag"/>
                            </div>
                            <p style={{height: "100px"}}> {t('I teach Estonian as a')} <br /> {t('second language to both Russian')}  
                            <br /> {t('and English')} <br />
                            {t('speakers')} </p>
                            <p>{t('Levels')}: <br />{t('A1, A2, B1, and B2.')} </p>
                        </div>
                    </div>
                </div>
       </div>

     {/* work image */}
     <div>
        <Row>
        <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>
                    <div style={{display:"flex"}} > 
                    <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('How I work')} </Button> </div>
                    <div className='ms-5'> {t('Courses')} <img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </div>
                     </div>
                    <div className='mt-3'> {t('I work with groups of adults and school students, providing both')} <br />
                    {t('group and individual lessons. Classes can be held either in')} <br />
                    {t('person (at my home office in Narva or rented space) or online (via Zoom).')} <br />
                    {t('I assist school students in preparing for Estonian and English language state')} <br />
                    {t('exams and organize training sessions based on clients preferences.')}
                    </div>
                    </div>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div><img className='aboutimg img-fluid' src={workimg} style={{height:"478px", width: "auto"}} alt="about me"/></div>
            </Col>
           
        </Row>
        </div>


        {/* service section */}
        <div >
           <div className='hero-service-section mt-5' style={{marginTop: "20px"}}>
            <Row>
                <Col className='col-12 col-sm-5 d-flex justify-content-center align-items-center'><img src={courseImg} alt="Tutor two" style={{width:"300px",height:""}}/> </Col>
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
                                 <div className='d-flex justify-content-end mt-3'> {t('exams and organize training sessions based on clients preferences.')}consultation<img className='ms-3'
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
                                 <div className='d-flex justify-content-end mt-3'>consultation<img className='ms-3'
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
                                 <div className='d-flex justify-content-end mt-3'>consultation<img className='ms-3'
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
                                 <div className='d-flex justify-content-end mt-3'>consultation<img className='ms-3'
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
           <p>If you are interested in learning, you can please book a consultation with me by clicking this.
             (A consultation link), <br />
              to be able to assess your skills and for proper mentorship.</p>
          I welcome all enthusiasts, regardless of age, to joyfully learn foreign languages, explore their beauty, 
            <br />conquer challenges, and achieve their set goals.
           
          </div> 
          </div>
     
        </div>
    </div>
  )
}

export default Home