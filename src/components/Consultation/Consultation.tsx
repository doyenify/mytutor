import React from 'react';
import consult from '../../img/consult.jpg';
import { useTranslation } from 'react-i18next';
import { InlineWidget } from "react-calendly";

const Consultation = () => {
    const {t} = useTranslation();
  return (
    <>
     <div className="container" style={{ marginTop: "100px" }}>
  <div className="row">
    <div className="col-md-4 text-center">
      <h3 style={{ paddingTop: "100px", fontWeight: "bold" }}>
        {t('You need more information?')}
      </h3>
      <h5 style={{ paddingTop: "10px", marginBottom: "10px" }}>
      {t('Book a Free Consultation with Us Now!')}
        
      </h5>
      <img src={consult} alt="Emeeting" style={{ width: "100%" }} />
    </div>
    <div className="col-md-8 d-flex justify-content-center align-items-center">
      <div id="schedule_form" className="calendly-inline-widget">
        {/* Uncomment the following line if you don't use the InlineWidget component */}
        {/* <div data-url="https://calendly.com/olagbemiifeoluwa" style={{ minWidth: '100%', height: '900px' }} /> */}
        <InlineWidget url="https://calendly.com/olagbemiifeoluwa" />
      </div>
    </div>
  </div>
</div>            
    </>
  );
};
export default Consultation;
