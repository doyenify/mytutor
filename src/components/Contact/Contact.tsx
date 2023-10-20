import { Row, Col, Button, Form } from 'react-bootstrap';
import home from '../../img/home.png';
import email from '../../img/email.png';
import phone from '../../img/phone.png';

import { Formik} from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  languageLevel: yup.string().required('Language Level is required'),
  lessonType: yup.string().required('Lesson Type is required'),
  courseExpectation: yup.string().required('Message is required'),
});


const Contact = () => {
  return (
    <div style={{width: "100%", overflowX: "hidden", overflowY: "hidden"}}>
       {/* banner  */}
       <div className='text-center mt-5 d-flex justify-content-center align-items-center'
        style={{backgroundColor: "#CBB9B2" , height: "200px" }}>
        <h1 className="" >Get in Touch With Us</h1>
       </div>
       {/* contact details */}
       <div>
        <Row className='mt-5'>
           {/* <Row className='ms-4 mt-5' ><h3>Get in Touch With Us</h3></Row> */}
           <Col className='ms-5 mt-1 '>
          <div className='mt-3' > 
            <div className="row">
              <div className="col-md-1">
                <img src={home} style={{width:"35px", height: "35px"}} alt="home"/>
              </div>
              <div className="col-md-11">
                <h5>Address</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
              </div>
            </div>
          
          <div className='mt-3'>
            <div className="row">
              <div className="col-md-1">
              <img src={email}  style={{width:"35px", height: "35px"}} alt="email"/> 
              </div>
              <div className="col-md-11">
                <h5>Email Address</h5><p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          <div className='mt-3'> 
            <div className="row">
              <div className="col-md-1">
                <img src={phone}  style={{width:"35px", height: "35px"}}alt="phone"/> 
              </div>
              <div className="col-md-11">
                <h5>Phone Number</h5> <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          </Col>
          {/* form column */}
          <Col className=' d-flex justify-content-center align-items-center'>
           <div className='me-5' 
           style={{
            marginLeft: "30px",
            backgroundColor: "#CBB9B2" , 
            borderRadius: "20px", 
            paddingTop: "50px", 
            paddingLeft: "30px",
            paddingBottom: "50px", 
            }}
           >
           <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    languageLevel: "",
                    lessonType: "",
                    courseExpectation: ""
    
                  }}

                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    axios.post('https://sheet.best/api/sheets/3d3daed8-f416-44c0-b33b-8da2fcce6814', values)
                    .then(response => {
                      console.log('loggin in', response);
                      setSubmitting(false);
                      resetForm();
                      resetForm();
                      toast.success('We have received your message, We will get back to you shortly');
                    })

                    .catch(error => {
                      console.error('error submitting form', error);
                      setSubmitting(false);
                      toast.error("Sorry we could not receive your message. Please check your connection and try again")
                    });
                    resetForm();
                  }}
                 
                  validationSchema={validationSchema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    handleBlur,
                    isSubmitting,
                  }) => (
                    <Form
                      noValidate
                      onSubmit={handleSubmit}
                      className="row form-wrapper me-5"
                    >
                      <div className="col-12 col-md-6">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            Name
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="firstName"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            Email Address
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>

                      <div className="col-12 col-md-6">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                      >
                          <Form.Label className="input-label">
                            Language Level
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="lastName"
                            value={values.languageLevel}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.languageLevel}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.languageLevel}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-5"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">Lesson Type</Form.Label>
                          <Form.Control
                            className="contact-input"
                            type="text"
                            name="phone"
                            value={values.lessonType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.lessonType}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.lessonType}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom01"
                        >
                          <Form.Label className="input-label">
                            Course Expectation
                          </Form.Label>
                          <Form.Control
                            className="contact-input"
                            as="textarea"
                            placeholder="Write your message"
                            rows={3}
                            name="message"
                            value={values.courseExpectation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.courseExpectation}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.courseExpectation}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <Button
                        className=" col-2 send-btn submit"
                        style={{backgroundColor:"#3F556B",
                        marginLeft: "10px", 
                        marginTop:"10px", 
                        borderRadius: "50px", 
                        width: "150px"}}
                        disabled={isSubmitting}
                        type="submit"
                      >
                        Request
                      </Button>
                      <ToastContainer /> 
                    </Form>
                  )}
                </Formik>

           </div>
          </Col>
        </Row>
       </div>
    </div>
  )
}

export default Contact