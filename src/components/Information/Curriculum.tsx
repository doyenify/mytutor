import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Button } from 'react-bootstrap';
import "./curriculum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Curriculum = () => {
  const [showcatalogbox, setShowcatalogbox] = useState(false)
  const [Tab1, setTab1] =  useState(true);
  const [Tab2, setTab2] =  useState(false);
  const [Tab3, setTab3] =  useState(false);
  const [Tab4, setTab4] =  useState(false);
  const [Tab5, setTab5] =  useState(false);
  const [Tab6, setTab6] =  useState(false);
  const [Tab7, setTab7] =  useState(false);
  const [Tab8, setTab8] =  useState(false);
 
  const {t} = useTranslation();

  const showTab1 = () => {
    setTab1(true)
    setTab2(false)
    setTab3(false)
    setTab4(false)
    setTab5(false)
    setTab6(false)
    setTab7(false)
    setTab8(false)
    setShowcatalogbox(false)
    // showCatalog();
  }

  const showTab2 = () => {
    setTab1(false)
    setTab2(true)
    setTab3(false)
    setTab4(false)
    setTab5(false)
    setTab6(false)
    setTab7(false)
    setTab8(false)
    setShowcatalogbox(false)
    // showCatalog();
  }

  const showTab3 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(true)
    setTab4(false)
    setTab5(false)
    setTab6(false)
    setTab7(false)
    setTab8(false)
    setShowcatalogbox(false)
    // showCatalog();
  }

  const showTab4 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(true)
    setTab5(false)
    setTab6(false)
    setTab7(false)
    setTab8(false)
    setShowcatalogbox(false)
    // showCatalog();
  }
  
  
  const showTab5 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(false)
    setTab5(true)
    setTab6(false)
    setTab7(false)
    setTab8(false)
    setShowcatalogbox(false)
    // showCatalog();
  }
  const showTab6 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(false)
    setTab5(false)
    setTab6(true)
    setTab7(false)
    setTab8(false)
    setShowcatalogbox(false)
    // showCatalog();
  }

  const showTab7 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(false)
    setTab5(false)
    setTab6(false)
    setTab7(true)
    setTab8(false)
    setShowcatalogbox(false)

    // showCatalog();
  }

  const showTab8 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(false)
    setTab5(false)
    setTab6(false)
    setTab7(false)
    setTab8(true)
    setShowcatalogbox(false)
    // showCatalog();
  }
  const showCatalog = () => {
    setShowcatalogbox(!showcatalogbox)
}

  
  return (
    <Container fluid>
    <div className={showcatalogbox ? "showcatalogbox": "hidecatalogbox"}>                                
      <div className="tab d-flex flex-column" style={{ width: '200px', marginTop: "135px" }}>
      <div className="text-center" onClick={showCatalog} style={{marginBottom: "10px", cursor: "pointer"}}>
           <FontAwesomeIcon className="socialmed2"  icon={faClose} style={{marginTop: "20px", marginRight: "10px", textDecoration: "none"}} /><span style={{fontWeight: "bold"}}>Close Curriculum tab</span> 
        </div>
        <hr/>
      <strong> <h6 className='mb-3' style={{backgroundColor:"#FBDC6E", color: "#3F556B", padding: "6px", borderRadius: "6px"}}>Eesti Keele Oppekava</h6> </strong>
        <div className="tabtext d-flex flex-column">
          <div className={Tab1 ? "activeTab" : "inactiveTab"} onClick={showTab1}>{t('Eesti keele A1-taseme õppekava')}</div>
          <div className={Tab2 ? "activeTab" : "inactiveTab"} onClick={showTab2}>{t('Eesti keele A2-taseme õppekava')}</div>
          <div className={Tab3 ? "activeTab" : "inactiveTab"} onClick={showTab3}>{t('Eesti keele B1-taseme õppekava')}</div>
          <div className={Tab4 ? "activeTab" : "inactiveTab"} onClick={showTab4}>{t('Eesti keele B2-taseme õppekava')}</div>
        </div>
       <strong> <h6  className='mb-3' style={{backgroundColor:"#FBDC6E", color: "#3F556B", padding: "6px", borderRadius: "6px"}}>Inglise Keele Oppekava</h6> </strong>
        <div className="tabtext d-flex flex-column">
          <div className={Tab5 ? "activeTab" : "inactiveTab"} onClick={showTab5}>{t('Inglise keele A1-taseme õppekava')}</div>
          <div className={Tab6 ? "activeTab" : "inactiveTab"} onClick={showTab6}>{t('Inglise keele A2-taseme õppekava')}</div>
          <div className={Tab7 ? "activeTab" : "inactiveTab"} onClick={showTab7}>{t('Inglise keele B1-taseme õppekava')}</div>
          <div className={Tab8 ? "activeTab" : "inactiveTab"} onClick={showTab8}>{t('Inglise keele B2-taseme õppekava')}</div>
        </div>
    
      </div>
  
   </div>



    <div className='d-flex'>
   

     
     {/* for desktop view */}
                                
      <div className="tab-desktop d-flex flex-column" style={{ width: '200px', marginTop: "135px" }}>
      <strong> <h6 className='mb-3' style={{backgroundColor:"#FBDC6E", color: "#3F556B", padding: "6px", borderRadius: "6px"}}>Eesti Keele Oppekava</h6> </strong>
        <div className="tabtext d-flex flex-column">
          <div className={Tab1 ? "activeTab" : "inactiveTab"} onClick={showTab1}>{t('Eesti keele A1-taseme õppekava')}</div>
          <div className={Tab2 ? "activeTab" : "inactiveTab"} onClick={showTab2}>{t('Eesti keele A2-taseme õppekava')}</div>
          <div className={Tab3 ? "activeTab" : "inactiveTab"} onClick={showTab3}>{t('Eesti keele B1-taseme õppekava')}</div>
          <div className={Tab4 ? "activeTab" : "inactiveTab"} onClick={showTab4}>{t('Eesti keele B2-taseme õppekava')}</div>
        </div>
       <strong> <h6  className='mb-3' style={{backgroundColor:"#FBDC6E", color: "#3F556B", padding: "6px", borderRadius: "6px"}}>Inglise Keele Oppekava</h6> </strong>
        <div className="tabtext d-flex flex-column">
          <div className={Tab5 ? "activeTab" : "inactiveTab"} onClick={showTab5}>{t('Inglise keele A1-taseme õppekava')}</div>
          <div className={Tab6 ? "activeTab" : "inactiveTab"} onClick={showTab6}>{t('Inglise keele A2-taseme õppekava')}</div>
          <div className={Tab7 ? "activeTab" : "inactiveTab"} onClick={showTab7}>{t('Inglise keele B1-taseme õppekava')}</div>
          <div className={Tab8 ? "activeTab" : "inactiveTab"} onClick={showTab8}>{t('Inglise keele B2-taseme õppekava')}</div>
        </div>
      </div>

   
    <div className="content" style={{marginTop:"80px"}}>
    <div className="CategoriesTab">
           <div className="text-center" onClick={showCatalog} style={{border: "1px solid #000000", cursor: "pointer", width: "15rem"}}>
                <h4 style={{padding: "7px"}}>Õppekava navigatsioon<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "7px", textDecoration: "none", marginTop: "7px"}} /></h4>
             </div>
   </div>
    {Tab1 ? (<>
      <div className="container mt-5" style={{marginTop:""}}>
        <div className='curri-header'>
      <div className="header-title mb-3"><h2>Eesti keele õppekava A1-tasemele</h2></div>
       <div className='download-btn'><a href="Eesti keele oppekava A1.docx" download="Eesti keele oppekava A1.docx">
      <Button style={{backgroundColor:"#3F556B"}}>Selle dokumendi allalaadimine</Button>
    </a>
    </div>
    </div> 
      <p><strong>Õppeasutuse nimi:</strong> Keelerõõmud Keeltekool OÜ</p>
      <p><strong>Õppekava nimetus:</strong> Eesti keele A1-taseme täiendkoolitus</p>
      <p><strong>Õppekavarühm:</strong> Keeleõpe, eesti keel võõrkeelena</p>
      <p><strong>Õppekava koostamise alus:</strong> <a href="https://bit.ly/3SQjqsZ">Euroopa keeleõppe raamdokument</a></p>
      <h3>Õppe maht ja ülesehitus:</h3>
      <p>120 akadeemilist tundi, millest vähemalt 80 tundi on auditoorset õpet ja 20-40 tundi iseseisvat tööd. Vastavalt tellija soovile võib korraldada erineva kestusega lühikursust, intensiiv- ja poolintensiivkursust. Auditoorses õppes keskendutakse peamiselt kõne arendamisele ja mõistmisele ning grammatika seaduspärasuste selgitamisele. Iseseisvalt tuleb kodus õppida sõnavara, teha grammatikaharjutusi ja kirjalikke loovtöid ning võimalusel praktiseerida keelt keelekeskkonnas.</p>
      <h3>Sihtgrupp ja õppe alustamise tingimused:</h3>
      <p>Täiskasvanud, kes soovivad omandada eesti keelt A1-tasemel. Õppijate vastuvõtt toimub sooviavalduse alusel ja osalus kinnitatakse koolituslepingus ja registreerimislehel.</p>
      <h3>Õppe eesmärk:</h3>
      <p>Omandada eesti keele oskus A1 tasemel, mis võimaldab toime tulla igapäevastes suhtlusolukordades, mis nõuavad otsest ja lihtsat infovahetust tuttavatel teemadel.</p>
      <h3>Õpiväljundid:</h3>
     <h5>Koolituse lõpuks iga õppija: </h5> 
      <ul>
        <li>saab aru tuttavatest sõnadest ja fraasidest, mis puudutavad teda ennast, tema perekonda ja vahetut ümbrust.</li>
        <li>saab aru tuttavatest nimedest, sõnadest ja väga lihtsatest lausetest, näiteks siltidel, plakatitel või kataloogides.</li>
        <li>oskab lihtsal viisil suhelda tingimusel, et vestluspartner räägib aeglaselt, vajadusel öeldut kordab või ümber sõnastab. Oskab küsida lihtsaid küsimusi ja neile vastata.</li>
        <li>oskab kasutada lihtsaid fraase ja lauseid kirjeldamaks oma perekonda, elukohta, tutavaid inimesi, oskab anda infot oma hariduse ja töö kohta.</li>
        <li>oskab kirjutada lühikest ja lihtsat teadet ning täita ankeete.</li>
      </ul>
      <h3>Õppe sisu:</h3>
      <p>Kõnearenduse teemad:</p>
      <ul>
  <li>Tervitamine. Tutvustamine. Hüvastijätmine.</li>
  <li>Isikuandmed ja ankeedid. Telefoninumbrid, posti- ja meiliaadressid.</li>
  <li>Tee küsimine, tee juhatamine. Kella küsimine ja ütlemine.</li>
  <li>Inimeste kirjeldamine (välimus ja iseloom), nende kohta küsimuste esitamine.</li>
  <li>Kuupäevad ja aastaajad. Ümbruse kirjeldamine.</li>
  <li>Ilm ja loodus. Eesti loodus, suuremad linnad ja saared.</li>
  <li>Telefonivestlused.</li>
  <li>Igapäevased situatsioonid poes, restoranis, lennujaamas, hotellis, pangas, juuksuris jne.</li>
  <li>Hobid, vaba aeg ja meelelahutus. Kino, teater, kontsert, sport, raamatud ja muusika.</li>
  <li>Päritolu, rahvused, keeled.</li>
  <li>Kodu ja perekond.</li>
  <li>Pühad ja tähtpäevad Eestis ja mujal.</li>
  <li>Töö ja õppimine, haridus ja ametid.</li>
  <li>Reisimine ja puhkus.</li>
  <li>Minu päev.</li>
  <li>Oma soovide ja eelistuste väljendamine, vestluspartneri soovide ja eelistuste kohta küsimine.</li>
</ul>
<h3>Kirjutamine:</h3>
<ul>
  <li>Ankeetide, taotluste, registreerimisvormide täitmine.</li>
  <li>Küsimuste koostamine ja neile vastamine.</li>
  <li>Ümbruse kirjeldus.</li>
  <li>Postkaardi kirjutamine (õnnitlus- või tänukaart, reisipostkaart).</li>
</ul>

<h3>Sõnavara:</h3>
<p>tähestik; igapäevased nimi-, omadus- ja tegu- ja kaassõnad; põhi- ja järgarvud; raha ja hinnad; kellaajad, nädalapäevad, kuud, aastaajad, pühad ja tähtpäevad; isikuandmed; ametid; haridus ja töö; hobid; reisimine ja puhkus; maad, rahvad, keeled; kodu, perekond ja sõbrad; linn, maa; ilm; hobid; värvid; riided; transport; toidukaubad, toidud, igapäevased viisakusväljendid ja käibefraasid.</p>

<h3>Grammatika:</h3>
<ul>
  <li>Tähestik; hääldamine ja ortograafia.</li>
  <li>Lauseehitus.</li>
  <li>Asesõnad, küsisõnad, arvsõnad, kaassõnad; sidesõnad ja määrsõnad.</li>
  <li>Ainsus ja mitmus. Jaatus ja eitus.</li>
  <li>Ma- ja da-tegevusnimi. Käändsõna käänamine.</li>
  <li>Tegusõna pööramine olevikus ja lihtminevikus.</li>
  <li>Käskiv ja tingiv kõneviis.</li>
</ul>

<h3>Õppekeskkond:</h3>
<p>Kursused viiakse läbi tunni alusel keeleõppeks renditavates ruumides Narvas või tellija soovil Zoomi veebiplatvormil.
   Õppeklassid vastavad tervisekaitse- ja ohutusnõuetele. Õppeklassides on internetiühendus ning nad on varustatud tahvli, 
   arvuti ja audio-visuaalse esitlustehnikaga.</p>

<h3>Õppemeetodid:</h3>
<p>Peamiselt rakendatakse kommunikatiivseid õppemeetodeid, nagu dialoogid, rollimängud, rühma- ja paaristööd,
   kasutatakse grammatikaharjutusi baasteadmiste omandamiseks. Samuti tehakse lugemis- ja kuulamisharjutusi õige
   häälduse harjutamiseks ning kõne ja kirjaliku teksti mõistmise arendamiseks.</p>

<h3>Hindamismeetodid. Hindamiskriteeriumid:</h3>
<p>Õppijatele antakse õpiväljundite omandamise kohta tagasisidet jooksvalt õppeprotsessi käigus. Hindamine toimub lõpueksamil,
   mis koosneb suulisest ja kirjalikust osast. Suuline osa on vestlus õppija ja õpetaja vahel. Kirjalik osa koosneb
    kuulamisharjutusest, grammatikaharjutusest, lugemisharjutusest ja kirjalikust loovtööst.</p>
<ul>
  <li><strong>Kuulamine</strong> – saab aru lihtsatest küsimustest ja kuuldud info põhissisust, kui vestluspartner
   räägib aeglaselt ja selgelt ning öeldut kordab. (Hinnatakse suulises ja kirjalikus osas)</li>
  <li><strong>Lugemine</strong> – saab aru lühikestest lihtsatest tekstidest; oskab leida informatsiooni lihtsatest 
  igapäevatekstidest (näiteks reklaamid, tööpakkumised, brošüürid, menüüd, sõiduplaanid). (Hinnatakse eksami kirjaliku
   osa grammatika- ja lugemisharjutustes.)</li>
  <li><strong>Rääkimine</strong> – oskab lühidalt rääkida oma tööst, perekonnast, sõpradest ja hobidest, lihtsate 
  sõnadega kirjeldada oma ümbrust, sündmusi ja inimesi. Oskab teed küsida ja juhatada. Oskab esitada küsimusi igapäevateemadel
   ning sellistele küsimustele vastata. Oskab pidada lühikest telefonivestlust. (Hinnatakse eksami suulise osa vestluses.)</li>
  <li><strong>Kirjutamine</strong> – oskab täita ankeeti ja kirjutada postkaarti. (Hinnatakse eksami kirjaliku osa loovtöös.)</li>
</ul>

<h3>Õppematerjalid:</h3>
<p>Põhiõpik on M. Simmul, I. Mangus „Tere!“ või M. Pesti, H. Ahi „E nagu Eesti“. Kursuse lisamaterjalid:</p>
<ol>
  <li><a href="http://www.keeleklikk.ee">www.keeleklikk.ee</a></li>
  <li><a href="http://www.learningapps.com">www.learningapps.com</a></li>
  <li><a href="http://www.quizlet.com">www.quizlet.com</a></li>
  <li><a href="http://www.wordwall.com">www.wordwall.com</a></li>
  <li><a href="https://harno.ee/eesti-keele-tasemeeksamid">https://harno.ee/eesti-keele-tasemeeksamid</a></li>
  <li><a href="https://sonaveeb.ee/">https://sonaveeb.ee/</a></li>
  <li>M. Kitsnik „Kirjuta mulle“</li>
  <li>S. Rammo, M. Teral, B. Klaas-Lang, M. Allik „Keel selgeks“</li>
</ol>

<h3>Täiendkoolituse lõpetamise tingimused ja väljastatavad dokumendid:</h3>
<p>Keelerõõmud Keeltekool OÜ väljastab kursuse lõpetanule tunnistuse tingimusel, et õppija on osalenud 
   vähemalt 80% auditoorsetest tundidest ja läbinud edukalt kursuse lõpueksami. Lõpueksam hõlmab kirjutamist, kuulamist,
   lugemist ja kõnelemist ning selle abil kontrollitakse eespool mainitud õpiväljundite omandamist.
    Eksam loetakse sooritatuks, kui õppija saavutab vähemalt 60% maksimaalsest punktisummast.</p>

<p>Tunnistusele kantakse lõpetatud kursuse nimetus ja kestus, kursuse toimumise aeg ning osaleja nimi ja isikukood. 
  Tunnistusele kirjutavad alla kursuse õpetaja ja keeltekooli juhataja. Kui osaleja ei läbinud edukalt kursuse 
  lõpueksamit ja/või ei osalenud vajalikul arvul tundides, antakse talle kursuse lõpus tõend, kus on märgitud 
  osaletud tundide arv. Tõendi allkirjastab Keelerõõmud Keeltekooli juhataja.</p>
  </div>
 </>):(<></>)}

 {Tab2 ? (<>
   <div className="container absoulte mt-5" style={{marginTop:""}}>
   
   <div className='curri-header'>
      <div className='header-title mb-3'><h2>Eesti keele õppekava A2-tasemele</h2> </div>
       <div className='download-btn' style={{right:"50px"}}><a href="Eesti keele oppekava A2.docx" download="Eesti keele oppekava A2.docx">
      <Button style={{backgroundColor:"#3F556B"}}>Selle dokumendi allalaadimine</Button>
    </a></div>
    </div> 
      <p><strong>Õppeasutuse nimi:</strong> Keelerõõmud Keeltekool OÜ</p>
      <p><strong>Õppekava nimetus:</strong> Eesti keele A2-taseme eksamiks ettevalmistamisele suunatud täiendkoolitus</p>
      <p><strong>Õppekavarühm:</strong> Keeleõpe, eesti keel võõrkeelena</p>
      <p><strong>Õppekava koostamise alus:</strong> Euroopa keeleõppe raamdokument (<a href="https://bit.ly/3SQjqsZ">https://bit.ly/3SQjqsZ</a>)</p>
  
      <h4>Õppe maht</h4>
        <p>200 akadeemilist tundi, millest kas 140 või 160 tundi on auditoorset õpet ja vastavalt kas 60 või 80 tundi on iseseisvat tööd.</p>
        <p>Vastavalt tellija soovile võib korraldada erineva kestusega lühikursust, intensiiv- ja poolintensiivkursust.</p>
        <p>Auditoorses õppes keskendutakse peamiselt kõne arendamisele ja mõistmisele ning grammatika seaduspärasuste selgitamisele. Iseseisvalt tuleb kodus õppida sõnavara, teha grammatikaharjutusi ja kirjalikke loovtöid ning võimalusel praktiseerida keelt keelekeskkonnas.</p>

        <h4>Sihtgrupp ja õppe alustamise tingimused</h4>
         <p>Õppijad, kes soovivad omandada eesti keelt A2-tasemel. Õppijate vastuvõtt toimub sooviavalduse alusel 
          ja osalus kinnitatakse koolituslepingus ja registreerimislehel. Õpingute alustamise tingimuseks on eesti 
          keele A1-taseme kursuse lõpetamine viimase aasta jooksul või Keelerõõmud Keeltekooli tasemetesti sooritamine.
          </p>
        
          <h4>Õppe eesmärk:</h4>
            <p>Omandada eesti keele oskus A2 tasemel, mis võimaldab toime tulla igapäevastes suhtlusolukordades,
               mis nõuavad otsest ja lihtsat infovahetust tuttavatel teemadel.
            </p>
        
  
      <h4>Õpiväljundid:</h4>
      <h5>Koolituse lõpuks iga õppija:</h5>
      <ul>
        <li>Saab aru fraasidest ja sageli kasutatavatest sõnadest, mis on vahetult seotud talle oluliste valdkondadega; saab aru lühikeste, lihtsate ja selgelt väljahääldatud ütluste põhisisust.</li>
        <li>Saab aru lühikestest lihtsatest tekstidest; oskab leida informatsiooni lihtsatest igapäevatekstidest, samuti saab aru lühikestest lihtsatest isiklikest kirjadest.</li>
        <li>Saab hakkama igapäevastes suhtlusolukordades, mis nõuavad otsest ja lihtsat infovahetust tuttavatel teemadel; oskab vestluses kaasa rääkida, ehkki ei oska veel ise vestlust juhtida.</li>
        <li>Oskab kasutada mitmeid fraase ja lauseid, et kirjeldada oma perekonda ja teisi inimesi, elutingimusi, hariduslikku tagapõhja, praegust või eelmist tööd.</li>
        <li>Oskab teha märkmeid ja koostada väga lihtsat isiklikku kirja.</li>
      </ul>
      <h4>Õppe sisu:</h4>
      <h5>Kõnearenduse teemad:</h5>
      <ul>
        <li>Tervitamine ja hüvastijätt. Tutvumine ja tutvustamine. Isikuandmed, telefoninumbrid, posti- ja meiliaadressid.
           Dokumendid ja ankeedid. Lihtne info enda, oma pere ja kodu kohta. Rahvus, vanus, päritolu, sünnikoht ja sünniaeg.</li>
        <li>Haridus ja töö. Elukutsed. Oma töö ja töökoha kirjeldus. Hariduskäik ja töö. CV. Tulevikuplaanid, elukutse valik,
           õppimisvõimalused. Tööülesanded. Tööpäeva kirjeldus.</li>
        <li>Teenindus ja teenindusasutused. Lahtiolekuajad, asukohad, teenuste liigid, hinnad ja raha. Sildid ja juhised.
           Pangas, postkontoris, juuksuris jm.</li>
        <li>Kodu ja kodukoht. Igapäevaelu. Kodu ümbruse kirjeldus. Perekond, lähedased ja kodune elu. Eluase. Kodu sisustus.
           Majapidamine. Külaliste kutsumine. Minu päev.</li>
        <li>Tervis ja heaolu. Arsti vastuvõtuajad. Apteegis. Ravimi infoleht. Enesetunde kirjeldus. Kiirabi kutsumine.</li>
        <li>Vaba aeg, harrastused ja meelelahutus. Huvid ja hobid. Vaba aja veetmise eelistused. Sport, muusika, raamatud.
           Kultuuri- ja meelelahutusasutused: asukohad, lahtiolekuajad, piletihinnad jm. Ürituse kirjeldus. Kutse peole jm.</li>
        <li>Sisseostud ja hinnad. Poed, asukohad, lahtiolekuajad. Kaubad, mõõdud, suurusnumbrid. Ostude kirjeldus. 
          Kauba hinna ja kvaliteedi võrdlus. Sooduspakkumised. Ostude eest tasumine.</li>
        <li>Söök ja jook. Söögikohtade asukohad, lahtiolekuajad, hinnad. Toitumisharjumused. Laua broneerimine restoranis.
           Menüüd ja toidu tellimine. Suhtlemine söögilauas. Toiduretseptid.</li>
        <li>Inimesed ja suhtlemine. Välimus ja iseloom. Inimeste iseloomustamine ja kirjeldamine. 
          Teadete ja sõnumite jätmine.</li>
        <li>Keskkond, kohad, loodus, ilm. Asukoha kirjeldus. Tee küsimine ja juhatamine. Ilmateade.
           Maakaart. Loomad, linnud, taimed.</li>
        <li>Kultuur ja keeled. Kultuurisündmused: toimumiskohad, -ajad, piletihinnad, esinejad. Ürituse kirjeldus.
           Keeleoskus, keeleõpe, keele praktiseerimine.</li>
        <li>Reisimine, transport, vaatamisväärsused. Ühistranspordi sõiduplaan. Sõidu algus- ja sihtpunkt. 
          Reis ja selle planeerimine. Tee leidmine ja juhatamine kaardi abil. Toa broneerimine hotellis. Reisipostkaart.</li>
      </ul>
     <h4>Kirjutamine:</h4> 
       <p>Ankeetide, taotluste, registreerimisvormide täitmine. Info küsimine ametiasutustest. Ümbruse kirjeldus,
       minevikusündmuste kirjeldus. Postkaardi kirjutamine (õnnitlus- või tänukaart, reisipostkaart). Kutse koostamine. 
       Minu päev. CV. Ametlik ja mitteametlik e-mail, märkmete tegemine, lühikirjand, arvamuste-argumentide avaldamine.</p>    
      <h4>Sõnavara:</h4>
      <p> Ülaltoodud kõnearendusteemade sõnavara.</p>
      <h4>Grammatika:</h4> 
      <p> Tähestik; hääldamine ja ortograafia. Lauseehitus. Asesõnad, küsisõnad, arvsõnad, kaassõnad; 
     sidesõnad ja määrsõnad. Omadussõna võrdlemine. Ainsus ja mitmus. Jaatus ja eitus. Ma- ja da-tegevusnimi.
    Käändsõna käänamine. Tegusõna pööramine olevikus ja lihtminevikus. Käskiv ja tingiv kõneviis. </p>
    <h4>Õppekeskkond:</h4> 
    <p> Kursused viiakse läbi tunni alusel keeleõppeks renditavates ruumides Narvas või tellija soovil Zoomi 
   veebiplatvormil. Õppeklassid vastavad tervisekaitse- ja ohutusnõuetele. Õppeklassides on internetiühendus ning nad on
    varustatud tahvli, arvuti ja audio-visuaalse esitlustehnikaga. </p>

 <h4>Õppemeetodid:</h4> 
  <p>Peamiselt rakendatakse kommunikatiivseid õppemeetodeid, nagu dialoogid, rollimängud, rühma- ja paaristööd,
   kasutatakse grammatikaharjutusi baasteadmiste omandamiseks. Samuti tehakse lugemis- ja kuulamisharjutusi õige häälduse
    harjutamiseks ning kõne ja kirjaliku teksti mõistmise arendamiseks.</p>

    <h4>Hindamismeetod. Hindamiskriteeriumid:</h4>
      <p>Õppijatele antakse õpiväljundite omandamise kohta tagasisidet jooksvalt õppeprotsessi käigus. Hindamine toimub lõpueksamil, 
        mis koosneb suulisest ja kirjalikust osast. Suuline osa on vestlus õppija ja õpetaja vahel. Kirjalik osa koosneb kuulamisharjutusest, grammatikaharjutusest, lugemisharjutusest ja kirjalikust loovtööst.</p>
      <ul>
        <li>
          Kuulamine – saab aru lihtsatest küsimustest ja kuuldud info põhissisust, kui vestluspartner räägib aeglaselt ja 
          selgelt ning öeldut kordab. (Hinnatakse suulises ja kirjalikus osas)
        </li>
        <li>
          Lugemine – saab aru lühikestest lihtsatest tekstidest; oskab leida informatsiooni lihtsatest igapäevatekstidest 
          (näiteks reklaamid, tööpakkumised, brošüürid, menüüd, sõiduplaanid); samuti saab aru lühikestest lihtsatest isiklikest kirjadest.
           (Hinnatakse eksami kirjaliku osa grammatika- ja lugemisharjutustes.)
        </li>
        <li>
          Rääkimine – oskab vastata enda kohta esitatud küsimustele, räägib lihtsate lausetega endast, oma perest, elukohast, 
          toidust. Oskab kasutada mitmeid fraase ja lauseid, et kirjeldada oma perekonda ja teisi inimesi, elutingimusi,
           hariduslikku tausta, praegust või varasemat tööd. (Hinnatakse eksami suulise osa vestluses.)
        </li>
        <li>
          Kirjutamine - oskab koostada lühikese isikliku kirja või teate. (Hinnatakse eksami kirjaliku osa loovtöös.)
        </li>
      </ul>
      <h4>Õppematerjalid:</h4>
      <h3>Põhiõpik:</h3>
      <ul>
        <li>M. Simmul, I. Mangus "Tere jälle!"</li>
        <li>M. Pesti, H. Ahi "E nagu Eesti"</li>
      </ul>
      <h3>Kursuse lisamaterjalid:</h3>
      <ol>
        <li><a href="https://www.keeleklikk.ee">www.keeleklikk.ee</a></li>
        <li><a href="https://www.learningapps.com">www.learningapps.com</a></li>
        <li><a href="https://www.quizlet.com">www.quizlet.com</a></li>
        <li><a href="https://www.wordwall.com">www.wordwall.com</a></li>
        <li><a href="https://harno.ee/eesti-keele-tasemeeksamid">https://harno.ee/eesti-keele-tasemeeksamid</a></li>
        <li><a href="https://sonaveeb.ee/">https://sonaveeb.ee/</a></li>
        <li>M. Kitsnik "Kirjuta mulle", 2012</li>
        <li>Helis Oidekivi "Harjuta eesti keelt teise keelena A2-B1", 2023</li>
        <li>S. Rammo, M. Teral, B. Klaas-Lang, M. Allik "Keel selgeks", 2012</li>
      </ol>
      <h4>Täiendkoolituse lõpetamise tingimused ja väljastatavad dokumendid:</h4>
      <p>
        Keelerõõmud Keeltekool OÜ väljastab kursuse lõpetanule tunnistuse tingimusel, et õppija on osalenud 
        vähemalt 80% auditoorsetest tundidest ja läbinud edukalt kursuse lõpueksami. Lõpueksam hõlmab kirjutamist,
         kuulamist, lugemist ja kõnelemist ning selle abil kontrollitakse eespool mainitud õpiväljundite omandamist.
          Eksam loetakse sooritatuks, kui õppija saavutab vähemalt 60% maksimaalsest punktisummast.
      </p>
      <p>
        Tunnistusele kantakse lõpetatud kursuse nimetus ja kestus, kursuse toimumise aeg ning osaleja nimi ja isikukood. 
        Tunnistusele kirjutavad alla kursuse õpetaja ja keeltekooli juhataja. Kui osaleja ei läbinud edukalt kursuse 
        lõpueksamit ja/või ei osalenud vajalikul arvul tundides, antakse talle kursuse lõpus tõend, kus on märgitud 
        osaletud tundide arv. Tõendi allkirjastab Keelerõõmud Keeltekooli juhataja.
      </p>             
   </div>
 </>):(<></>)}

  {Tab3 ? (<>
   <div className="container absolute mt-5">

     
   <div className='curri-header'>
      <div className='header-title mb-3'><h2>Eesti keele õppekava B1-tasemele</h2> </div>
       <div className='download-btn' style={{right:"50px"}}><a href="Eesti keele oppekava B1.docx" download="Eesti keele oppekava B1.docx">
      <Button style={{backgroundColor:"#3F556B"}}>Selle dokumendi allalaadimine</Button>
    </a></div>
    </div> 

    <p><strong>Õppeasutuse nimi:</strong> Keelerõõmud Keeltekool OÜ</p>
    <p> <strong>Õppekava nimetus:</strong>  Eesti keele B1-taseme eksamiks ettevalmistamisele suunatud täiendkoolitus</p>
    <p> <strong>Õppekavarühm:</strong>Keeleõpe, eesti keel võõrkeelena</p>
    <p><strong>Õppekava koostamise alus:</strong> <a href="https://bit.ly/3SQjqsZ">Euroopa keeleõppe raamdokument</a></p>
  
      <h4>Õppe maht:</h4>
      <p>250 akadeemilist tundi, millest 180 tundi on auditoorset õpet ja vastavalt 70 tundi on iseseisvat tööd.</p>
      <p>Auditoorses õppes keskendutakse peamiselt kõne arendamisele ja mõistmisele ning grammatika
       seaduspärasuste selgitamisele. Iseseisvalt tuleb kodus õppida sõnavara, teha grammatikaharjutusi
      ja kirjalikke loovtöid ning võimalusel praktiseerida keelt keelekeskkonnas.</p>

      <h4>Sihtgrupp ja õppe alustamise tingimused:</h4>
      <p>Õppijad, kes soovivad omandada eesti keelt B1-tasemel. Õppijate vastuvõtt toimub sooviavalduse alusel 
      ja osalus kinnitatakse koolituslepingus ja registreerimislehel. Õpingute alustamise tingimuseks 
      on eesti keele A2-taseme kursuse lõpetamine viimase aasta jooksul või riikliku A2-taseme eksami 
      sooritamine või Keelerõõmud Keeltekooli tasemetesti sooritamine.</p>

      <h4>Õppe eesmärk:</h4>
      <p>Omandada eesti keele oskus B1 tasemel, mis võimaldab eesti keelega hakkama saada iseseisva keelekasutaja tasemel.</p>
       <h4>Õpiväljundid:</h4>
      <ul>
        <li>Esitleb ennast ja kasutab viisakusväljendeid, avaldab erinevaid emotsioone nagu üllatus, rõõm, kurbus, huvi ja ükskõiksus ning reageerib nendele;</li>
        <li>Tunneb ja kasutab eesti keele sõnavara, mis võimaldab igapäevasuhtluses jälgida selget kõnet, suhelda töökeskkonnas tüüpilistes olukordades kolleegide ja klientidega ning mõista aeglaselt ja selgelt edastatud raadio- või telesaadete põhisisu;</li>
        <li>Loeb lühemaid tekste erinevatel teemadel;</li>
        <li>Suudab ettevalmistuseta vestelda tuttaval, huvitaval või olulisel teemal nagu pere, hobid, töö, reisimine ja päevasündmused;</li>
        <li>Kirjutab isiklikke kirju, teateid, täidab ankeete, koostab plaane ning edastab uudiseid;</li>
        <li>Kirjeldab lihtsate ja seostatud lausetega oma kogemusi, tegelikke või kujuteldavaid sündmusi ning oma kavatsusi lihtsa tekstina.</li>
      </ul>
    <h4>Õppe sisu:</h4>
      <h3>Kõnearenduse teemad:</h3>
      <ul>
        <li>Endast ja teistest rääkimine. Tutvumine ja enda tutvustamine. Isikuandmed. Enda ja oma pere põhjalik tutvustamine. Pereinfo vahetamine ja küsimine hariduse, elukutse, ameti ja huvide kohta. Pere traditsioonid. Pühad ja tähtpäevad. Erinevate ankeetide täitmine.</li>
        <li>Haridus. Info hariduse ja õpingute kohta. Haridusasutusi ja haridust puudutavast infost arusaamine (kutseharidusasutused, koolieelsed lasteasutused, kõrgkoolid ja täiskasvanuõpe, õppeained, info õppeasutuste kohta, õppevahendid, karjäärivõimalused, elukestev õpe). Keelteoskus.</li>
        <li>Teenindus. Pangateenused, postiteenused ja iluteenused (juuksur, ilusalong, kingaparandus). Info hankimine ja edastamine. Lahtiolekuajad, asukohad, teenuste liigid, hinnad ja raha. Sildid ja juhised. Asjaajamine asutustes. Info hankimine ja jagamine telefonis ja internetis. Avalikud asutused (politsei-  ja piirivalveamet, maksu- ja tolliamet, turvateenistus, tarbijakaitse, kohus ja uurimisorganid, õigusabi, päästeteenistus, sotsiaalabi ja haigekassa asutused).</li>
        <li>Toitlustus. Toitlustamine kodus ja kohvikus, toitlustusasutused. Toitumisharjumused. Tervislik, ebatervislik toitumine. Dieedid. Kombed söögilauas ja kõneetikett. Kohvikud, restoranid jm. Erinevad maitsed. Rahvusköögid. Toiduained. Retseptid. Laua reserveerimine, menüü mõistmine, tellimine. Toitlustuskohtade reklaamide mõistmine.</li>
        <li>Elukutse ja kutsevalik. Füüsiline ja vaimne töö, loominguline töö. Ametlik kiri. Kasulikud oskused. Tööotsimise kuulutus ning tööpakkumise kuulutus. Kuidas koostada kandideerimisavaldust? Avalduse kirjutamine. Tööintervjuu. Tööülesanded. Töötingimused. Tööluba.</li>
        <li>Keskkond, ilm ja loodus. Ilmateated ja ilma kirjeldamine, aastaajad, loodus- ja tehiskeskkond, maa ja linn.</li>
        <li>Kodu ja elamine. Eluase, ruumid, sisustus; maa- ja linnakodu; kinnisvara; eluaseme üürimine; kodu ja turvalisus; kodukoht ja selle ümbrus; kodu- ja lemmikloomad; argipäev kodus; kodune majapidamine.</li>
        <li>Igapäevaelu, kodu ja kodukoht. Oma pere elu kodus, tööl ja koolis. Elamistingimused ja eluase. Ruumid ja sisustus. Argipäev kodus. Kodu ja kodukoha plussid ja miinused. Kodukoht ja selle ümbruse kirjeldus. Kodune majapidamine ja peresisene tööjaotus. Kodu ja turvalisus. Külaliste kutsumine ja külaskäik. Viisakusvestlus. Minu päev.</li>
        <li>Transport, reisimine ja vaatamisväärsused. Reisimisvõimalused. Reisibürood ja pakuvad teenused. Ühistranspordi sõiduplaan. Sõidupiletite ostmine. Sihtpunkti jõudmine. Tee küsimine ja juhatamine. Reisimine ja puhkus. Teabe hankimine reisimise kohta. Korduvate teadete mõistmine. Toa broneerimine hotellis. Vaatamisväärsused. Postkaardi kirjutamine puhkusereisilt.</li>
        <li>Vaba aeg ja meelelahutus. Hobid. Vaba aja veetmise asutused ja kohad. Minu ja minu sõprade eelistused. Kino, teater, kontsert, spordiüritused jm kultuuriüritused. Ametlikud vastuvõtud ja külaskäigud. Kutsed. Vaba aega sisustava teenuse info ja lihtsate juhendite mõistmine.</li>
        <li>Ostud ja raha. Minu turvalised ostud – ostukeskuses või e-poes? Raha raiskamine. Kaubamajas. Päringud kaupade, teenuste kohta. Müügikuulutused ja vastamine kuulutustele. Allahindlused. Pangas. Laen ja intressid. Arve avamine.</li>
        <li>Puhkus. Puhkuse planeerimine ja kirjeldamine. Reisibüroo. Dialoog reisifirmas, huvitavad üritused, vaatamisväärsused. Pretensioon reisifirmale. Kindlustus. Hotellis. Reisidokumendid. Ühistransport. Tee juhatamine, juhiste küsimine. Linna kaart. Hääletamine. Liiklus.</li>
       <li>Tervis. Kehaosad. Haigused. Füüsiline ja vaimne tervis. Tervishoiu- ja tervistusasutused. Terviseteenused. Sport. Apteegis rohtude ja käsimüügi kaupade ostmine. Aja broneerimine arsti juurde, valvearstilt konsultatsiooni küsimine. Arsti juures.</li>
        <li>Minu Eesti. Eesti elu minu jaoks – sündmused, kus ma osalen. Reisisihtkohad Eestis. Mälestussambad ja skulptuurid. Teater ja lavastused. Eestile omased toidud. Vanasõnad. Mis Eestis on? Rahvakalendri tähtpäevad. Laulu- ja tantsupidu.</li>
        <li>Meedia ja Internet. Meedia. Uudised. Ilm. Päevakajalised sündmused. Artiklid. Reklaam. Infootsingud ja veebisuhtlus. Suhtlusportaalid. Facebook, Instagramm ja muud sotsiaalvõrgud. Blogid. Mängud. Sõnastiku ja sõnaraamatu kasutamine veebis. Koduleht.</li>
        </ul>

        <h3>Kirjutamine:</h3>
      <ul>
        <li>Ankeetide, taotluste, registreerimisvormide täitmine.</li>
        <li>Info küsimine ametiasutustest.</li>
        <li>Müügikuulutuse, tööpakkumise jne koostamine.</li>
        <li>Ümbruse kirjeldus, minevikusündmuste kirjeldus.</li>
        <li>Lugemispäeviku sissekanne.</li>
        <li>Blogipostitus ürituse külastamise kohta.</li>
        <li>Kiri sõbrale reisilt.</li>
        <li>Tööpäeva kirjeldus.</li>
        <li>CV.</li>
        <li>Ametlik ja mitteametlik kiri.</li>
        <li>Kokkuvõte loetud artiklist.</li>
        <li>Lühiettekanne.</li>
      </ul>
      <h3>Sõnavara:</h3>
      <p>Ülaltoodud kõnearendusteemade sõnavara. Sünonüümid ja antonüümid.</p>
      <h3>Grammatika:</h3>
      <ul>
        <li>Käändsõnad: käänamine ainsuses ja mitmuses, ühildumine.</li>
        <li>Liitsõnade moodustamine ja käänamine.</li>
        <li>Tegija- ja teonimi.</li>
        <li>Omadussõnade võrdlusastmed.</li>
        <li>Põhi- ja järgarvud.</li>
        <li>Ortograafia põhireeglid.</li>
        <li>Hääldus.</li>
        <li>Tegusõna: pööramine olevikus, liht-, enne- ja täisminevikus. Tuleviku väljendamine. Ma- ja da-infinitiivi, kesksõnade kasutamine, ühend- ja väljendtegusõnad; kindel, käskiv ja kaudne kõneviis; umbisikuline tegumood.</li>
        <li>Sõnade järjekord lauses.</li>
        <li>Määrsõnad ja kaassõnad.</li>
        <li>Sidesõnad.</li>
        <li>Kirjavahemärkide kasutus - sissejuhatus.</li>
        <li>Küsisõnad.</li>
      </ul>
 <h4>Õppekeskkond:</h4>
      <p>Kursused viiakse läbi tunni alusel keeleõppeks renditavates ruumides Narvas või tellija soovil Zoomi veebiplatvormil. Õppeklassid vastavad tervisekaitse- ja ohutusnõuetele. Õppeklassides on internetiühendus ning nad on varustatud tahvli, arvuti ja audio-visuaalse esitlustehnikaga.</p>

      <h4>Õppemeetodid:</h4>
      <p>Peamiselt rakendatakse kommunikatiivseid õppemeetodeid, nagu dialoogid, rollimängud, rühma- ja paaristööd, kasutatakse grammatikaharjutusi baasteadmiste omandamiseks. Samuti tehakse lugemis- ja kuulamisharjutusi õige häälduse harjutamiseks ning kõne ja kirjaliku teksti mõistmise arendamiseks.</p>

      <h4>Hindamismeetod. Hindamiskriteeriumid:</h4>
      <p>Õppijatele antakse õpiväljundite omandamise kohta tagasisidet jooksvalt õppeprotsessi käigus. Hindamine toimub lõpueksamil, mis koosneb suulisest ja kirjalikust osast. Suuline osa on vestlus õppija ja õpetaja vahel. Kirjalik osa koosneb kuulamisharjutusest, grammatikaharjutusest, lugemisharjutusest ja kirjalikust loovtööst.</p>

      <h3>Kuulamine:</h3>
      <p>Mõistab igapäevaelus (tööl, koolis, vabal ajal) regulaarselt korduvate teemade peamist mõtet ja olulisemaid üksikasju, suudab üldjoontes jälgida lühikest otsesõnalist juttu. Saab aru tuttaval teemal raadiouudiste ja ennustatava sisuga (st oodatud või rutiinsete) telefonikõnede põhisisust, kui jutt on suhteliselt aeglane ja selge. (Hinnatakse suulises ja kirjalikus osas)</p>

      <h3>Lugemine:</h3>
      <p>Saab aru otsesõnalistest faktipõhistest tekstidest, kui teema kuulub tema huvivaldkonda. Suudab lugeda lühemaid tekste erinevatel teemadel (ajaleheartiklid, brošüürid, kasutusjuhendid, lihtne ilukirjandus). (Hinnatakse eksami kirjaliku osa grammatika- ja lugemisharjutustes.)</p>

      <h3>Rääkimine:</h3>
      <p>Tuleb lihtsat keelt kasutades toime enamikus praktilistes olukordades, nagu info küsimine, selgituse palumine, oma arvamuse avaldamine, ettepanekute tegemine. (Hinnatakse eksami suulise osa vestluses.)</p>

      <h3>Kirjutamine:</h3>
      <p>Oskab kirjutada tuttaval teemal lihtsamaid üldsõnalisi tekste, ühendades lühemaid lauseid lihtsa järjendina. Oskab kirjutada isiklikke kirju ja teateid ning anda edasi uudiseid. (Hinnatakse eksami kirjaliku osa loovtöös.)</p>
      <h4>Õppematerjalid:</h4>
      <h3>Põhiõpikud:</h3>
      <ul>
        <li>M. Kitsnik, L. Kingisepp. Naljaga pooleks. 1 ja 2 osa. 2023</li>
        <li>I. Mangus, M. Simmul. Tere taas! Eesti keele õpik A2-B1 (B2). 2018</li>
        <li>M. Pesti, H. Ahi. E nagu Eesti. Eesti keele õpik algajatele A1+A2+B1. Neljas trükk. 2018</li>
        <li>M. Kitsnik. Eesti keele õpik B1, B2 ja eesti keele töövihik B1, B2. 2012</li>
      </ul>
      <h3>Kursuse lisamaterjalid:</h3>
      <ol>
        <li><a href="https://www.keeleklikk.ee">www.keeleklikk.ee</a></li>
        <li><a href="https://www.learningapps.com">www.learningapps.com</a></li>
        <li><a href="https://www.quizlet.com">www.quizlet.com</a></li>
        <li><a href="https://www.wordwall.com">www.wordwall.com</a></li>
        <li><a href="https://harno.ee/eesti-keele-tasemeeksamid">https://harno.ee/eesti-keele-tasemeeksamid</a></li>
        <li><a href="https://sonaveeb.ee/">https://sonaveeb.ee/</a></li>
        <li>I. Mangus, M. Simmul Eesti keele grammatika harjutuste ja vastustega. 2021</li>
        <li>P. Alp. Eesti keele B1-taseme eksam. 2011</li>
      </ol>

      <h4>Täiendkoolituse lõpetamise tingimused ja väljastatavad dokumendid:</h4>
      <p>Keelerõõmud Keeltekool OÜ väljastab kursuse lõpetanule tunnistuse tingimusel, et õppija on osalenud vähemalt 80% auditoorsetest tundidest ja läbinud edukalt kursuse lõpueksami. Lõpueksam hõlmab kirjutamist, kuulamist, lugemist ja kõnelemist ning selle abil kontrollitakse eespool mainitud õpiväljundite omandamist. Eksam loetakse sooritatuks, kui õppija saavutab vähemalt 60% maksimaalsest punktisummast.</p>

      <p>Tunnistusele kantakse lõpetatud kursuse nimetus ja kestus, kursuse toimumise aeg ning osaleja nimi ja isikukood. Tunnistusele kirjutavad alla kursuse õpetaja ja keeltekooli juhataja. Kui osaleja ei läbinud edukalt kursuse lõpueksamit ja/või ei osalenud vajalikul arvul tundides, antakse talle kursuse lõpus tõend, kus on märgitud osaletud tundide arv. Tõendi allkirjastab Keelerõõmud Keeltekooli juhataja.</p>
    </div>
     </>):(<></>)}


   {Tab4 ? (<>
   <div className="container absolute mt-5">

   <div className='curri-header'>
      <div className='header-title'><h2>Eesti keele õppekava B2-tasemele</h2> </div>
       <div className='download-btn' style={{right:"50px"}}><a href="Eesti keele oppekava B2.docx" download="Eesti keele oppekava B2.docx">
      <Button style={{backgroundColor:"#3F556B"}}>Selle dokumendi allalaadimine</Button>
    </a></div>
    </div> 

    <p><strong>Õppeasutuse nimi:</strong> Keelerõõmud Keeltekool OÜ</p>
    <p><strong>Õppekava nimetus: </strong> Eesti keele B2-tseme eksamiks ettevalmistamisele suunatud täiendkoolitus</p>
    <p><strong>Õppekavarühm: </strong>  Keeleõpe, eesti keel võõrkeelena</p>
    <p> <strong> Õppekava koostamise alus:</strong> <a href="https://bit.ly/3SQjqsZ">Euroopa keeleõppe raamdokument</a></p>

      <h3>Õppe maht:</h3>
      <p>450 akadeemilist tundi, millest 250 tundi on auditoorset õpet ja vastavalt 150 tundi on iseseisvat tööd.</p>
      <p>Vastavalt tellija soovile võib korraldada erineva kestusega lühikursust, intensiiv- ja poolintensiivkursust.</p>
      <p>Auditoorses õppes keskendutakse peamiselt kõne arendamisele ja mõistmisele ning grammatika seaduspärasuste selgitamisele. Iseseisvalt tuleb kodus õppida sõnavara, teha grammatikaharjutusi ja kirjalikke loovtöid ning võimalusel praktiseerida keelt keelekeskkonnas.</p>

      <h3>Sihtgrupp ja õppe alustamise tingimused:</h3>
      <p>Õppijad, kes soovivad omandada eesti keelt B2-tasemel. Õppijate vastuvõtt toimub sooviavalduse alusel ja osalus kinnitatakse koolituslepingus ja registreerimislehel. Õpingute alustamise tingimuseks on eesti keele B1-taseme kursuse lõpetamine viimase aasta jooksul või riikliku B1-taseme eksami sooritamine või Keelerõõmud Keeltekooli tasemetesti sooritamine.</p>
      <h3>Õppe eesmärk:</h3>
      <p>Omandada eesti keele oskus B2 tasemel, mis võimaldab eesti keeles spontaalselt, ladusalt ja iseseisvalt suhelda nii suuliselt kui ka kirjalikult.</p>
      
      <h3>Õpiväljundid:</h3>
      <h5>Koolituse lõpuks iga õppija:</h5>
      <ul>
        <li>Saab aru aktuaalsetel teemadel kirjutatud ajaleheartiklitest, loeb ja mõistab eestikeelset proosakirjandust.</li>
        <li>Oskab eesti keeles spontaanselt ja ladusalt vestelda. Suudab tuttaval teemal aktiivselt arutelus osaleda, oskab selgelt ja argumenteeritult oma seisukohti esitada.</li>
        <li>Suudab üksikasjalikult kirjeldada sündmusi ja olukordi, suudab pidada varem ettevalmistatud ettekandeid.</li>
        <li>Oskab kirjutada üksikasjalikke ja selge ülesehitusega tekste tuttavatel teemadel. Oskab kirjutada ameti- ja isiklikke kirju.</li>
      </ul>
      <h3>Õppe sisu:</h3>
      <h4>Kõnearenduse teemad:</h4>
      <ul>
        <li>
          <strong>Haridus ja töö.</strong> 
          <ul>
            <li>Eesti haridussüsteem: riiklikud ja eraõppeasutused.</li>
            <li>Kohalik koolivõrk, selle korrastamine. Koolikeskkond ja -traditsioonid; noorteorganisatsioonid.</li>
            <li>Kõrgkoolid, vastuvõtu tingimused, eriala valik, õppejõud, õppetöö korraldus. Üliõpilaste liidud ja nende tegevus.</li>
            <li>Vahetusõpilased. Välismaal õppimise võimalused. Täiend- ja ümberõpe. Õpioskused ja harjumused.</li>
          </ul>
        </li>
        <li>
          <strong>Elukutse, amet ja töö.</strong> 
          <ul>
            <li>Töövaldkonnad ja nende eripärad. Teatud valdkonna elukutsed, ametid ja tööd.</li>
            <li>Töö iseloomu ja probleemide kirjeldamine ning lahendamine.</li>
            <li>Tööandja ja töötaja suhted, lepingulised kohustused ja õigused. Töökeskkond ja tööturvalisus.</li>
            <li>Töötajate motiveerimine. Positiivsete tagasisidete andmine ja kaebuste lahendamine.</li>
            <li>Töökoosolekute korraldamine. Osalemine sõnavõtuga ja lühiettekannetega koosolekul.</li>
            <li>Tööjuhendite ja vajalike dokumentide mõistmine.</li>
          </ul>
          </li>
          <li>
          <strong>Teenindus</strong> 
          <ul>
            <li>Indiviid kui tarbija. Tarbimiskultuur. Erinevad kaubagrupid, tooted ja teenused. 
              Erinevate toodete ja teenuste kättesaadavus. Tarbija eelistused poodide, kaubamärkide, tootjate ja toodete osas. E-kaubandus, telefoniostud. E-arveldused. 
              Tarbija õigused ja nende kaitsmine. Kaebuste ja selgituste esitamine.</li>
          </ul>
        </li>
        <li>
          <strong>Igapäevaelu, kodu ja kodukoht</strong> 
          <ul>
            <li>Tänapäevane kodu. Maal ja linnas elamise eelised ja puudused. Erinevad abielu vormid ja
               põlvkondadevahelised suhted. Kohalik omavalitsus ja koostöö elanikega. Teenuste pakkujad. Kaebuste, küsimuste ja taotluste lahendamine. Problemaatilised olukorrad elukohas,
               mis vajavad lahendamist. Ettepanekud ja võimalikud lahendused.</li>
          </ul>
        </li>
        <li>
          <strong>Enesetunne ja tervis</strong> 
          <ul>
            <li>Meie tervis sõltub mitmest tegurist. Füüsiline ja vaimne heaolu ning kahjulikud harjumused. 
              Alkoholi, tubaka ja teiste narkootikumide mõju meie elule. Lubatud ravimid ja rahvameditsiini
               meetodid tervise taastamisel. Tervis ja selle hoidmine. Võimalused tervishoiuteenuste saamiseks ja osutamiseks. Digiteenused ja telefoniravi. Erakliinikud ja eraarstid. Arsti juurde pöördumine, kirjeldades hädaolukordi, 
              terviseprobleeme või õnnetusjuhtumeid. Eriarstide vastuvõtud. </li>
          </ul>
        </li>
        <li>
        <strong>	Vaba aeg ja meelelahutus</strong> 
        <ul>
          <li>Vaba aja eelistused ja huvialad. Harrastused ja meelelahutusvõimalused. Meedia,
           ajakirjad, internet, sotsiaalmeedia, filmid ja teater. Teatud filmi, raamatu või kultuuri- ja 
           spordisündmuse tutvustamine. Kultuurisündmused ja kultuuri tarbimine. Tuntud Eesti kultuuri- ja 
           ühiskonnategelased
           </li>
        </ul>
      </li>
      <li>
      <strong>Sisseostud, hinnad</strong>
      <ul>
        <li>Eelistused poodide, kaubamärkide, tootjate ja toodete valikul</li>
        <li>Võimalik vastumeelsus nende suhtes</li>
        <li>Kaupade ja teenuste reklaam ning reklaamimeetodid</li>
        <li>Makseviisid, sealhulgas pangalaenud</li>
        <li>Jaemüük ja hulgimüük</li>
        <li>Tarbija huvide kaitse</li>
      </ul>
    </li>

    <li>
      <strong>Söök ja jook</strong>
      <ul>
        <li>Toitumise tähtsus</li>
        <li>Põhilised toiduained ja nende mõju meie tervisele</li>
        <li>Pere ja koduse söögilaua igapäevased ja pidulikud traditsioonid, lauakombed</li>
        <li>Tervisliku toitumise olulisus ja põhimõtted</li>
        <li>Eritoiduained ja nende roll, tähtsus ning vajadus</li>
        <li>Taimetoitlus</li>
        <li>Menüü planeerimine, toiduvaliku tegemine, alkoholi tarbimine</li>
        <li>Lemmikrestoranid, kohvikud, menüüd, teenindus, maitseelamused</li>
        <li>Nõuanded retseptide kasutamisel ja toiduvalmistamisel</li>
        <li>Kaebused halvasti valmistatud toidu kohta</li>
        <li>Eesti rahvustoidud</li>
      </ul>
    </li>
    <li>
          <strong>Inimeste suhted ühiskonnas</strong>
          <ul>
            <li>Eesti Euroopa Liidu liikmesriigina</li>
            <li>Eesti haldusjaotus ja juhtimine</li>
            <li>Poliitika ja õigus</li>
            <li>Eesti erakonnad ja valimised</li>
            <li>Seadusandlik ja täidesaatev võim</li>
            <li>Eesti riiklik struktuur, ametlikud ja mitteametlikud organisatsioonid ning kodanike ühendused</li>
            <li>Nende liikmete õigused ja kohustused</li>
            <li>Heategevus</li>
            <li>Sotsiaalsed väärtused</li>
            <li>Moraal, eetika</li>
            <li>Kodaniku- ja inimõigused</li>
            <li>Isiklike ja tööalaste suhete loomine ja sõlmimine</li>
            <li>Aktiivne eluhoiak</li>
            <li>Teabe hankimine, oma seisukohtade esitamine, põhjendamine ja kaitsmine</li>
          </ul>
        </li>

        <li>
          <strong>Poliitika, aktuaalsed sündmused</strong>
          <ul>
            <li>Aktuaalsete sündmuste kohta teabe hankimine</li>
            <li>Uudised ja sündmused nii Eestis kui ka Euroopa tasandil</li>
            <li>Massimeedia roll inimeste arusaamade kujundamisel</li>
            <li>Arutelu ja diskussioon päevakajalistel teemadel</li>
          </ul>
        </li>
        <li>
        <strong>Majandus- ja õigussuhted</strong>
        <ul>
          <li>Eesti majandussüsteem ja õiguskord</li>
          <li>Majandus, maksud, ettevõtlusvormid</li>
          <li>Rahandus ja pangandus</li>
          <li>Oma ettevõtte loomine</li>
          <li>Äriplaani koostamine, sihtgrupp ja riskid</li>
          <li>Sotsiaalsed suhted ja institutsioonid</li>
          <li>Turvalisuse tagamine</li>
          <li>Politsei ja kohtusüsteemi tegevus</li>
          <li>Õiguskaitseorganite poole pöördumine</li>
          <li>Kuritegevuse vastu võitlemine</li>
          <li>Aktuaalsed majandusküsimused, nende hindamine ja oma seisukoha väljendamine</li>
        </ul>
      </li>

      <li>
        <strong>Keskkond, kohad, loodus, ilm</strong>
        <ul>
          <li>Aktuaalsed keskkonnaprobleemid</li>
          <li>Keskkonnareostuse peamised allikad</li>
          <li>Looduskaitse ja jäätmete sorteerimine</li>
          <li>Looduse kaitsmine ja inimkeskkonna säilitamine</li>
          <li>Loomastik ja taimestik</li>
          <li>Globaalne kliimamuutus</li>
          <li>Kohalike probleemide murekohad</li>
          <li>Heakorrastus ja kohalike elanike algatused</li>
        </ul>
      </li>

      
      <li>
      <strong>Kultuur ja keeled, keelte õppimine</strong>
      <ul>
        <li>Eesti kultuur ja traditsioonid</li>
        <li>Kaasõppijate päritolumaa kultuur</li>
        <li>Osalemine ja vaatlemine kultuuriüritustel Eestis erinevates rollides</li>
        <li>Kultuuride erinevused: kehakeel, žestid, sõnavara, liigutused, suhtumine, temperamend, kasvatus, hoiakud jne</li>
        <li>Võõrkeelte õppimine ja positiivse õpikeskkonna loomine</li>
        <li>Keele iseseisev omandamine</li>
      </ul>
    </li>

    <li>
      <strong>Reisimine, transport, vaatamisväärsused</strong>
      <ul>
        <li>Reisieelistused</li>
        <li>Transpordivahendid ja liiklus</li>
        <li>Liiklusohutus</li>
        <li>Kodukoha liiklemise võimalused</li>
        <li>Pretensioonid, nõuded, kaebused reisibüroo, transpordifirma või hotelli halva teenuse korral</li>
      </ul>
    </li>
      </ul>

      <h4>Kirjutamine</h4>
      <ul>
        <li>Ankeetide, taotluste, registreerimisvormide täitmine</li>
        <li>Info küsimine ametiasutustest</li>
        <li>Kaebuse koostamine</li>
        <li>Ümbruse kirjeldus, minevikusündmuste kirjeldus</li>
        <li>Lugemispäeviku sissekanne</li>
        <li>Blogipostitus ürituse külastamise kohta</li>
        <li>Sotsiaalmeedia postitus</li>
        <li>Tootetutvustus</li>
        <li>Müügipakkumine</li>
        <li>Tööpäeva kirjeldus</li>
        <li>Lühiaruande ja ettekande koostamine</li>
        <li>CV ja motivatsioonikiri</li>
        <li>Ametlik ja mitteametlik kiri</li>
        <li>Kokkuvõte loetud artiklist</li>
        <li>Lühikirjandid ja ümberjutustused</li>
        <li>Töömeilid, kutsed, tänukirjad jm</li>
      </ul>

      <h4>Sõnavara</h4>
      <ul>
        <li>Ülaltoodud kõnearendusteemade sõnavara</li>
        <li>Sünonüümid ja antonüümid</li>
        <li>Eesti vanasõnad ja kõnekäänud</li>
        <li>Lühendid</li>
      </ul>
      <h4>Grammatika</h4>
      <ul>
        <li>Käändsõnad:
          <ul>
            <li>Käänamine ainsuses ja mitmuses</li>
            <li>Lühike mitmus</li>
            <li>Ühildumine</li>
          </ul>
        </li>
        <li>Liitsõnade moodustamine ja käänamine</li>
        <li>Tegija- ja teonimi</li>
        <li>Omadussõnade võrdlusastmed</li>
        <li>Põhi- ja järgarvud</li>
        <li>Ortograafia põhireeglid</li>
        <li>Hääldus</li>
        <li>Tegusõna:
          <ul>
            <li>Pööramine olevikus, liht-, enne- ja täisminevikus</li>
            <li>Tuleviku väljendamine</li>
            <li>Ma- ja da-infinitiivi</li>
            <li>Kesksõnade kasutamine</li>
            <li>Ühend- ja väljendtegusõnad</li>
            <li>Kindel, käskiv ja kaudne kõneviis</li>
            <li>Umbisikuline tegumood</li>
          </ul>
        </li>
        <li>Sõnade järjekord lauses</li>
        <li>Määrsõnad ja kaassõnad</li>
        <li>Sidesõnad</li>
        <li>Lause liigid</li>
        <li>Kirjavahemärkide kasutus</li>
        <li>Küsisõnad</li>
      </ul>
      <h4>Õppekeskkond</h4>
      <p>Kursused viiakse läbi tunni alusel keeleõppeks renditavates ruumides Narvas või tellija soovil Zoomi veebiplatvormil. Õppeklassid vastavad tervisekaitse- ja ohutusnõuetele. Õppeklassides on internetiühendus ning nad on varustatud tahvli, arvuti ja audio-visuaalse esitlustehnikaga.</p>

      <h4>Õppemeetodid</h4>
      <p>Peamiselt rakendatakse kommunikatiivseid õppemeetodeid, nagu dialoogid, rollimängud, rühma- ja paaristööd, kasutatakse grammatikaharjutusi baasteadmiste omandamiseks. Samuti tehakse lugemis- ja kuulamisharjutusi õige häälduse harjutamiseks ning kõne ja kirjaliku teksti mõistmise arendamiseks.</p>

      <h4>Hindamismeetod. Hindamiskriteeriumid</h4>
      <p>Õppijatele antakse õpiväljundite omandamise kohta tagasisidet jooksvalt õppeprotsessi käigus. Hindamine toimub lõpueksamil, mis koosneb suulisest ja kirjalikust osast. Suuline osa on vestlus õppija ja õpetaja vahel. Kirjalik osa koosneb kuulamisharjutusest, grammatikaharjutusest, lugemisharjutusest ja kirjalikust loovtööst.</p>
   
      <h3>Kuulamine</h3>
      <p>Suudab jälgida abstraktset teemakäsitlust (nt vestlus, loeng, ettekanne) ja saab aru keeruka sisuga mõttevahetusest (nt väitlus), milles kõnelejad väljendavad erinevaid seisukohti. Mõistmist võivad takistada tugev taustamüra, keelenaljad, idioomid ja keerukad tarindid.</p>
      <p><strong>Hinnatakse eksami suulises ja kirjalikus osas.</strong></p>

      <h3>Lugemine</h3>
      <p>Suudab lugeda pikki ja keerukaid, sh abstraktseid tekste, leiab neist asjakohase teabe (valiklugemine) ning oskab selle põhjal teha üldistusi teksti mõtte ja autori arvamuse kohta. Loeb iseseisvalt, kohandades lugemise viisi ja kiirust sõltuvalt tekstist ja lugemise eesmärgist. Raskusi võib olla idioomide ja kultuurisidusate vihjete mõistmisega.</p>
      <p><strong>Hinnatakse eksami kirjaliku osa grammatika- ja lugemisharjutustes.</strong></p>

      <h3>Rääkimine</h3>
      <p>Väljendab ennast selgelt, suudab esineda pikemate monoloogidega. Suhtleb erinevatel teemadel, oskab vestlust juhtida ja anda tagasisidet. On võimeline jälgima oma keelekasutust, vajaduse korral sõnastab öeldu ümber ja suudab parandada enamiku vigadest. Oskab valida sobiva keeleregistri. Kõnerütmis ja -tempos on tunda emakeele mõju.</p>
      <p><strong>Hinnatakse eksami suulise osa vestluses.</strong></p>

      <h3>Kirjutamine</h3>
      <p>Oskab kirjutada esseed: arutluskäik on loogiline, tekst sidus ja teemakohane. Oskab refereerida nii kirjalikust kui ka suulisest allikast saadud informatsiooni. Kasutab erinevaid keeleregistreid sõltuvalt adressaadist (nt eristades isikliku, poolametliku ja ametliku kirja stiili). Lausesiseseid kirjavahemärke kasutab enamasti reeglipäraselt.</p>
      <p><strong>Hinnatakse eksami kirjaliku osa loovtöös.</strong></p>

      <h4>Õppematerjalid</h4>

      <h3>Põhiõpikud:</h3>
      <ol>
        <li>M. Pesti. K nagu Kihnu. Eesti keele õpik B2. 2023</li>
        <li>M. Kitsnik. Eesti keele õpik B1, B2. 2012</li>
      </ol>

      <h3>Lisamaterjalid:</h3>
      <ol>
        <li>I. Mangus M. Simmul Minu eesti keel. 2021</li>
        <li>I. Mangus M. Simmul Eesti keele grammatika harjutuste ja vastustega</li>
        <li><a href="https://www.learningapps.com">www.learningapps.com</a></li>
        <li><a href="https://www.quizlet.com">www.quizlet.com</a></li>
        <li><a href="https://www.wordwall.com">www.wordwall.com</a></li>
        <li><a href="https://harno.ee/eesti-keele-tasemeeksamid">https://harno.ee/eesti-keele-tasemeeksamid</a></li>
        <li><a href="https://sonaveeb.ee/">https://sonaveeb.ee/</a></li>
      </ol>

      <h4>Täiendkoolituse lõpetamise tingimused ja väljastatavad dokumendid</h4>

      <p>Keelerõõmud Keeltekool OÜ väljastab kursuse lõpetanule tunnistuse tingimusel, et õppija on osalenud vähemalt 80% auditoorsetest tundidest ja läbinud edukalt kursuse lõpueksami. Lõpueksam hõlmab kirjutamist, kuulamist, lugemist ja kõnelemist ning selle abil kontrollitakse eespool mainitud õpiväljundite omandamist. Eksam loetakse sooritatuks, kui õppija saavutab vähemalt 60% maksimaalsest punktisummast.</p>

      <p>Tunnistusele kantakse lõpetatud kursuse nimetus ja kestus, kursuse toimumise aeg ning osaleja nimi ja isikukood. Tunnistusele kirjutavad alla kursuse õpetaja ja keeltekooli juhataja. Kui osaleja ei läbinud edukalt kursuse lõpueksamit ja/või ei osalenud vajalikul arvul tundides, antakse talle kursuse lõpus tõend, kus on märgitud osaletud tundide arv. Tõendi allkirjastab Keelerõõmud Keeltekooli juhataja.</p>
    
  </div>
  </>):(<></>)}    
</div>
</div>
</Container>
  );
}

export default Curriculum;
