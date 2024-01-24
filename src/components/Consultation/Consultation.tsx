import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { InlineWidget } from "react-calendly";

const Consultation = () => {
    const {t} = useTranslation();
  return (
    <>
    <div 
    className='d-flex justify-content-center align-items-center' 
    style={{paddingTop: "100px"}}> 
    Book Consultation
    </div>
    <div className="App">
      <InlineWidget url="https://calendly.com/olagbemiifeoluwa" />
    </div>
    </>
  );
};
export default Consultation;
