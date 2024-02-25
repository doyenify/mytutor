import React from 'react'
// import { useTranslation } from 'react-i18next';
import { Row, Col, Button} from 'react-bootstrap';
import coach from '../../img/coach.jpg';

const QuaTeacher = () => {
    // const {t} = useTranslation();

  return (
    <>
    <h2  className="d-flex align-items-center justify-content-center" style={{marginTop:"100px"}}> Õpetajate kvaliteedi tagamine.</h2>
    <Row className="" style={{ paddingTop: "20px" }}>
    <Col className="d-flex align-items-center justify-content-center">
      <div>
        <img className='coach-img' src={coach} width="auto" height="400px" alt="coach" />
      </div>
    </Col>
    <Col className="d-flex flex-column align-items-center justify-content-center">

  <div className="text-center mb-4"  >
    <div className='mb-3' style={{fontSize: "24px"}}> Natalia Komarova CV (elulookirjeldus)</div>
    <a href="Natalia Komarova Est.pdf" download="Natalia Komarova Est.pdf">
      <Button style={{backgroundColor:"#3F556B"}}>CV allalaadimine</Button>
    </a>
  </div>
  <div className="text-center" >
   <div className='mb-3' style={{fontSize: "24px"}}> Natalia Komarova Curriculum Vitae</div>
    <a href="Natalia Komarova Eng.pdf" download="Natalia Komarova Eng.pdf">
      <Button style={{backgroundColor:"#3F556B"}}>Download CV</Button>
    </a>
  </div>
</Col>
  </Row>
    </>
  )
}

export default QuaTeacher