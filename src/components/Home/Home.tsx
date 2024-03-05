import { Row, Col, Button , Card} from 'react-bootstrap';
import tutorone from '../../img/tutorone.png';
import aboutimg from '../../img/aboutimg.png';
import circlearrow from '../../img/circlearrow.png';
import rusflag from '../../img/rusflag.png';
import estflag from '../../img/estflag.png';
import engflag from '../../img/engflag.png';
import bookone from '../../img/bookone.png';
import courseImg from '../../img/course-img.png';
import workimg from '../../img/workimg.png';
import booktwo from '../../img/booktwo.png';
import sun from '../../img/sun.png';
import 'animate.css';
import './home.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// import Consultation from '../Consultation/Consultation';


const Home = () => {
    const navigate = useNavigate();

    const {t} = useTranslation();

    // const onClickLanguageChange = (e: any) => {
    //     const language = e.target.value;
    //     i18n.changeLanguage(language)
    // }
    const toConsultation = () => {
        navigate("/consultation")
      }
  return (
    //    Entire Home Section
    <div style={{width: "100%", overflowX: "hidden"}}>
       {/* hero section */}
       <div className='hero-container d-flex justify-content-center align-items-center' style={{backgroundColor: "#FBDC6E"}}>
    <Row>
        <Col className='hero-col-1 col-12 col-sm-6 d-flex justify-content-center align-items-center'>
            <div className='homepage-left ps-5 pt-5 p5-5'>
               
                <Button className="mb-2"style={{backgroundColor: "transparent", color: "#000000", borderRadius: "50px", border: "2px solid #3F556B"}}>{t('Keelerõõmud Keeltekool OÜ')}</Button>
                <h1>
                {t('Meie interaktiivsed ja kaasavad')}<br />
                    {t('õppetunnid muudavad õppimise lõbusaks ja nauditavaks')}
                </h1>
                <div>
                    "{t('Hea õpetaja on nagu küünal – ta põletab ennast, et')}<br />
                    {t('valgustada teed teistele.')}"<br />
                    <i>{t('Mustafa Kemal Ataturk')}</i>
                </div>
                <div className='' style={{display: "flex", marginTop: "15px"}}>
                    <Button className='her0-contact-btn' href='#aboutme' style={{backgroundColor: "transparent", color: "#000000" , borderRadius: "50px", width: "120px", fontWeight: "bold", marginTop:"10px", marginRight:"20px"}}>
                        {t('Minust')}
                    </Button> 
                    <Button className='her0-contact-btn' onClick={toConsultation} style={{backgroundColor: "#3F556B", borderRadius: "50px", width: "130px", marginTop:"10px"}}>
                        {t('Konsultatsioon')}
                    </Button> 
                </div>    
            </div>
        </Col>
        <Col className='hero-img hero-col-2 col-12 col-sm-6 mt-md-5 d-flex justify-content-center align-items-center position-relative'>
    <div>
        <img className='hero-img pt-md-5' src={tutorone} style={{maxWidth: "100%", height: "auto"}} alt="Tutor"/>
        <div className="rectangle-overlay text-center"> {t('Natalia Komarova')} <br /> <span> {t('Asutaja ja koolitaja')} </span></div>
    </div>
</Col>
    </Row>
</div>
 
       
        {/* about me  section */}
        <div id='aboutme'>
        <Row>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: ''}}>
            <div><img className='aboutimg' src={aboutimg} style={{height:"450px", width: "auto"}} alt="about me"/></div>
            </Col>
            <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='about-content'>
                    <div style={{display:"flex"}} > 
                        <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('Minust')}</Button> </div>
                        <a className='ms-5 swinging-link' href="#Whoiteach" style={{ textDecoration: 'none' }}> {t('Keda ma õpetan')}<img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </a>
                    </div>
                    <div className='mt-3' style={{maxWidth:"500px"}}>
                        {t('Olen professionaalne eesti ja inglise keele õpetaja. Oman rohkem kui 20-aastast')} {"\n"}
                        {t('töökogemust põhikoolis ja gümnaasiumis, lisaks olen läbi viinud nii')}  {"\n"} 
                        {t('eesti kui ka inglise keele täiendkoolitusi täiskasvanutele.')} 
                        <br />
                        <br />
                        {t('Ma usun, et keeli tuleks õppida ja õpetada rõõmuga. Oluline on õpilaste ja õpetaja')} {"\n"}
                        {t('koostöö, kus õpetaja inspireerib, aitab arendada võõrkeeleoskusi ja suunab.')} {"\n"}
                        {t('Ma püüan olla selline inspiratsiooniallikas, kasutades uuenduslikke õppemeetodeid,')}{"\n"}
                        {t('materjale ja pidevalt kontrollin õppijate teadmisi testide kaudu.')}
                    </div>
                    </div>
            </Col>
        </Row>
        </div>
        {/* Who I teach */}
       <div className= "who-content mb-5" id='Whoiteach'>
        <Row>
             <div style={{ display: 'flex', justifyContent: 'center'}} > 
                    <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('Keda ma õpetan')} </Button> </div>
                    <a className='ms-5 swinging-link' href="#howiwork" style={{ textDecoration: 'none' }}> {t('Kuidas ma töötan')}<img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </a>
              </div>


<div className='row justify-content-center'>
    <div className='col-10 col-md-3 mb-4'>
        <div className='mt-5 p-3 px-4' style={{backgroundColor:"#E2E5E9"}}>
            <div className="d-flex justify-content-end mb-4">
                <img className='ms-3' src={rusflag} style={{height:"30px", width: "30px"}} alt="russian flag"/>
                <img className='ms-3' src={estflag} style={{height:"30px", width: "30px"}} alt="estonian flag"/>
            </div>
            <p> {t('Inglise keele õpetamine toimub')} <br /> {t('vene ja eesti keele')}  <br /> {t('baasil')} </p>
            <p> {t('Tasemed')}:<br />{t('A1, A2, B1, B2, ja C1.')} </p>
        </div>
    </div>
    <div className='col-10 col-md-3 mb-4'>
        <div className='mt-5 p-3 px-4' style={{backgroundColor:"#FEF8E1"}}>
            <div className="d-flex justify-content-end mb-4">
                <img className='ms-3' src={rusflag} style={{height:"30px", width: "30px"}} alt="russian flag"/>
                <img className='ms-3' src={engflag} style={{height:"30px", width: "30px"}} alt="english flag"/>
            </div>
            <p> {t('Eesti keele õpetamine toimub')} <br /> {t('vene ja inglise keele')}  <br /> {t('baasil')} </p>
            <p>{t('Tasemed')}: <br />{t('A1, A2, B1, ja B2.')} </p>
        </div>
    </div>
</div>


        </Row>
       </div>

     {/* work image */}
     <div id='howiwork'>
        <Row>
        <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='work-content' style={{maxWidth:"500px"}}>
                    <div style={{display:"flex"}} > 
                    <div > <Button style={{backgroundColor:"#FCE8A1", color: "#CF8353", paddingLeft: "20px", paddingRight: "20px",border: "4px", borderColor:"#FBE081"}}> {t('Kuidas ma töötan')} </Button> </div>
                    <a className='ms-5 mb-3 swinging-link' href="#courses" style={{ textDecoration: 'none' }}> {t('Kursused')} <img className='ms-3' src={circlearrow} style={{height:"30px", width: "30px"}} alt="Tutor"/> </a>
                     </div>
                    <div className='mt-3'> {t('Töötan täiskasvanute ja kooliõpilaste gruppidega ja annan ka individuaaltunde.')} {"\n"}
                    {t('Tunnid võivad toimuda nii kontaktselt (Narva kodukontor või renditud ruum)')} {"\n"}
                    {t('kui ka online-keskkonnas (Zoom).')} {"\n"}
                    <br />
                    <br />
                    {t('Aitan kooliõpilastel valmistuda eesti ning inglise keele riigieksamiteks.')} {"\n"}
                    {t('Korraldan koolitusi vastavalt klientide soovile.')}
                    </div>
                 </div>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: ''}}>
            <div><img className='workimg' src={workimg} style={{height:"478px", width: "auto"}} alt="work pict"/></div>
            </Col>
           
        </Row>
        </div>


        {/* course section */}
        <div id='courses'>
           <div className='hero-service-section' style={{marginTop: ""}}>
            <Row>
                <Col className='col-12 col-md-6 d-flex justify-content-center align-items-center'><img src={courseImg} alt="Tutor two" style={{ width: "100%", maxWidth: "400px", height: "auto" }}/> </Col>
                <Col className='col-12 col-md-6'>
                <Row className='home-card'>
                    <Row className='mb-5' ><div><h2>
                    {t('Tutvuge meie kursustega')}
                        </h2></div></Row>
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem' , backgroundColor:"#ECEEF0" }}>
                        <Card.Body>
                           
                            <div className="row">
                                <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={engflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                                </div>
                                <div className="col-md-4">
                                    <img src={booktwo} alt="Tutor two"/> 
                                </div>
                                <div className="col-md-8">
                                    <p>{t('INGLISE KEEL TÄISKASVANUTELE')}</p>
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link'onClick={toConsultation} style={{cursor:'pointer'}}> {t('Konsultatsioon')} <img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>  
                        </Card.Body>
                        </Card>  
                    </Col>       
                    <Col className='mb-4'>
                        <Card style={{ width: '18rem', backgroundColor:"#FEF8E1" }}>
                        <Card.Body>
                            
                            <div className="row">
                            <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={engflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                                </div>
                                <div className="col-md-4">
                                    <img src={bookone} alt="Tutor two"/> 
                                </div>
                                <div className="col-md-8">
                                    <p>{t('INGLISE KEEL KOOLIÕPILASTELE')}</p>
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('Konsultatsioon')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem', backgroundColor:"#FEF8E1" }}>
                        <Card.Body>
                            <div className="row">
                            <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={estflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                                </div>
                                <div className="col-md-4">
                                    <img src={bookone} alt="Tutor two"/>
                                </div>
                                <div className="col-md-8">
                                    <p>{t('EESTI KEEL TÄISKASVANUTELE')}</p> 
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('Konsultatsioon')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col className='mb-4'>
                        <Card style={{ width: '18rem' , backgroundColor:"#ECEEF0" }}>
                        <Card.Body>
                            <div className="row">
                            <div className='d-flex justify-content-end'>
                                    <img className='mb-3' src={estflag} style={{height:"40px", width: "40px"}} 
                                    alt="English flag"/>
                             </div>
                                <div className="col-md-4">
                                    <img src={booktwo} alt="Tutor two"/>
                                </div>
                                <div className="col-md-8">
                                    <p>{t('EESTI KEEL KOOLIÕPILASTELE')}</p> 
                                </div>
                                 <div className='d-flex justify-content-end mt-3 swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('Konsultatsioon')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
                                 </div>
                            </div>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                </Col> 
            </Row>
           </div> 
           <div>
           <div className='d-flex justify-content-center align-items-center mt-5'>
           <img 
           src={sun} style={{height:"70px", width: "70px"}} 
           alt="sun"/> 
          </div>
          <div  className='text-center mt-5'>
                    <div className='flex '>
             <div>
           {t('Kui olete huvitatud õppimisest, palun broneerige konsultatsioon minuga, klõpsates')}
           </div>
           <div className='swinging-link' onClick={toConsultation} style={{ cursor: 'pointer' }}>{t('Konsultatsioon')}<img className='ms-3'
                                  src={circlearrow} style={{height:"30px", width: "30px"}} 
                                  alt="Tutor"/> 
             </div>
            </div>
    
             {t('et hinnata oma oskusi ja saada nõuetekohast juhendamist.')}
             <br />
             {t('Ootan kõiki huvilisi sõltumata vanusest õppima võõrkeeli rõõmuga, avastama keelte ilu,')}
             <br />
            {t('vallutama väljakutseid ja saavutama enda poolt püstitatud eesmärke.')} 
          </div> 
          </div>
         <div className='d-flex justify-content-center align-item-center mt-5'>
        {/* <Link to="/Consultation"> */}
         <Button className='her0-consulation-btn ' onClick={toConsultation}
         style={{backgroundColor: "#FCE79C", color: "#3F556B" , borderRadius: "50px", width: "200px", marginTop:"10px"}}>
         {t('Konsultatsioon')}
         </Button> 
         {/* </Link> */}
       </div>
        </div>
    </div>
  )
}

export default Home
