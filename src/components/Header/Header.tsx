import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import kelelogo from '../../img/kelelogo.png';
import { useNavigate } from 'react-router-dom';
// import GoogleTranslate from '../GoogleTranslate/GoogleTranslate';
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const Header = () => {
  const navigate = useNavigate();

  const {t, i18n} = useTranslation();

  const [selected, setSelected] = useState("EE");
  console.log(setSelected , "this is setselected");
  

//   const onClickLanguageChange = (code: any) => {
//     const language = code.toLowerCase();
//     i18n.changeLanguage(language)
// }
const onClickLanguageChange = React.useCallback((code: any) => {
  const language = code.toLowerCase();
  i18n.changeLanguage(language);
}, [i18n]);
  // React.useEffect(() => onClickLanguageChange(selected), [])

  React.useEffect(() => {
    onClickLanguageChange(selected);
  }, [onClickLanguageChange, selected]);
  
  const toHome = () => {
    navigate("/")
  }

  const toAbout = () => {
    navigate("/About")
  }

  const toLesson = () => {
    navigate("/Estonianlesson")
  }

  const toContact = () => {
    navigate("/Contact")
  }

  const toCourses = () => {
    navigate("/Courses")
  }

  const toInformation = () => {
    navigate("/Information")
  }

  // const options = [
  //   { value: 'en', label: <div><img src={copyIcon} height="30px" width="30px"/>Chocolate </div> },
  //   { value: 'es', label: 'EST' },
  //   { value: 'ru', label: '' },
  // ];

  return (
    <div>
        <Navbar    expand="lg" fixed="top" style={{backgroundColor: "#ffffff"}}>
        <Container fluid>
        <Navbar.Brand style={{marginLeft: "90px", color: "#985421", fontWeight:"bold", fontSize:"30px", cursor: "pointer"}} 
         onClick={toHome}> <img className='' src={kelelogo} style={{height:"", width: ""}} alt="russian flag"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav
            className="me-auto  my-lg-0 ms-5"
            
          >
            <Nav.Link  onClick={toHome}
             style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Home')}
              </Nav.Link>
              <Nav.Link onClick={toAbout}
               style={{
                marginLeft: "20px",
                color: "#3F556B", 
                fontWeight:"",
                fontSize:"16px"}}
              >
              {t('About')}</Nav.Link>
              
             <Nav.Link onClick={toLesson}
              style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Estonian Lesson')}
              </Nav.Link>

              <Nav.Link onClick={toCourses}
              style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Courses')}
              </Nav.Link>
              <Nav.Link onClick={toInformation}
              style={{
              marginLeft: "20px",
              color: "#3F556B", 
              fontWeight:"",
              fontSize:"16px"}}
              >
              {t('Information')}
              </Nav.Link>
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
             style={{backgroundColor: "#FBE081", color:"#3F556B", borderRadius: "50px", width: "100px"}} >
             {t('Contact')}
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}
export default Header