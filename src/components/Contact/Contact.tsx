import { Row, Col, Button, Form } from 'react-bootstrap';
import homeimg from '../../img/homeimg.png';
import emailimg from '../../img/emailimg.png';
import phoneimg from '../../img/phoneimg.png';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Console, log } from 'console';

const validationSchema = yup.object({
  name: yup.string().required(i18n.t('Nimi on nõutav')),
  email: yup.string().email(i18n.t('Invaliidne e-kiri')).required(i18n.t('Vajalik on e-posti aadress')),
  languageLevel: yup.string().required(i18n.t('Nõutav keeletase')),
  course: yup.string().required(i18n.t('Kursus on nõutav')),
  // lessonType: yup.string().required(i18n.t('Tundide tüüp on nõutav')),
  // courseExpectation: yup.string().required(i18n.t('Sõnum on nõutav')),
});

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
      {/* banner  */}
      <div className='text-center mt-5 d-flex justify-content-center align-items-center'
        style={{ backgroundColor: "#E2E5E9", height: "200px" }}>
        <h1 className="" >{t('Võta meiega ühendust')}</h1>
      </div>
      {/* contact details */}
      <div>
        <Row className='mt-5'>
          {/* <Row className='ms-4 mt-5' ><h3>Get in Touch With Us</h3></Row> */}
          <Col className='ms-5 mt-1 '>
            <div className='mt-3' >
              <div className="row">
                <div className="col-md-1">
                  <img src={homeimg} style={{ width: "35px", height: "35px" }} alt="home" />
                </div>
                <div className="col-md-11">
                  <h5>{t('Aadress')}</h5> <p>Kangelaste 36,Narva linn,
                    Ida-Viru maakond, 20608
                  </p></div>
                <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.6397950427397!2d28.168379976437475!3d59.38903760624067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469437e349fb01e3%3A0x6ab52b0bc5a9168!2sKangelaste%20prospekt%2036%2C%2020608%20Narva%2C%20Estonia!5e0!3m2!1sen!2sng!4v1706014835873!5m2!1sen!2sng"
                  width="400"
                  height="350"
                  style={{ border: "0" }}
                  loading="lazy"
                >
                </iframe>
              </div>
            </div>

            <div className='mt-3'>
              <div className="row">
                <div className="col-md-1">
                  <img src={emailimg} style={{ width: "35px", height: "35px" }} alt="email" />
                </div>
                <div className="col-md-11">
                  <h5>{t('E-posti aadress')}</h5><p>info@keeleroomud.ee
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-3'>
              <div className="row">
                <div className="col-md-1">
                  <img src={phoneimg} style={{ width: "35px", height: "35px" }} alt="phone" />
                </div>
                <div className="col-md-11">
                  <h5>{t('Telefoninumber')}</h5> <p>+37255687860</p>
                </div>
              </div>
            </div>
           
          </Col>
          {/* form column */}
          <Col className=' d-flex justify-content-center align-items-center'>
            <div className='me-5'
              style={{
                marginLeft: "30px",
                backgroundColor: "#E2E5E9",
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
                  course: "",
                  languageLevel: "",
                  // lessonType: "",
                  // courseExpectation: "",


                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const apiKey = process.env.REACT_APP_BREVO_API_KEY;
                  console.log (apiKey, "Api key" )
                  console.log (values, "values" )

                  if (!apiKey) {
                    console.error("Brevo API key is not defined.");
                    return;
                  }

                  const bodyToDoyen = {
                    sender: {
                      name: "KEELERÕÕMUD LANGUAGE WEBSITE",
                      email: values.email
                    },
                    to: [
                      {
                        email: "olagbemiifeoluwa@gmail.com"
                      },
                      {
                        email: values.email
                      }
                    ],
                    subject: `KEELERÕÕMUD Contact Page '${values.course}'`,
                    htmlContent: `<html><head></head><body>
                                      <h1>A New Student Request On Our Services</h1>
                                      <p>Name: ${values.name}</p>
                                      <p>Email: ${values.email}</p>
                                      <p>Course: ${values.course}</p>
                                      <p>Language Level: ${values.languageLevel}</p>
                                     
                                  </body></html>`,
                  };
                  //  <p>Lesson Type: ${values.lessonType}</p>
                  //                     <p>Course Expectation: ${values.courseExpectation}</p>


                  fetch("https://api.brevo.com/v3/smtp/email", {
                    method: "POST",
                    headers: {
                      accept: "application/json",
                      "api-key": apiKey,
                      "content-type": "application/json"
                    },
                    body: JSON.stringify(bodyToDoyen)
                  })
                    .then(response => {
                      if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                      }

                      console.log('logging in', response);
                      setSubmitting(false);
                      resetForm();
                      resetForm();
                      toast.success('We have received your Message, We will get back to you shortly');
                    })
                    .catch(error => {
                      console.error('error submitting form', error);
                      setSubmitting(false);
                      toast.error("Sorry we could not receive your Message. Please check your connection and try again");
                    });
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
                    <div className="col-12 ">
                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label className="input-label">
                          {t('Nimi')}
                        </Form.Label>
                        <Form.Control
                          className="contact-input"
                          type="text"
                          name="name"
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
                          {t('E-posti aadress')}
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
                    <div className="col-12">


                      <Form.Group className="mb-3" controlId="languageLevel">
                        <Form.Label className="input-label">{t('Kursus')}</Form.Label>
                        <Form.Control
                          className="contact-input"
                          as="select"
                          name="course"
                          value={values.course}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!errors.course}
                        >
                          <option value="" disabled> {t('Valige kursus')}</option>
                          <option value="English for adult"> {t('Inglise keel täiskasvanutele')}</option>
                          <option value="English for school">{t('Inglise keel kooliõpilastele')}</option>
                          <option value="Estonian for adult">{t('Eesti keel täiskasvanutele')}</option>
                          <option value="Estonian for school">{t('Eesti keel kooliõpilastele')}</option>
                          <option value="Make enquiry">{t('Tehke päringut')}</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.languageLevel}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="languageLevel">
                        <Form.Label className="input-label">{t('Keeletase')}</Form.Label>
                        <Form.Control
                          className="contact-input"
                          as="select"
                          name="languageLevel"
                          value={values.languageLevel}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!errors.languageLevel}
                        >
                          <option value="" disabled> {t('Vali keeletase')}</option>
                          <option value="A1">A1</option>
                          <option value="A2">A2</option>
                          <option value="B1">B1</option>
                          <option value="B2">B2</option>
                          <option value="C1">C1</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.languageLevel}
                        </Form.Control.Feedback>
                      </Form.Group>

                      {/* <Form.Group className="mb-3" controlId="lessonType">
                        <Form.Label className="input-label">{t('Tunni tüüp')}</Form.Label>
                        <Form.Control
                          className="contact-input"
                          type="text"
                          name="lessonType"
                          value={values.lessonType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!errors.lessonType}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lessonType}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="validationCustom01">
                        <Form.Label className="input-label">{t('Kursuse ootus')}</Form.Label>
                        <Form.Control
                          className="contact-input"
                          as="textarea"  // Change this line
                          placeholder=""
                          rows={3}
                          name="courseExpectation"
                          value={values.courseExpectation}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!errors.courseExpectation}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.courseExpectation}
                        </Form.Control.Feedback>
                      </Form.Group> */}
                    </div>
                    <Button
                      className=" col-2 send-btn submit"
                      style={{
                        backgroundColor: "#FCE79C",
                        marginLeft: "10px",
                        marginTop: "10px",
                        borderRadius: "50px",
                        color: "#3F556B",
                        width: "150px"
                      }}
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {t('Esita')}
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