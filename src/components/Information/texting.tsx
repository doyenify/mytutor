import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import "./curriculum.css"

const Curriculum = () => {
  const [Tab1, setTab1] =  useState(true);
  const [Tab2, setTab2] =  useState(false);
  const [Tab3, setTab3] =  useState(false);
  const [Tab4, setTab4] =  useState(false);

  const {t} = useTranslation();

  const showTab1 = () => {
    setTab1(true)
    setTab2(false)
    setTab3(false)
    setTab4(false)
  }

  const showTab2 = () => {
    setTab1(false)
    setTab2(true)
    setTab3(false)
    setTab4(false)
  }

  const showTab3 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(true)
    setTab4(false)
  }

  const showTab4 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(true)
  }

  return (
    <Container fluid>
      <div className='d-flex'>
        <div className="tab d-flex flex-column" style={{ width: '200px', marginTop: "150px" }}>
          <h5>Eesti Keele Oppekva</h5>
          <div className="tabtext d-flex flex-column">
            <div className={Tab1 ? "activeTab" : "inactiveTab"} onClick={showTab1}>{t('Eesti keele A1-taseme õppekava')}</div>
            <div className={Tab2 ? "activeTab" : "inactiveTab"} onClick={showTab2}>{t('Eesti keele A2-taseme õppekava')}</div>
            <div className={Tab3 ? "activeTab" : "inactiveTab"} onClick={showTab3}>{t('Eesti keele B1-taseme õppekava')}</div>
            <div className={Tab4 ? "activeTab" : "inactiveTab"} onClick={showTab4}>{t('Eesti keele B2-taseme õppekava')}</div>
          </div>
        </div>

        <div className="content">
          {Tab1 ? (<>

            <div className="container mt-5">
              <h4>Eesti keele õppekava A1-tasemele</h4>
              {/* Rest of your content */}
            </div>
          </>) : (Tab2 ? (<>

            <div className="container mt-5">
              <h4>Eesti keele õppekava A2-tasemele</h4>
              {/* A2 content */}
            </div>
          </>) : (Tab3 ? (<>

            <div className="container mt-5">
              <h4>Eesti keele õppekava B1-tasemele</h4>
              {/* B1 content */}
            </div>
          </>) : (<></>)))}
        </div>
      </div>
    </Container>
  );
};

export default Curriculum;
