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

const home = () => {
  return (
    //    Entire Home Section
    <div>
       {/* hero section */}
        <div className='hero-container' style={{backgroundColor: "#CBB9B2" , height: "100vh" }}> 
            <Row>
                <Col className='hero-col-1 col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                 <div>
                   <h1>Learning Estonian <br /> With Us is Fun <br /> And Easy</h1>
                   <h5>We are a good starting point for those who  want to <br /> 
                       improve its Estonian language to fluency </h5>
                 <Button className='her0-contact-btn' 
                  style={{backgroundColor: "#3F556B", borderRadius: "50px", width: "150px", marginTop:"10px"}}>
                  Get Started
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
            <div className='text-center mt-5'>
                <h5>myTutor is your one-stop shop for all your Estonian language needs. <br />
                    From lessons to translation and any other Estonian language services you might require,<br />
                    we will help you to communicate in Estonian
                </h5>
            <div className='mt-5 mb-5'>
                <Row>
                <Col><img src={online} alt="Online Learning"/>  <h5>Online Learning</h5></Col>
                <Col><img src={lifetime} alt="Lifetime Access"/>  <h5>Lifetime Accesss</h5></Col>
                <Col><img src={activate} alt="Activate learning"/>  <h5>Activate Learning</h5></Col>
                </Row>
            </div>
           </div>
        </div>
        {/* service section */}
        <div>
           <div className='hero-service-section' style={{backgroundColor: "#CBB9B2" , height: "100vh" }}>
            <Row>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'><img src={tutortwo} alt="Tutor two" style={{width:"500px",height:""}}/> </Col>
                <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
                <Row className='home-card'>
                    <Row className='mb-5' ><div><h2>Find Out Why You Should Learn With <br /> myTutor</h2></div></Row>
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>  <img src={bookone} alt="Tutor two"/> <br /> Language  Tutoring</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card .
                            </Card.Text>
                        </Card.Body>
                        </Card>  
                    </Col>       
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>  <img src={bookone} alt="Tutor two"/> <br /> Interpretation Service</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card .
                            </Card.Text>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>  <img src={booktwo} alt="Tutor two"/> <br /> Translation Service</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card .
                            </Card.Text>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>  <img src={booktwo} alt="Tutor two"/> <br /> Language Assessment</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card .
                            </Card.Text>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                </Col> 
            </Row>
           </div> 
           {/* Courses Section */}
           <div className='home-video'> 
               <h3 className='text-center mt-5'>Check Our Courses Out</h3>
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

export default home