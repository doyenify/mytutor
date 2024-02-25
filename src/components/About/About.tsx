import {useState} from "react"
import { Row, Col } from 'react-bootstrap';
import tutorone from '../../img/tutorone.png';
import myTutor from '../../img/myTutor.png';
import individualLe from '../../img/individualLe.png';
import Fcompanies from '../../img/Fcompanies.png';
import LearningChi from '../../img/LearningChi.png';
import "./about.css"
import { useTranslation } from 'react-i18next';

const About = () => {
  const [about, setAbout] =  useState(true);
  const [individualL, setIndividualL] =  useState(false);
  const [companies, setCompanies] =  useState(false);
  const [learningC, setLearningC] =  useState(false);

  const {t} = useTranslation();

  const showAbout = () => {
    setAbout(true)
    setIndividualL(false)
    setCompanies(false)
    setLearningC(false)
  }

  const showIndividualL = () => {
    setAbout(false)
    setIndividualL(true)
    setCompanies(false)
    setLearningC(false)
  }

  const showCompanies = () => {
    setAbout(false)
    setIndividualL(false)
    setCompanies(true)
    setLearningC(false)
  }

  const showLearningC = () => {
    setAbout(false)
    setIndividualL(false)
    setCompanies(false)
    setLearningC(true)
  }
  

  return (
    <div style={{width: "100%", overflowX: "hidden"}}>
      {/* hero section */}
      <div className='hero-container' style={{backgroundColor: "#CBB9B2"}}> 
            <Row>
                <Col className='col-12 col-sm-6 mt-5 d-flex justify-content-center align-items-center'>
                 <div className="firstabout">
                    <img src={myTutor}  className="abouttutor" alt="Tutor"/>
                    <div className="row">
                      <div className="col-md-10">
                        <h5>{t('Language is the mirror of society; it reflects the culture and values of a community')}.</h5>
                      </div>
                      <div className="col-md-2">
                        
                      </div>
                    </div>
                    
                 </div>
                 </Col>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                 <div className="aboutherotext">
                   <h4 className={about ? "activeabout": "inactiveabout"} onClick={showAbout}>{t('About')}</h4>
                   <h4 className={individualL ? "activeabout": "inactiveabout"} onClick={showIndividualL}>{t('Individual Learning')}</h4>
                   <h4 className={companies ? "activeabout": "inactiveabout"} onClick={showCompanies}>{t('For Companies')}</h4>
                   <h4 className={learningC ? "activeabout": "inactiveabout"} onClick={showLearningC}>{t('Learning for children')}</h4>
                 </div>
                 </Col>  
             </Row>
        </div>
        {/* about section */}
        <div>
           {about ? (<>
            <Row>
                <Row style={{marginTop: "75px"}}><h1 className='ms-5 mt-4'>{t('Overview')}</h1></Row>
                <Col className='col-12 col-sm-6 mt-3 ' style={{paddingLeft: "55px", paddingRight: "55px"}}> 
          
                      <h5 style={{fontWeight: "bold", marginTop: "20px"}}><div style={{backgroundColor: "#CBB9B2", height: "20px", width: "20px", borderRadius: "20px", display: "inline-block", marginRight: "15px"}}></div><span style={{position: "relative", top: "-2px"}}>{t('About Me')}:</span></h5>
                      <div className="row">
                        <div className="col-md-9">
                          <p>{t('I am originally from Estonia and hold a degree in [Your Education Background or Degree]')}.
                              {t('I have [Number of years] years of experience teaching Estonian language to both native speakers')} 
                              {t('and non-native speakers. I have worked in various educational institutions')}, 
                              {t('helping students acquire proficiency in Estonian at different levels')}.
                            </p>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                      </div>
                      
                      <h5 style={{fontWeight: "bold", marginTop: "20px"}}><div style={{backgroundColor: "#CBB9B2", height: "20px", width: "20px", borderRadius: "20px", display: "inline-block", marginRight: "15px"}}></div><span style={{position: "relative", top: "-2px"}}>{t('My Teaching Style')}:</span></h5>
                      <div className="row">
                        <div className="col-md-9">
                          <p>{t('My teaching style is dynamic, interactive, and tailored to')} 
                              {t('the individual needs of my students. I strive to create a positive')} 
                              {t('learning environment where students feel confident and  motivated. I employ diverse teaching methods')},
                              {t('such as role- plays, dialogues, listening and reading exercises, and  interactive activities')}, 
                              {t('to help students develop their oral and written skills')}.
                            </p>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                      </div>
                      <h5 style={{fontWeight: "bold", marginTop: "20px"}}><div style={{backgroundColor: "#CBB9B2", height: "20px", width: "20px", borderRadius: "20px", display: "inline-block", marginRight: "15px"}}></div><span style={{position: "relative", top: "-2px"}}>{t('My Goal')}:</span></h5>
                      <div className="row">
                        <div className="col-md-9">
                          <p>{t('My main goal is to assist you in achieving fluent communication skills in Estonian')} 
                              {t('and introduce you to Estonian culture and customs. I firmly believe that the language')}
                              {t('learning process should be fun and enjoyable, and I aim to create an inspiring learning')}
                              {t('environment where you can feel motivated and successful.scelerisque imperdiet')}. 
                              {t('Metus a augue aliquam dapibus')}.
                            </p>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                      </div>
                    </Col>
                    <Col className='col-12 col-sm-4 mt-5 d-flex justify-content-center align-items-center'>
                    <div><img src={tutorone} className="abouttutor" alt="Tutor"/></div>
                    </Col>
              </Row>
           </>):(<></>)}

           {individualL ? (<>
              <div className="container">
                  <div className="row" style={{marginTop: "100px", marginBottom: "100px"}}>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-9">
                          <img src={individualLe} alt="individualLe" style={{width: "100%", marginBottom: "20px"}} />
                        </div>
                        <div className="col-md-2">
                          
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                        <h4>{t('FOR INDIVIDUALS')}</h4>
                        <p style={{marginTop: "20px"}}>
                          {t("Individual learning refers to the process of acquiring knowledge, skills, or understanding on one's own, independent of a formal classroom setting or direct instruction from a teacher. It emphasizes self-directed learning, where individuals take responsibility for their own education and pursue learning goals according to their interests, pace, and preferred learning methods.")}
                        </p>

                        <p style={{marginTop: "20px"}}>
                          {t("Individual learning can take various forms, such as reading books, conducting research, participating in online courses, watching educational videos, engaging in practical hands-on activities, or seeking mentorship.")}
                        </p>

                        <p style={{marginTop: "20px"}}>
                          {t("It offers flexibility, autonomy, and the opportunity for personalized learning experiences tailored to an individual's unique needs and preferences. Individual learning can occur throughout one's life and is often complemented by collaborative learning and social interactions with peers, mentors, or experts in the field")}
                        </p>
                    </div>
                  </div>
              </div>
           </>):(<></>)}

           {companies ? (<>
            <div className="container">
                  <div className="row" style={{marginTop: "100px", marginBottom: "100px"}}>
                    <div className="col-md-6">
                        <h4>{t('FOR COMPANIES')}</h4>
                        <p style={{marginTop: "20px"}}>
                          {t("Individual learning refers to the process of acquiring knowledge, skills, or understanding on one's own, independent of a formal classroom setting or direct instruction from a teacher. It emphasizes self-directed learning, where individuals take responsibility for their own education and pursue learning goals according to their interests, pace, and preferred learning methods.")}
                        </p>

                        <p style={{marginTop: "20px"}}>
                          {t("Individual learning can take various forms, such as reading books, conducting research, participating in online courses, watching educational videos, engaging in practical hands-on activities, or seeking mentorship.")}
                        </p>

                        <p style={{marginTop: "20px"}}>
                          {t("It offers flexibility, autonomy, and the opportunity for personalized learning experiences tailored to an individual's unique needs and preferences. Individual learning can occur throughout one's life and is often complemented by collaborative learning and social interactions with peers, mentors, or experts in the field")}
                        </p>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-9">
                          <img src={Fcompanies} alt="Fcompanies" style={{width: "100%", marginBottom: "20px"}} />
                        </div>
                        <div className="col-md-2">
                          
                        </div>
                        
                      </div>
                    </div>
                    
                  </div>
              </div>
           </>):(<></>)}

           {learningC ? (<>
            <div className="container">
                  <div className="row" style={{marginTop: "100px", marginBottom: "100px"}}>
                    <div className="col-md-6">
                        <h4>{t('LEARNING FOR CHILDREN')}</h4>
                        <p style={{marginTop: "20px"}}>
                          {t("Individual learning refers to the process of acquiring knowledge, skills, or understanding on one's own, independent of a formal classroom setting or direct instruction from a teacher. It emphasizes self-directed learning, where individuals take responsibility for their own education and pursue learning goals according to their interests, pace, and preferred learning methods.")}
                        </p>

                        <p style={{marginTop: "20px"}}>
                          {t("Individual learning can take various forms, such as reading books, conducting research, participating in online courses, watching educational videos, engaging in practical hands-on activities, or seeking mentorship.")}
                        </p>

                        <p style={{marginTop: "20px"}}>
                          {t("It offers flexibility, autonomy, and the opportunity for personalized learning experiences tailored to an individual's unique needs and preferences. Individual learning can occur throughout one's life and is often complemented by collaborative learning and social interactions with peers, mentors, or experts in the field")}
                        </p>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-9">
                          <img src={LearningChi} alt="LearningChi" style={{width: "100%", marginBottom: "20px"}} />
                        </div>
                        <div className="col-md-2">
                          
                        </div>
                        
                      </div>
                    </div>
                    
                  </div>
              </div>
           </>):(<></>)}
              
         </div>
      </div>
    )
  }

export default About