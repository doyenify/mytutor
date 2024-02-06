import React from 'react';
import consult from '../../img/consult.jpg';
import { useTranslation } from 'react-i18next';
// import { InlineWidget } from "react-calendly";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Consultation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toContact = () => {
    navigate("/Contact");
  };

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
       
          <div className="text-center">
            <h3 style={{ paddingTop: "50px", fontWeight: "bold" }}>
              {t('Sa vajad rohkem teavet?')}
            </h3>
            <h5 style={{ paddingTop: "10px", marginBottom: "10px" }}>
              {t('Broneeri tasuta konsultatsioon meiega kohe!')}
            
            </h5>
            <Button
              onClick={toContact}
              className="bookaservice-btn mx-2"
              style={{
                backgroundColor: "#FBE081",
                color: "#3F556B",
                borderRadius: "50px",
                width: "150px",
                marginTop: "10px",
              }}
            >
              {t('Kontaktid')}
            </Button>
            <div>
            <img src={consult} alt="Emeeting" style={{ width: "400px", height:"auto" }} />
            </div>
          </div>
      </div>
    </>
  );
};
export default Consultation;

