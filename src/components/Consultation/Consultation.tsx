import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Consultation = () => {
    const {t} = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courses: '',
    languageLevel: 'A1',
    lessonType: '',
    courseExpectation: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
 
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <div 
    className='d-flex justify-content-center align-items-center' 
    style={{paddingTop: "100px"}}> 
    Book Consultation
    </div>
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="consultation-form p-4" style={{ backgroundColor: '#FCE79C', borderRadius: '10px' }}>
    <form onSubmit={handleSubmit}>

    <div className="row">
            <label htmlFor="name" className="col-form-label">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
    </div>

    <div className="row">
            <label htmlFor="name" className="col-form-label">Email:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
    </div>

    <div className="row">
            <label htmlFor="name" className="col-form-label">Courses:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
    </div>
    <div className="row mb-3">
            <label htmlFor="languageLevel" className="col-form-label">Language Level:</label>
            <select name="languageLevel" value={formData.languageLevel} onChange={handleChange} className="form-select">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
            </select>
     </div>
     <div className="row">
            <label htmlFor="name" className="col-form-label">Lesson Type:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
    </div>
    <div className="row">
            <label htmlFor="name" className="col-form-label">Course Expectation:</label>
            <input type="textarea"  name="name" value={formData.name} onChange={handleChange} className="form-control" required />
    </div>
    <Button
             className=" col-2 send-btn submit"
             style={{backgroundColor:"#3F556B",
             marginLeft: "", 
             marginTop:"20px", 
             borderRadius: "50px", 
             color: "#ffffff",
             width: "150px"}}
             type="submit"
             >
             {t('Consult')}
             </Button>
    </form>
    </div>
    </div>
    </>
  );
};

export default Consultation;
