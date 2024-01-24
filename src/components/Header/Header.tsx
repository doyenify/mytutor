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
  const navigateToPayTerms = () => {
   
    navigate("/PayTerms");
  }

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
        <Navbar.Brand style={{marginLeft: "90px", color: "#985421", fontWeight:"bold", fontSize:"30px", cursor: "pointer"}} 
         onClick={toHome}> <img className='' src={kelelogo} style={{height:"", width: ""}} alt="russian flag"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav
            className="me-auto  my-lg-0 ms-5">
            <Nav.Link  onClick={toHome}
             style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Home')}
              </Nav.Link>
              {/* <Nav.Link onClick={toAbout}
               style={{
                marginLeft: "20px",
                color: "#3F556B", 
                fontWeight:"",
                fontSize:"16px"}}
              >
              {t('About')}</Nav.Link> */}
              
             {/* <Nav.Link onClick={toLesson}
              style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Estonian Lesson')}
              </Nav.Link> */}
     
              {/* <Nav.Link onClick={toCourses}
              style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Courses')}
              </Nav.Link> */}
              {/* <Nav.Link onClick={toInformation}
              style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Information')}
              </Nav.Link> */}
              <NavDropdown title={t('Courses')} id="courses-dropdown"
                style={{
                  marginLeft: "20px",
                  color: "#3F556B",
                  fontWeight: "",
                  fontSize: "16px"
                }}>
                <NavDropdown.Item onClick={navigateToEngForAdult}>
                {t('English For Adults')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEngForSchStu}>
                  {t('English For School Students')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEstForAdult}>
                  {t('Estonian For Adults')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEstForSchStu}>
                  {t('Estonian For School Students')}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t('Information')} id="information-dropdown"
                style={{
                  marginLeft: "20px",
                  color: "#3F556B",
                  fontWeight: "",
                  fontSize: "16px"
                }}>
                <NavDropdown.Item onClick={navigateToSchedule}>
                  {t('Schedule')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToCurriculum}>
                  {t('Curriculum')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToEffEduPro}>
                  {t('Efficient Educational Programs')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToQuaTeachers}>
                  {t('Qualified Teachers')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToLearningEnv}>
                  {t('Learning Environment')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={navigateToPayTerms}>
                  {t('Payment Terms')}
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
       countries={["EE", "GB", "RU" ]}
       />;
            {/* <GoogleTranslate/> */}
            {/* <Button className='bookaservice-btn mx-2' 
             style={{backgroundColor: "#985421", borderRadius: "50px", width: "150px"}} >
             {t('Price')}
            </Button> */}
            <Button onClick={toContact} className='bookaservice-btn mx-2'
             style={{backgroundColor: "#FBE081", color:"#3F556B", borderRadius: "50px", width: "150px"}} >
             {t('Contact')}
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  
  )
}
export default Header