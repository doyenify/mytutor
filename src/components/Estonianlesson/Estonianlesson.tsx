import { Row, Col, Button } from 'react-bootstrap';
import tutorone from '../../img/tutorone.png';
import Videocourse from '../Videocourse/Videocourse';
import "./estonianlesson.css"


const Estonianlesson = () => {
  return (
    <div style={{width: "100%", overflowX: "hidden"}}>
       {/* hero section */}
      <div className='hero-container' style={{backgroundColor: "#CBB9B2"}}  > 
            <Row>
                <Col className='col-12 col-sm-6 mt-5 d-flex justify-content-center align-items-center'>
                 <div><img src={tutorone} className="lessonHero" alt="Tutor"/></div>
                 </Col>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                 <div style={{padding: "20px"}}>
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
     {/* beginner courses */}
     <div className="container">
        <div>
                  <h3 className='ms-5 mt-5'>Beginner</h3>
                    <Row>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                    </Row>
        </div>
          {/* Intermediate courses */}
          <div>
                  <h3 className='ms-5 mt-5'>intermediate </h3>
                    <Row>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                    </Row>
        </div>
          {/* Advanced courses */}
          <div>
                  <h3 className='ms-5 mt-5'>Advanced</h3>
                    <Row>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                        <Col className='col-12 col-sm-4'><Videocourse/></Col>
                    </Row>
        </div>
     </div>
     
    </div>
  )
}

export default Estonianlesson