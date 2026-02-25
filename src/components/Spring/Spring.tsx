import {
  Row,
  Col,
  Button,
  Card,
  Accordion,
  Table,
  Container,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "animate.css";
import "../Home/home.css";

import tutor from "../../img/tutor.jpg";
import circlearrow from "../../img/circlearrow.png";
import sun from "../../img/sun.png";
import { CSSProperties } from "react";

const Spring = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toConsultation = () => navigate("/consultation");

  const bubbleIconStyle: CSSProperties = {
    color: "#198754",
    fontSize: "1.5rem",
    marginRight: "15px",
  };

  const bubbleCardStyle: CSSProperties = {
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    padding: "20px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section */}
      <div
        className="hero-container d-flex align-items-center"
        style={{
          backgroundColor: "#FBDC6E",
          minHeight: "70vh",
          padding: "100px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="animate__animated animate__fadeInLeft">
              <Button
                className="mb-3 fw-bold"
                style={{
                  backgroundColor: "transparent",
                  color: "#3F556B",
                  borderRadius: "50px",
                  border: "2px solid #3F556B",
                }}
              >
                {t("Eesti keele kursus")}
              </Button>
              <h1 className="display-4 fw-bold" style={{ color: "#3F556B" }}>
                {t("Eesti keele intensiivkursus B1-taseme eksamiks")}
              </h1>
              <p className="lead mt-4 mb-5">
                {t(
                  "Ole valmis – tasemeeksam on juba mais! Liitu meie 9-nädalase intensiivprogrammiga, et saavutada B1-tase.",
                )}
              </p>
              <div className="d-flex gap-3">
                <Button
                  className="shadow"
                  onClick={toConsultation}
                  style={{
                    backgroundColor: "#3F556B",
                    border: "none",
                    borderRadius: "50px",
                    padding: "12px 30px",
                    fontWeight: "bold",
                  }}
                >
                  {t("Broneeri koht")}
                </Button>
              </div>
            </Col>
            <Col
              md={5}
              className="d-flex justify-content-center animate__animated animate__zoomIn"
            >
              <img
                src={tutor}
                alt="Eesti keel"
                className="rounded-circle shadow-lg"
                style={{ border: "10px solid white", maxWidth: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Info Bubbles */}
      <Container className="my-5">
        <Row className="g-4">
          <Col md={4}>
            <div style={bubbleCardStyle}>
              <i className="bi bi-calendar-check" style={bubbleIconStyle}></i>
              <div>
                <div className="fw-bold">{t("18 tundi")}</div>
                <div className="text-muted">
                  {t("(9 nädalat intensiivõpet)")}
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div style={bubbleCardStyle}>
              <i className="bi bi-people" style={bubbleIconStyle}></i>
              <div>
                <div className="fw-bold">{t("Väikesed rühmad")}</div>
                <div className="text-muted">{t("6–8 õpilast")}</div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div style={bubbleCardStyle}>
              <i className="bi bi-clock-history" style={bubbleIconStyle}></i>
              <div>
                <div className="fw-bold">1.5 {t("tundi / sessioon")}</div>
                <div className="text-muted">19:30 – 21:00</div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div style={bubbleCardStyle}>
              <i className="bi bi-calendar3" style={bubbleIconStyle}></i>
              <div>
                <div className="fw-bold">{t("Algus: 17.03")}</div>
                <div className="text-muted">17.03 – 15.05</div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div style={bubbleCardStyle}>
              <i className="bi bi-currency-euro" style={bubbleIconStyle}></i>
              <div>
                <div className="fw-bold">300 EUR</div>
                <div className="text-muted">{t("Kursuse maksumus")}</div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div style={bubbleCardStyle}>
              <i className="bi bi-laptop" style={bubbleIconStyle}></i>
              <div>
                <div className="fw-bold">Zoom</div>
                <div className="text-muted">{t("Õppekeskkond")}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Course Description */}
      <Container className="my-5">
        <Card
          className="border-0 shadow-sm p-4"
          style={{ borderRadius: "15px", borderLeft: "8px solid #FBDC6E" }}
        >
          <Row className="align-items-center">
            <Col md={12}>
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    width: "25px",
                    height: "2px",
                    backgroundColor: "#3F556B",
                    marginRight: "10px",
                  }}
                ></div>
                <span
                  className="text-uppercase fw-bold"
                  style={{ color: "#3F556B", letterSpacing: "1px" }}
                >
                  {t("Kursuse kirjeldus")}
                </span>
              </div>
              <h2 className="fw-bold mb-3" style={{ color: "#3F556B" }}>
                {t("B1-taseme ettevalmistuskursus")}
              </h2>
              <p className="text-muted" style={{ lineHeight: "1.8" }}>
                {t(
                  "Sel kevadel valmistu B1-taseme eksamiks (17.05) meie intensiivse õppekavaga. Koolitaja Natalia Komarova (20+ aastat kogemust, Tartu Ülikooli magister) juhendamisel omandad kõik vajaliku edukaks eksami sooritamiseks.",
                )}
              </p>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Pricing */}
      <div id="pricing" className="py-5" style={{ backgroundColor: "#ECEEF0" }}>
        <Container className="mb-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">{t("Kursuse maksumus")}</h2>
          </div>
          <Row className="justify-content-center">
            <Col md={5}>
              <Card
                className="h-100 border-0 shadow-lg overflow-hidden"
                style={{ borderRadius: "20px", border: "2px solid #FBDC6E" }}
              >
                <div
                  style={{
                    backgroundColor: "#3F556B",
                    padding: "20px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <h4 className="mb-0 fw-bold">{t("Intensiivne B1 pakett")}</h4>
                </div>
                <Card.Body className="p-4 text-center">
                  <h2 className="fw-bold mb-4" style={{ color: "#3F556B" }}>
                    300€
                  </h2>
                  <ul
                    className="list-unstyled text-start mb-5"
                    style={{ paddingLeft: "20px" }}
                  >
                    <li className="mb-2">✓ {t("36 akadeemilist tundi")}</li>
                    <li className="mb-2">
                      ✓ {t("Eksami ettevalmistuse fookus")}
                    </li>
                    <li className="mb-2">✓ {t("Kogenud koolitaja tugi")}</li>
                    <li className="mb-2">✓ {t("Õppematerjalid hinna sees")}</li>
                  </ul>
                  <Button
                    onClick={toConsultation}
                    className="w-100 fw-bold"
                    style={{
                      backgroundColor: "#3F556B",
                      color: "white",
                      border: "none",
                      borderRadius: "50px",
                      padding: "12px",
                    }}
                  >
                    {t("Registreeru kursusele")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* FAQ & Schedule */}
        <Container
          className="py-5 bg-white mb-5 shadow-sm"
          style={{ borderRadius: "20px" }}
        >
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={sun}
                alt="Päike"
                className="mb-4"
                style={{ height: "60px" }}
              />
              <h2 className="fw-bold mb-4" style={{ color: "#3F556B" }}>
                {t("Korduma kippuvad küsimused")}
              </h2>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {t("Kas kursus toimub veebis?")}
                  </Accordion.Header>
                  <Accordion.Body>
                    {t("Jah, kõik tunnid toimuvad reaalajas Zoomi keskkonnas.")}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{t("Kes on koolitaja?")}</Accordion.Header>
                  <Accordion.Body>
                    {t(
                      "Koolitaja on Natalia Komarova, kellel on Tartu Ülikooli magistrikraad ja üle 20 aasta kogemust.",
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6} className="mt-5 mt-md-0">
              <div
                className="p-4"
                style={{ backgroundColor: "#FEF8E1", borderRadius: "20px" }}
              >
                <h4 className="fw-bold mb-4" style={{ color: "#3F556B" }}>
                  {t("Tunniplaan")}
                </h4>
                <Table borderless responsive>
                  <tbody>
                    <tr>
                      <td>
                        <strong>{t("Teisipäev, Reede")}</strong>
                      </td>
                      <td>19:30 - 21:00</td>
                      <td>{t("Zoomi tund")}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>{t("Eksami kuupäev")}</strong>
                      </td>
                      <td>17.05</td>
                      <td>{t("B1-tase")}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>

        <div
          className="py-5 text-center"
          style={{ backgroundColor: "#FBDC6E" }}
        >
          <h2 className="fw-bold mb-4" style={{ color: "#3F556B" }}>
            {t("Kas olete valmis alustama?")}
          </h2>
          <p className="mb-5 ms-3 me-3" style={{ color: "#3F556B" }}>
            {t(
              "Broneeri tasuta konsultatsioon, et arutada oma keeletaset ja eesmärke.",
            )}
          </p>
          <Button
            className="swinging-link shadow-lg"
            onClick={toConsultation}
            style={{
              backgroundColor: "#3F556B",
              color: "white",
              borderRadius: "50px",
              padding: "15px 40px",
              fontSize: "1.2rem",
              border: "none",
            }}
          >
            {t("Võta ühendust")}{" "}
            <img
              className="ms-3"
              src={circlearrow}
              style={{ height: "30px", width: "30px" }}
              alt="arrow"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Spring;
