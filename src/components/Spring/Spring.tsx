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

import courseImg from "../../img/course-img.png";
import circlearrow from "../../img/circlearrow.png";
import sun from "../../img/sun.png";
import teacherIcon from "../../img/teacher.webp";
import bookIcon from "../../img/book-icon.webp";
import cameraIcon from "../../img/camera-icon.webp";
import soupImg from "../../img/camera-icon.webp";
import { CSSProperties } from "react";

const Spring = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toConsultation = () => navigate("/consultation");

  const listStyle: CSSProperties = {
    listStyle: "none",
    paddingLeft: "0",
  };

  const checkItemStyle: CSSProperties = {
    position: "relative",
    paddingLeft: "30px",
    marginBottom: "10px",
  };

  const checkMark: CSSProperties = {
    position: "absolute",
    left: "0",
    color: "#3F556B",
    fontWeight: "bold",
  };

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
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
                {t("Poola keele kursused")}
              </Button>
              <h1 className="display-4 fw-bold" style={{ color: "#3F556B" }}>
                {t("Kevadine Poola keele intensiivkursus Krakówis")}
              </h1>
              <p className="lead mt-4 mb-5">
                {t(
                  "Sukeldu kultuuri, õpi keelt ja koge kevadist Poolat meie 2-nädalase programmiga.",
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
                <Button
                  href="#pricing"
                  variant="outline-dark"
                  style={{ borderRadius: "50px", padding: "12px 30px" }}
                >
                  {t("Vaata hindu")}
                </Button>
              </div>
            </Col>
            <Col
              md={5}
              className="d-flex justify-content-center animate__animated animate__zoomIn"
            >
              <img
                src={courseImg}
                alt="Polish Course"
                className="rounded-circle shadow-lg"
                style={{ border: "10px solid white", maxWidth: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <Card
          className="border-0 shadow-sm p-4"
          style={{ borderRadius: "15px", borderLeft: "8px solid #FBDC6E" }}
        >
          <Row className="align-items-center">
            <Col md={8}>
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
                {t("Poola kevadkursus [GL-EA]")}
              </h2>
              <p className="text-muted" style={{ lineHeight: "1.8" }}>
                {t(
                  "Laske oma poola keelel sel kevadel särada Krakowi intensiivkursuse ajal! See on ainulaadne võimalus ühendada intensiivne keeleõpe Poola kultuuri ja traditsioonidega. Kursus sisaldab igapäevaseid poola keele tunde, mida juhendavad kogenud õpetajad ja rikkalik õppekava.",
                )}
              </p>
            </Col>
            <Col md={4} className="text-center">
              <img
                src={soupImg}
                alt="Culture"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "200px", border: "5px solid #fff" }}
              />
            </Col>
          </Row>
        </Card>
      </Container>

      <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <Container>
          <h2 className="text-center fw-bold mb-5" style={{ color: "#3F556B" }}>
            {t("Hind 2190 PLN / 515 EUR sisaldab")}
          </h2>
          <Row className="g-4 text-center">
            <Col md={4}>
              <div
                className="mb-4 d-inline-block p-2 rounded-circle"
                style={{
                  backgroundColor: "#FBDC6E",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={teacherIcon}
                  alt="Teacher"
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid #fff",
                  }}
                />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#3F556B" }}>
                {t("Õppetöö")}
              </h4>
              <ul
                className="list-unstyled text-start mx-auto"
                style={{ maxWidth: "280px", fontSize: "0.95rem" }}
              >
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("40 tundi (igaüks 45 min) poola keelt võõrkeelena")}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("Veebitest ja intervjuu taseme määramiseks")}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("Lõpptest")}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("Osalemistunnistus")}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("Pidev toetus metodoloogilt")}
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div
                className="mb-4 d-inline-block p-2 rounded-circle"
                style={{
                  backgroundColor: "#FBDC6E",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={bookIcon}
                  alt="Books"
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid #fff",
                  }}
                />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#3F556B" }}>
                {t("Õppematerjalid")}
              </h4>
              <ul
                className="list-unstyled text-start mx-auto"
                style={{ maxWidth: "280px", fontSize: "0.95rem" }}
              >
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t(
                    "Kõik õppematerjalid, sh õpik sarjast 'POLSKI krok po kroku'",
                  )}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("12 kuud juurdepääsu veebikursusele e-polish.eu")}
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div
                className="mb-4 d-inline-block p-2 rounded-circle"
                style={{
                  backgroundColor: "#FBDC6E",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={cameraIcon}
                  alt="Extra"
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid #fff",
                  }}
                />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#3F556B" }}>
                {t("Lisategevused")}
              </h4>
              <ul
                className="list-unstyled text-start mx-auto"
                style={{ maxWidth: "280px", fontSize: "0.95rem" }}
              >
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t(
                    "20 sessiooni (igaüks 45 min) lingvistilisi ja kultuurilisi meistriklasse",
                  )}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("Integratsiooniõhtud")}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("Giidiga ekskursioon Krakówis")}
                </li>
                <li className="mb-2">
                  <span style={{ color: "#FBDC6E", marginRight: "8px" }}>
                    ●
                  </span>{" "}
                  {t("Ühepäevane väljasõit Krakówi ümbruses")}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="pricing" className="py-5" style={{ backgroundColor: "#ECEEF0" }}>
        <Container>
          <div className="text-center mb-5">
            <Button
              className="mb-2"
              style={{
                backgroundColor: "#FCE8A1",
                color: "#CF8353",
                border: "none",
              }}
            >
              {t("Hinnakiri")}
            </Button>
            <h2 className="fw-bold">{t("Vali endale sobiv pakett")}</h2>
          </div>
          <Row className="justify-content-center g-4">
            <Col md={5}>
              <Card
                className="h-100 border-0 shadow-sm overflow-hidden"
                style={{ borderRadius: "20px" }}
              >
                <div
                  style={{
                    backgroundColor: "#3F556B",
                    padding: "20px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <h4 className="mb-0">{t("Standard pakett")}</h4>
                </div>
                <Card.Body className="p-4 text-center">
                  <h2 className="fw-bold mb-4" style={{ color: "#3F556B" }}>
                    590€
                  </h2>
                  <ul style={listStyle} className="text-start mb-5">
                    <li style={checkItemStyle}>
                      <span style={checkMark}>✓</span>{" "}
                      {t("40 akadeemilist tundi")}
                    </li>
                    <li style={checkItemStyle}>
                      <span style={checkMark}>✓</span>{" "}
                      {t("Kõik õppematerjalid")}
                    </li>
                    <li style={checkItemStyle}>
                      <span style={checkMark}>✓</span>{" "}
                      {t("Keeletest ja sertifikaat")}
                    </li>
                    <li style={{ ...checkItemStyle, color: "#999" }}>
                      <span style={{ ...checkMark, color: "#ccc" }}>✕</span>{" "}
                      {t("Majutus ei kuulu hinna sisse")}
                    </li>
                  </ul>
                  <Button
                    onClick={toConsultation}
                    className="w-100 fw-bold"
                    style={{
                      backgroundColor: "#FCE79C",
                      color: "#3F556B",
                      border: "none",
                      borderRadius: "50px",
                    }}
                  >
                    {t("Vali pakett")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card
                className="h-100 border-0 shadow-lg overflow-hidden"
                style={{
                  borderRadius: "20px",
                  border: "2px solid #FBDC6E",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FBDC6E",
                    padding: "20px",
                    color: "#3F556B",
                    textAlign: "center",
                  }}
                >
                  <h4 className="mb-0 fw-bold">{t("Täispakett")}</h4>
                </div>
                <Card.Body className="p-4 text-center">
                  <h2 className="fw-bold mb-4" style={{ color: "#3F556B" }}>
                    1150€
                  </h2>
                  <ul style={listStyle} className="text-start mb-5">
                    <li style={checkItemStyle}>
                      <span style={checkMark}>✓</span>{" "}
                      {t("40 akadeemilist tundi")}
                    </li>
                    <li style={checkItemStyle}>
                      <span style={checkMark}>✓</span>{" "}
                      {t("Majutus Krakówi vanalinnas")}
                    </li>
                    <li style={checkItemStyle}>
                      <span style={checkMark}>✓</span>{" "}
                      {t("3 Kultuuriüritust (ekskursioonid)")}
                    </li>
                    <li style={checkItemStyle}>
                      <span style={checkMark}>✓</span>{" "}
                      {t("Lennujaama transfeer")}
                    </li>
                  </ul>
                  <Button
                    onClick={toConsultation}
                    className="w-100 fw-bold"
                    style={{
                      backgroundColor: "#3F556B",
                      color: "white",
                      border: "none",
                      borderRadius: "50px",
                    }}
                  >
                    {t("Vali pakett")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5 bg-white">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={sun}
              alt="Sun icon"
              className="mb-4"
              style={{ height: "60px" }}
            />
            <h2 className="fw-bold mb-4" style={{ color: "#3F556B" }}>
              {t("Korduma kippuvad küsimused")}
            </h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {t("Kas kursus sobib täiesti algajale?")}
                </Accordion.Header>
                <Accordion.Body>
                  {t(
                    "Jah! Meil on eraldi rühmad neile, kes alustavad nullist.",
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t("Kus tunnid toimuvad?")}</Accordion.Header>
                <Accordion.Body>
                  {t("Meie kaasaegses õppekeskuses Krakówi südames.")}
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
                {t("Kursuse ajakava")}
              </h4>
              <Table borderless responsive>
                <tbody>
                  <tr>
                    <td>
                      <strong>{t("Esmaspäev - Reede")}</strong>
                    </td>
                    <td>09:00 - 12:15</td>
                    <td>{t("Intensiivtund")}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>{t("Laupäev")}</strong>
                    </td>
                    <td>11:00 - 15:00</td>
                    <td>{t("Linnatuur")}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="py-5 text-center" style={{ backgroundColor: "#FBDC6E" }}>
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
  );
};

export default Spring;
