import React, { useState } from 'react';

const Consultation = () => {
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Courses:
        <input type="text" name="courses" value={formData.courses} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Language Level:
        <select name="languageLevel" value={formData.languageLevel} onChange={handleChange}>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
        </select>
      </label>
      <br />

      <label>
        Lesson Type:
        <input type="text" name="lessonType" value={formData.lessonType} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Course Expectation:
        <textarea
          name="courseExpectation"
          value={formData.courseExpectation}
          onChange={handleChange}
    
          required
        ></textarea>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Consultation;
