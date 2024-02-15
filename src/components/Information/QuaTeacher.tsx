import React from 'react'
// import { useTranslation } from 'react-i18next';
import { Row, Col, Button} from 'react-bootstrap';
import coach from '../../img/coach.jpg';

const QuaTeacher = () => {
    // const {t} = useTranslation();

  return (
    <>
    <Row className="" style={{ paddingTop: "100px" }}>
    <Col className="d-flex align-items-center justify-content-center">
      <div>
        <img className='coach-img' src={coach} width="auto" height="500px" alt="coach" />
      </div>
    </Col>
    <Col className="d-flex flex-column align-items-center justify-content-center">
  <div className="text-center mb-4"  >
    <div className='mb-3'>Here is link to my CV in Estonian</div>
    <a href="Natalia Komarova Est.pdf" download="Natalia Komarova Est.pdf">
      <Button style={{backgroundColor:"#3F556B"}}>Download  CV</Button>
    </a>
  </div>
  <div className="text-center" >
   <div className='mb-3'>Here is link to my CV in English</div>
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