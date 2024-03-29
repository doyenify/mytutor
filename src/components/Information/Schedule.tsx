import React from 'react'
import { useTranslation } from 'react-i18next';
import { Row, Col} from 'react-bootstrap';
import coach from '../../img/coach.jpg';
import circlearrow from '../../img/circlearrow.png';
// import './home.css';

import { useNavigate } from 'react-router-dom';


const Schedule = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const toConsultation = () => {
      navigate("/consultation")
    }
  return (
    <>
    <div> {t('English For Adult')}</div>
    <div> {t('English For Adult')}</div>
    <div> {t('English For Adult')}</div>
    <Row className="" style={{ paddingTop: "50px" }}>
    <Col className="d-flex align-items-center justify-content-center">
      <div>
        <img className='coach-img ' src={coach} width="auto" height="500px" alt="coach" />
      </div>
    </Col>
    <Col className=" d-flex align-items-center justify-content-center p-4">
  <div className="text-center">
    <strong className="display-7 mb-3" style={{fontSize:"32px"}}>
      {t('Lehekülg ei ole veel saadaval. Aga Natalia on;')}
    </strong>
    <br />
    {t('Natalia on direktor, kes kohtub teiega hea meelega ja arutab teie õppimisvajadusi.')} <br />
    {t('Saate saata meile e-kirja läbi')} <br />
     <span style={{ textDecoration: 'underline', color: 'blue' }}>
      {t('keeleroomud.keeltekool@gmail.com.')}
    </span>
    {/* click here to make consulation  */}
    <div className='d-flex align-items-center justify-content-center mt-3 swinging-link'onClick={toConsultation} style={{cursor:'pointer'}}> {t('consultation')} <img className='ms-3'
     src={circlearrow} style={{height:"30px", width: "30px"}} 
     alt="Tutor"/> 
    </div>
  </div>
</Col>
  </Row>
    </>
  )
}

export default Schedule