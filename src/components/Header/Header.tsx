import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import kelelogo from '../../img/kelelogo.png';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import GoogleTranslate from '../GoogleTranslate/GoogleTranslate';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./header.css"
// import Estonianlesson from '../Estonianlesson/Estonianlesson';

const Header = () => {
  const navigate = useNavigate();

  const {t, i18n} = useTranslation();

  const [selected, setSelected] = useState("EE");
  // console.log(setSelected , "this is setselected");
  

  const onClickLanguageChange = (code: any) => {
    setSelected(code);
    const language = code.toLowerCase();
    i18n.changeLanguage(language)
  }
  const fetchLanguage = React.useCallback((code: any) => {
  const language = code.toLowerCase();
  i18n.changeLanguage(language);
  }, [i18n]);
  
  useEffect(() => {
    fetchLanguage(selected);
  }, [fetchLanguage, selected]);
  
  const toHome = () => {
    navigate("/")
  }

  const toContact = () => {
    navigate("/Contact")
  }

 
  const navigateToSchedule = () => {
   
    navigate("/Schedule");
  }
  const navigateToCurriculum = () => {
   
    navigate("/Curriculum");
  }
  const navigateToEffEduPro = () => {
   
    navigate("/EffEduPro");
  }
  const navigateToQuaTeachers = () => {
   
    navigate("/QualifiedTeachers");
  }
  const navigateToLearningEnv = () => {
   
    navigate("/LearningEnv");
  }
  // const navigateToPayTerms = () => {
   
  //   navigate("/PayTerms");
  // }

  const navigateToEngForAdult = () => {
   
    navigate("/EnglishForAdult");
  }
  const navigateToEngForSchStu = () => {
   
    navigate("/EnglishForSchool");
  }
  const navigateToEstForAdult = () => {
   
    navigate("/EstonianForAdults");
  }
  const navigateToEstForSchStu = () => {
   
    navigate("/EstonianForSchool");
  }



  return (
    <div>
        <Navbar    expand="lg" fixed="top" style={{backgroundColor: "#ffffff"}}>
        <Container fluid>
        <Navbar.Brand style={{marginLeft: "", color: "#985421", fontWeight:"bold", fontSize:"30px", cursor: "pointer"}} 
         onClick={toHome}> <img className='kelelogo' src={kelelogo} style={{height:"70px", width: "auto"}} alt="russian flag"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto  my-lg-0 ms-5">
            <Nav.Link  onClick={toHome}
             style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"bold",
              fontSize:"18px"}}
              >
              {t('Avaleht')}
              </Nav.Link>

              <NavDropdown title={t('Kursused')} id="courses-dropdown"
                style={{
                  marginLeft: "20px",
                  color: "#3F556B",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>
                <NavDropdown.Item onClick={navigateToEngForAdult}>
                {t('Inglise keel täiskasvanutele')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEngForSchStu}>
                  {t('Inglise keel kooliõpilastele')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEstForAdult}>
                  {t('Eesti keel täiskasvanutele')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEstForSchStu}>
                  {t('Eesti keel kooliõpilastele')}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t('Informatsioon')} id="information-dropdown"
                style={{
                  marginLeft: "20px",
                  color: "#3F556B",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>
                <NavDropdown.Item onClick={navigateToSchedule}>
                  {t('Ajakava')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToCurriculum}>
                  {t('Õppekavad')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEffEduPro}>
                  {t('Õppekorralduse ja kvaliteedi tagamine alused')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToQuaTeachers}>
                  {t('Õpetajate kvaliteedi tagamine')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToLearningEnv}>
                  {t('Vastuvõtt, õppetasu, lõpetamise tingimused')}
                </NavDropdown.Item>
               
              </NavDropdown>
              
            </Nav>
            {/* <select onChange={onClickLanguageChange}>
            <option value="en">ENG <img src={engflag} alt="" /></option>
            <option value="es">Estonian</option>
            <option value="es">Russian</option> 
           </select> */}

       <ReactFlagsSelect
       selected={selected}
       onSelect={(code) => onClickLanguageChange(code)}
       countries= {["EE", "RU", "GB"]}
       showSelectedLabel={false}
       showOptionLabel={false}
       />
            {/* <GoogleTranslate/> */}
            {/* <Button className='bookaservice-btn mx-2' 
             style={{backgroundColor: "#985421", borderRadius: "50px", width: "150px"}} >
             {t('Price')}
            </Button> */}
            <Button onClick={toContact} className='bookaservice-btn mx-2'
             style={{backgroundColor: "#FBE081", color:"#3F556B", borderRadius: "50px", width: "150px"}} >
             {t('Kontaktid')}
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  
  )
}
export default Header