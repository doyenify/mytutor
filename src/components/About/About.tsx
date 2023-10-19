import { Row, Col, Button } from 'react-bootstrap';
import tutorone from '../../img/tutorone.png';
import "./about.css"

const About = () => {
  return (
    <div style={{width: "100%", overflowX: "hidden"}}>
      {/* hero section */}
      <div className='hero-container' style={{backgroundColor: "#CBB9B2"}}> 
            <Row>
                <Col className='col-12 col-sm-6 mt-5 d-flex justify-content-center align-items-center'>
                 <div><img src={tutorone} className="abouthero" alt="Tutor"/></div>
                 </Col>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                 <div className="aboutherotext">
                   <h1>Learning Estonian <br /> With Us is Fun <br /> And Easy</h1>
                   <h5>We are a good starting point for those who  want to <br /> 
                       improve its Estonian language to fluency </h5>
                 <Button className='her0-contact-btn' style={{backgroundColor: "#3F556B"}} >
                  Get Started
                 </Button>     
                 </div>
                 </Col>  
             </Row>
        </div>
        {/* about section */}
        <div>
              <Row>
                <Row style={{marginTop: "75px"}}><h1 className='ms-5 mt-4'>Overview</h1></Row>
                <Col className='col-12 col-sm-6 mt-3 ' style={{paddingLeft: "55px", paddingRight: "55px"}}> 
          
                      <h5 style={{fontWeight: "bold", marginTop: "20px"}}><div style={{backgroundColor: "#CBB9B2", height: "20px", width: "20px", borderRadius: "20px", display: "inline-block", marginRight: "15px"}}></div><span style={{position: "relative", top: "-2px"}}>About Me:</span></h5>
                      <div className="row">
                        <div className="col-md-9">
                          <p>I am originally from Estonia and hold a degree in [Your Education Background or Degree].
                              I have [Number of years] years of experience teaching Estonian language to both native speakers 
                              and non-native speakers. I have worked in various educational institutions, 
                              helping students acquire proficiency in Estonian at different levels.
                            </p>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                      </div>
                      
                      <h5 style={{fontWeight: "bold", marginTop: "20px"}}><div style={{backgroundColor: "#CBB9B2", height: "20px", width: "20px", borderRadius: "20px", display: "inline-block", marginRight: "15px"}}></div><span style={{position: "relative", top: "-2px"}}>My Teaching Style:</span></h5>
                      <div className="row">
                        <div className="col-md-9">
                          <p>My teaching style is dynamic, interactive, and tailored to 
                              the individual needs of my students. I strive to create a positive 
                              learning environment where students feel confident and  motivated. I employ diverse teaching methods,
                              such as role- plays, dialogues, listening and reading exercises, and  interactive activities, 
                              to help students develop their oral and written skills.
                            </p>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                      </div>


                      
                      <h5 style={{fontWeight: "bold", marginTop: "20px"}}><div style={{backgroundColor: "#CBB9B2", height: "20px", width: "20px", borderRadius: "20px", display: "inline-block", marginRight: "15px"}}></div><span style={{position: "relative", top: "-2px"}}>My Goal:</span></h5>
                      <div className="row">
                        <div className="col-md-9">
                          <p>My main goal is to assist you in achieving fluent communication skills in Estonian 
                              and introduce you to Estonian culture and customs. I firmly believe that the language
                              learning process should be fun and enjoyable, and I aim to create an inspiring learning
                              environment where you can feel motivated and successful.scelerisque imperdiet. 
                              Metus a augue aliquam dapibus.
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
         </div>
      </div>
    )
  }

export default About