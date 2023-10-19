import { Row, Col, Button } from 'react-bootstrap';
import tutorone from '../../img/tutorone.png';

const About = () => {
  return (
    <div>
      {/* hero section */}
      <div className='hero-container' style={{backgroundColor: "#CBB9B2" , height: "100vh" }}> 
            <Row>
                <Col className='col-12 col-sm-6 mt-5 d-flex justify-content-center align-items-center'>
                 <div><img src={tutorone} alt="Tutor"/></div>
                 </Col>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                 <div>
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
                <Row><h1 className='ms-5 mt-4'>Overview</h1></Row>
                <Col className='col-12 col-sm-6 mt-3 ms-5'> 
          
                      <b>About Me:</b>
                      <br />
                      <span></span>
                      I am originally from Estonia and hold a degree in <br /> [Your Education Background or Degree].
                      I have [Number of years] <br /> years of experience teaching Estonian language to both native <br />speakers 
                      and non-native speakers. I have worked in various <br /> educational institutions, 
                      helping students acquire proficiency <br /> in Estonian at different levels.
                      <br />

                      <b> My Teaching Style: </b> 
                      <br />

                          My teaching style is dynamic, interactive, and tailored to   <br />
                          the individual needs of my students. I strive to create a positive    <br />
                          learning environment
                          where students feel confident and    <br /> motivated. I employ diverse teaching methods,
                          such as role- <br />plays,    dialogues, listening and reading exercises, and    <br /> interactive activities, 
                          to help students develop their oral and    <br /> written skills.
                          <br />
                          <b> My Goal:</b> 
                          <br />
                          
                          My main goal is to assist you in achieving fluent <br />communication skills in Estonian 
                          and introduce you to Estonian <br />culture and customs. I firmly believe that the language
                          learning <br /> process should be fun and enjoyable, and I aim to create an  <br />inspiring learning
                          environment where you can feel motivated <br />and successful.scelerisque imperdiet. 
                          Metus a augue <br /> aliquam dapibus.
                    </Col>
                    <Col className='col-12 col-sm-4 mt-5 d-flex justify-content-center align-items-center'>
                    <div><img src={tutorone}  alt="Tutor"/></div>
                    </Col>
              </Row>
         </div>
      </div>
    )
  }

export default About