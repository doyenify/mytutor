import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import { Container, Button } from 'react-bootstrap';
import "./curriculum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import "./EffEduPro.css"

const EffEduPro = () => {
  const [showcatalogbox, setShowcatalogbox] = useState(false)
  const [Tab1, setTab1] =  useState(true);
  const [Tab2, setTab2] =  useState(false);
  const [Tab3, setTab3] =  useState(false);

  const {t} = useTranslation();

  const showTab1 = () => {
    setTab1(true)
    setTab2(false)
    setTab3(false)
    setShowcatalogbox(false)
  
  }
  const showTab2 = () => {
    setTab1(false)
    setTab2(true)
    setTab3(false)
    setShowcatalogbox(false)
   
  }

  const showTab3 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(true)
    setShowcatalogbox(false)
   
  }
  const showCatalog = () => {
    setShowcatalogbox(!showcatalogbox)
}


  return (
    <Container fluid>
       <div className={showcatalogbox ? "showcatalogbox": "hidecatalogbox"}>   
  <div className="tab d-flex flex-column" style={{ width: '200px', marginTop: "150px" }}>
  <div className="text-center" onClick={showCatalog} style={{marginBottom: "10px", cursor: "pointer"}}>
           <FontAwesomeIcon className="socialmed2"  icon={faClose} style={{marginTop: "20px", marginRight: "10px", textDecoration: "none"}} /><span style={{fontWeight: "bold"}}>Close Curriculum tab</span> 
        </div>
        <hr/>
        <h6 className='mb-3' style={{backgroundColor:"#FBDC6E", color: "#3F556B", padding: "6px", borderRadius: "6px"}}>Õppekorralduse ja kvaliteedi tagamise alused</h6>
        <div className="tabtext d-flex flex-column">
          <div className={Tab1 ? "activeTab" : "inactiveTab"} onClick={showTab1}>{t('Õppekorralduse ja kvaliteedi tagamise alused')}</div>
          <div className={Tab2 ? "activeTab" : "inactiveTab"} onClick={showTab2}>{t('Õppekorralduse alused')}</div>
          <div className={Tab3 ? "activeTab" : "inactiveTab"} onClick={showTab3}>{t('Kvaliteedi tagamise aluse')}</div>
      </div>
      </div>
      </div>
    <div className='d-flex'>
      {/* for desktop view */}
      <div className="tab-desktop d-flex flex-column" style={{ width: '200px', marginTop: "135px" }}>
        <h6 className='mb-3' style={{backgroundColor:"#FBDC6E", color: "#3F556B", padding: "6px", borderRadius: "6px"}}>Õppekorralduse ja kvaliteedi tagamise alused</h6>
        <div className="tabtext d-flex flex-column">
          <div className={Tab1 ? "activeTab" : "inactiveTab"} onClick={showTab1}>{t('Õppekorralduse ja kvaliteedi tagamise alused')}</div>
          <div className={Tab2 ? "activeTab" : "inactiveTab"} onClick={showTab2}>{t('Õppekorralduse alused')}</div>
          <div className={Tab3 ? "activeTab" : "inactiveTab"} onClick={showTab3}>{t('Kvaliteedi tagamise aluse')}</div>
      </div>
      </div>

    <div className="content" style={{marginTop:"80px"}}>
    <div className="CategoriesTab">
           <div className="text-center" onClick={showCatalog} style={{border: "1px solid #000000", cursor: "pointer", width: "15rem"}}>
                <h4 style={{padding: "7px"}}>Curriculum Menu <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "7px", textDecoration: "none", marginTop: "7px"}} /></h4>
             </div>
   </div>
    {Tab1 ? (<>
      <div className="container mt-5" style={{marginTop:""}}>
        <div className='curri-header'>
      <div className="header-title mb-3"><h3>Õppekorralduse ja kvaliteedi tagamise alused</h3></div>
       <div className='download-btn' style={{right:"50px"}}><a href="oppekorralduse-ja-kvaliteedi-tagamise-alused.docx" download="Eesti keele oppekava A1.docx">
      <Button style={{backgroundColor:"#3F556B"}}>Selle dokumendi allalaadimine</Button>
    </a></div>
    </div> 
 
      <h4>Õppekorralduse alused</h4>
      <h5> 1. Üldsätted</h5>
    
        <li>
         1.1 Keelerõõmud Keeltekool OÜ (registrikood 16806917) lähtub täienduskoolituse korraldamisel kehtivatest 
         täiskasvanuhariduse valdkonna õigusaktidest ning teistest seonduvatest õigusaktidest ja dokumentidest.
        </li>
        <li>
        1.2  Keelerõõmud Keeltekool OÜ on täiskasvanute ja kooliõpilaste koolitusasutus (õppekavarühm: keeleõpe),
         mis korraldab eesti ja inglise keele õpet.
        </li>
        <li>
         1.3 Õppetöö viiakse läbi õppetööks sobivates renditavates ruumides Narvas või
          koolituse tellija koolitusruumides. Klassides on esitlustehnika, kõik vajalikud vahendid,
           mööbli ümberpaigutamise võimalus rühmatöödeks. Ruumides järgitakse kõiki tehnika kasutamise
            eeskirju, tuleohutusnõudeid ja sanitaarnorme. Koolitusruumid vastavad tervisekaitsenõuetele.
             Kursused võivad toimuda ka interneti vahendusel, kasutades keskkonda Zoom. Digilahendus 
             võimaldab nii tööd kogu grupiga kui ka grupi jaotamise väiksemateks osadeks, et sooritada 
             rühma- ja paaristöid. Õpetajal on vastav varustus (tehnika, ring- valgustus jm vajalik 
             professionaalseks tööks), lisaks digipädevused erinevate keskkondade kasutamiseks 
             (Padlet, Quizlet, Kahoot jt), mida selline õppetöövorm nõuab.
        </li>
        <li>
         1.4 Individuaalõppena toimuvate koolituste puhul viiakse koolitus läbi õppija vajadustest 
         lähtuva individuaalse kava aluse, milla aluseks on vastava keeletaseme õppekava.
        </li>
        <li>
         1.5 Koolituse pikkuse arvestamise aluseks on akadeemiline tund (1 akadeemiline tund on 45 minutit).
        </li>
        <li>
         1.6 Keelerõõmud Keeltekool OÜ asjaajamiskeel on eesti, vene või inglise keel.
        </li>
        <li>
        1.7  Keeleoskustasemeid mõistetakse Euroopa keeleõppe raamdokumendi järgi.
        </li>
        <li>
         1.8 Õpingute alusdokument on õppekava, kus on määratletud:
          <ul>
            <li>1.8.1 õppekava nimetus;</li>
            <li>1.8.2 õppekavarühm;</li>
            <li>1.8.3 õpiväljundid;</li>
            <li>1.8.4 õpingute alustamise tingimused;</li>
            <li>1.8.5 õppe kogumaht, sealhulgas kontaktõppe ja /või veebiõpe ning iseseisva töö osakaal;</li>
            <li>1.8.6 õppe sisu;</li>
            <li>1.8.7 õppekeskkonna kirjeldus;</li>
            <li>1.8.8 õppematerjalide loend;</li>
            <li>1.8.9 lõpetamise tingimused ja väljastatavad dokumendid;</li>
            <li>1.8.10 1koolituse läbiviija kvalifikatsiooni ja töökogemuse kirjeldus.</li>
          </ul>
        </li>
        <h5>2. Täienduskoolituste vormid</h5>
       <li>
         2.1 Grupiõpe s.o  Õppevorm, kus keeleõppes osaleb korraga 6 kuni 12 sarnasel keeletasemel õppijat.
        </li>
        <li>
         2.2  Minigrupiõpe s.o  Õppevorm, kus keeleõppes osaleb korraga 3 kuni 5 sarnasel keeletasemel õppijat.
        </li>
        <li>
         2.4 Individuaalõpe s.o  Õppevorm, kus keeleõppes osaleb korraga 1 kuni 2 sarnasel tasemel õppijat.
        </li>
        <li>
          2.5 Õpe toimubKontakt- või veebiõppe vormis.
        </li>
        <h5> 3. Isikuandmete kogumine ja töötlemine</h5>
   
        <li>3.1 Keelerõõmud Keeltekool OÜ kogub õppijate kohta järgmisi andmeid:</li>
        <li>3.2 nimi</li>
        <li>3.3 isikukood</li>
        <li>3.4 kontakttelefon</li>
        <li>3.5 aadress</li>
        <li>3.6 e-posti aadress</li>
   
      <p>Isikukoodi on vaja tunnistuse või tõendi väljastamiseks. Isikuandmeid töödeldakse vastavalt Isikuandmete kaitse seadusele §6.</p>

      <h5>4. Koolitusele vastuvõtt</h5>
     
        <li>4.1 Õppija keeletase määratakse testi ja sellele järgneva vestluse alusel, õppija ja koolitaja koostöös. Õppija ja õpetaja arutavad koos läbi õppija eesmärgid ning lepitakse kokku õppevorm. Kui õppijaid on rohkem, siis komplekteeritakse grupid vastavalt keeletasemele ja baaskeelele.</li>
        <li>4.2 Koolitusele võetakse vastu õppijad, kes on sooritanud keeletaset selgitava testi, esitanud kirjaliku taotluse, sõlminud koolituslepingu ning tasunud väljastatud arve alusel õppemaksu enne õppetöö algust. Osaline tasumine lepitakse kokku kirjalikult.</li>
        <li>4.3 Asudes õppima veebikursusel on õppijal endal olemas veebiõppeks vajalik tehnika (arvuti koos kaamera ja mikrofoniga) ja kiire interneti püsiühendus.</li>
        <li>4.4 Õppijale saadetakse e-posti teel hiljemalt 5 päeva enne koolituse algust kinnitus, 
          kus on kirjas täpne koolituse toimumisaeg ja -koht jm oluline info.</li>
   
          <h2>5. Koolitusgrupi komplekteerimine</h2>
    
        <li>5.1 Õppegruppide moodustamise aluseks on õppijate keeleoskustase kursuse alguses, baaskeel ning õppijate eelistused kursuse toimumise aegade osas.</li>
        <li>5.2 Koolituse alustamiseks koostatakse koolitusel osalejate nimekiri, mille alusel toimub tundidest osavõtu arvestus. Arvestust peab õpetaja.</li>
     

      <h2>6. Koolituse tingimused, koolituse eest tasumine</h2>
    
        <li>6.1 Koolituse õpiväljundid omandanud ning hindamise läbinud õppijale väljastatakse tunnistus. Hindamisel mitteosalenud või hindamist mitteläbinud õppijale väljastatakse tõend.</li>
        <li>6.2 Koolituse eest tasumine toimub arve alusel. Arve saadetakse e-posti teel. Arve tuleb tasuda arvel märgitud tähtajaks.</li>
        <li>6.3 Koolituse eest on võimalus tasuda osamaksetena, mille suurus ja maksetähtajad fikseeritakse koolituslepingus.</li>
        <li>6.4 Koolituse tundidest puudumist või koolituse katkestamist ei tasaarveldata.</li>
        <li>6.5 Keelerõõmud Keeltekool OÜ-l on õigus mitte tagastada õppijatele õppetasu katkestatud kursuse eest (välja arvatud juhul, kui õppija on teatanud oma loobumisest kirjalikult hiljemalt peale teist õppetundi).</li>
        <li>6.6 Õppetasust vabastamist ei toimu.</li>
        <li>6.7 Keelerõõmud Keeltekool OÜ ei väljasta tunnistust või tõendit koolitusel osalemise kohta, kui õppetasu ei ole makstud täies mahus.</li>


        <h2>7. Koolirõõmud Keeltekool OÜ kohustub</h2>
      
        <li>7.1 Komplekteerima keelegrupid vastavalt õppijate keeletasemele.</li>
        <li>7.2 Läbi viima keelekursuse vastavalt kursuse õppekavale.</li>
        <li>7.3 Pidama tundide toimumise kohta arvestust.</li>
        <li>7.4 Õpetaja haiguse tõttu või mõnel muul põhjusel ära jäänud tunnid läbi viima tagantjärgi õppijatega eelnevalt kokkulepitult ja nendele sobival ajal.</li>
        <li>7.5 Koolirõõmud Keeltekool OÜ-l on õigus kursuse gruppi mitte avada, kui on registreerunud kavandatavast grupisuurusest vähem inimesi.</li>
        <li>7.6 Koolirõõmud Keeltekool OÜ-l on õigus muuta kursuse tundide arvu ja hinda, kui õppegruppi on registreerunud eeldatust vähem inimesi, teavitades muutustest grupi liikmeid enne kursuse algust.</li>
        <li>7.7 Koolituse kohta tagasiside saamiseks täidavad koolitusel osalejad kursuse lõpus elektroonilise tagasiside küsitluse.</li>
  

      <h2>8. Õppija kohustub</h2>
      
        <li>8.1 Osalema kursustel, millele ta on registreerunud või oma osalust kinnitanud kirjalikult taasesitatavas vormis.</li>
        <li>8.2 Õigeaegselt tasuma õppetasu Koolirõõmud Keeltekool OÜ poolt väljastatud arve alusel.</li>
        <li>8.3 Õppijal on õigus tasuda keelekursuste eest osade kaupa, maksimaalselt kuni neljas osas konkreetse Koolirõõmud Keeltekool OÜ poolt kehtestatud maksegraafiku alusel, mis fikseeritakse õppijaga sõlmitavas koolituslepingus.</li>
        <li>8.4 Õppijal on õigus loobuda keelekursusest hiljemalt peale teist tundi (teatades sellest kirjalikult), hilisem loobumine ei vabasta õppijat õppetasu tasumisest.</li>
        <li>8.5 Individuaalõppetunnist puudumisest teatab õppija õpetajale telefonitsi, meilitsi või sõnumiga vähemalt 24 tundi enne tunni algust. Teatamise kohustuse mittetäitmisel on õppija kohustatud tasuma tundide eest täies ulatuses.</li>
        <li>8.6 Grupitunnist puudumisest teatab õppija õpetajale telefonitsi, meilitsi või sõnumiga vähemalt 2 tundi enne tunni algust. Tunnist puudumist ei tasaarveldata ega tehta tundi hiljem järele.</li>
      

        <h2>9. Õpingute lõpetamise tingimused ja väljastatav dokument</h2>
     
        <li>9.1 Õpingute eduka lõpetamise eelduseks on osalemine vähemalt 80% tundidest ja iseseisvate tööde tegemine.</li>
        <li>9.2 Kursuse lõpetamiseks sooritavad õppijad tõenduspõhise testi kõigi nelja osaoskuse tõendamiseks. Test loetakse sooritatuks vähemalt 60% tulemusega.</li>
        <li>9.3 Kursuse lõpus saab õppija tema oskusi ja arengut kajastava tunnistuse, kui õpingute lõpetamise nõuded on täidetud ja õpiväljundid saavutatud.</li>
        <li>9.4 Tõend täienduskoolituses osalemise või selle läbimise kohta väljastatakse õppijale juhul, kui ta osales vähem kui pooltes tundides või kui ta ei saavutanud õppekava lõpetamiseks nõutud õpiväljundeid. Tõend väljastatakse ka juhul, kui koolitusel ei kontrollita õpiväljundite saavutamist või õppija katkestab koolituse. Sellisel juhul tuuakse tõendil (või selle lisas) välja ka info selle kohta, milliste teemade käsitlemisel õppija osales.</li>
        <h2>Kvaliteedi tagamise alused</h2>
    <h4>1. Üldsätted</h4>
     
        <li>
          1.1. Koolirõõmud Keeltekool OÜ juhatuse poolt asutatud koolitusasutuse
             nimi on Koolirõõmud Keeltekool OÜ.
        </li>
        <li>
          1.2. Koolirõõmud Keeltekool OÜ korraldab täiskasvanutele ja kooliõpilastele suunatud
           eesti ja inglise keele õppe täienduskoolitust.
        </li>
     

      <h4>2. Õppekavade kvaliteedi tagamise tingimused ja kord</h4>
      
        <li>
          2.1. Koolirõõmud Keeltekool OÜ õppekavade koostamise aluseks on 
          võetud täiskasvanute koolituse seadus, täienduskoolituse standard ja 
          Euroopa keeleõppe raamdokument.
        </li>
        <li>
          2.2. Õppekavade täiendamine toimub vajaduspõhiselt ja seadustest lähtuvalt.
        </li>
    

      <h4>3. Koolitajate kvaliteedi tagamise tingimused ja kord</h4>
      
        <li>
        3.1. Koolirõõmud Keeltekool OÜ lähtub täiskasvanute koolitaja eetikakoodeksist, mis on
        aluseks koolitaja ja koolituse kvaliteedi tagamisel.
        </li>
        <li>
          3.2. Õpetajal on erialane kõrgharidus ja ta omab töökogemust täiskasvanute koolitamise alal.
        </li>
        <li>
          3.3. Õppekvaliteedi tagamiseks osaleb õpetaja regulaarselt täienduskoolitustel: digipädevused,
           aktiivõppe meetodid, õppematerjalide koostamine.
        </li>
        <li>
          3.4. Õpetaja töökvaliteeti hinnatakse koolitusejärgselt osalejate
           suulise ja kirjaliku tagasisideküsitluse põhjal.
        </li>
      
        <h4>4. Õppekeskkonna kvaliteedi tagamise tingimused ja kord</h4>
      
        <li>4.1 Kõik registreerunud saavad teabe koolituse täpse korraldusliku poole kohta: ajakava, koolitusruumide või veebikeskkonna ja õppematerjalide kohta hiljemalt kursuse algusele eelneval nädalal.</li>
        <li>4.2 Keelekoolituse läbiviimiseks on loodud õppimist toetav keskkond.</li>
        <li>4.3 Õppeklassid asuvad Narvas, renditud klassiruumides või kursuse tellija ruumides. Kõik õppeklassid vastavad tervisekaitse nõuetele. Klassides on iga õppija jaoks piisavalt ruumi ja valgust. Klassid on varustatud tänapäevase esitlustehnika ja internetiühendusega.</li>
        <li>4.4 Õppijatele on kättesaadav joogivesi.</li>
    

      <h4>5. Täienduskoolituse kohta tagasiside kogumise kord</h4>
      
        <li>5.1 Iga kursuse lõpul täidavad osalejad internetipõhise või paberkandjal tagasisideküsitluse, kus annavad hinnangu kursuse sisule, enda keelealasele arengule, õppematerjalidele, õppemetoodikale, tundide ülesehitusele (tempo, õhkkond, selgituste arusaadavus, õpitava keele praktiseerimise võimalused jm), õpetaja tööle ja kursuse korralduslikule poolele ning teevad ettepanekuid õppetöö sisu ja vormi täiustamiseks.</li>
        <li>5.2 Õpetaja analüüsib tagasisideküsitlust parendamaks kõiki nimetatud aspekte.</li>
      
  </div>
 </>):(<></>)}

 {Tab2 ? (<>
  <div className="container absoulte mt-5" style={{marginTop:""}}>
  <h4>Õppekorralduse alused</h4>
      <h5> 1. Üldsätted</h5>
    
        <li>
         1.1 Keelerõõmud Keeltekool OÜ (registrikood 16806917) lähtub täienduskoolituse korraldamisel kehtivatest 
         täiskasvanuhariduse valdkonna õigusaktidest ning teistest seonduvatest õigusaktidest ja dokumentidest.
        </li>
        <li>
        1.2  Keelerõõmud Keeltekool OÜ on täiskasvanute ja kooliõpilaste koolitusasutus (õppekavarühm: keeleõpe),
         mis korraldab eesti ja inglise keele õpet.
        </li>
        <li>
         1.3 Õppetöö viiakse läbi õppetööks sobivates renditavates ruumides Narvas või
          koolituse tellija koolitusruumides. Klassides on esitlustehnika, kõik vajalikud vahendid,
           mööbli ümberpaigutamise võimalus rühmatöödeks. Ruumides järgitakse kõiki tehnika kasutamise
            eeskirju, tuleohutusnõudeid ja sanitaarnorme. Koolitusruumid vastavad tervisekaitsenõuetele.
             Kursused võivad toimuda ka interneti vahendusel, kasutades keskkonda Zoom. Digilahendus 
             võimaldab nii tööd kogu grupiga kui ka grupi jaotamise väiksemateks osadeks, et sooritada 
             rühma- ja paaristöid. Õpetajal on vastav varustus (tehnika, ring- valgustus jm vajalik 
             professionaalseks tööks), lisaks digipädevused erinevate keskkondade kasutamiseks 
             (Padlet, Quizlet, Kahoot jt), mida selline õppetöövorm nõuab.
        </li>
        <li>
         1.4 Individuaalõppena toimuvate koolituste puhul viiakse koolitus läbi õppija vajadustest 
         lähtuva individuaalse kava aluse, milla aluseks on vastava keeletaseme õppekava.
        </li>
        <li>
         1.5 Koolituse pikkuse arvestamise aluseks on akadeemiline tund (1 akadeemiline tund on 45 minutit).
        </li>
        <li>
         1.6 Keelerõõmud Keeltekool OÜ asjaajamiskeel on eesti, vene või inglise keel.
        </li>
        <li>
        1.7  Keeleoskustasemeid mõistetakse Euroopa keeleõppe raamdokumendi järgi.
        </li>
        <li>
         1.8 Õpingute alusdokument on õppekava, kus on määratletud:
          <ul>
            <li>1.8.1 õppekava nimetus;</li>
            <li>1.8.2 õppekavarühm;</li>
            <li>1.8.3 õpiväljundid;</li>
            <li>1.8.4 õpingute alustamise tingimused;</li>
            <li>1.8.5 õppe kogumaht, sealhulgas kontaktõppe ja /või veebiõpe ning iseseisva töö osakaal;</li>
            <li>1.8.6 õppe sisu;</li>
            <li>1.8.7 õppekeskkonna kirjeldus;</li>
            <li>1.8.8 õppematerjalide loend;</li>
            <li>1.8.9 lõpetamise tingimused ja väljastatavad dokumendid;</li>
            <li>1.8.10 1koolituse läbiviija kvalifikatsiooni ja töökogemuse kirjeldus.</li>
          </ul>
        </li>
        <h5>2. Täienduskoolituste vormid</h5>
       <li>
         2.1 Grupiõpe s.o  Õppevorm, kus keeleõppes osaleb korraga 6 kuni 12 sarnasel keeletasemel õppijat.
        </li>
        <li>
         2.2  Minigrupiõpe s.o  Õppevorm, kus keeleõppes osaleb korraga 3 kuni 5 sarnasel keeletasemel õppijat.
        </li>
        <li>
         2.4 Individuaalõpe s.o  Õppevorm, kus keeleõppes osaleb korraga 1 kuni 2 sarnasel tasemel õppijat.
        </li>
        <li>
          2.5 Õpe toimubKontakt- või veebiõppe vormis.
        </li>
        <h5> 3. Isikuandmete kogumine ja töötlemine</h5>
   
        <li>3.1 Keelerõõmud Keeltekool OÜ kogub õppijate kohta järgmisi andmeid:</li>
        <li>3.2 nimi</li>
        <li>3.3 isikukood</li>
        <li>3.4 kontakttelefon</li>
        <li>3.5 aadress</li>
        <li>3.6 e-posti aadress</li>
   
      <p>Isikukoodi on vaja tunnistuse või tõendi väljastamiseks. Isikuandmeid töödeldakse vastavalt Isikuandmete kaitse seadusele §6.</p>

      <h5>4. Koolitusele vastuvõtt</h5>
     
        <li>4.1 Õppija keeletase määratakse testi ja sellele järgneva vestluse alusel, õppija ja koolitaja koostöös. Õppija ja õpetaja arutavad koos läbi õppija eesmärgid ning lepitakse kokku õppevorm. Kui õppijaid on rohkem, siis komplekteeritakse grupid vastavalt keeletasemele ja baaskeelele.</li>
        <li>4.2 Koolitusele võetakse vastu õppijad, kes on sooritanud keeletaset selgitava testi, esitanud kirjaliku taotluse, sõlminud koolituslepingu ning tasunud väljastatud arve alusel õppemaksu enne õppetöö algust. Osaline tasumine lepitakse kokku kirjalikult.</li>
        <li>4.3 Asudes õppima veebikursusel on õppijal endal olemas veebiõppeks vajalik tehnika (arvuti koos kaamera ja mikrofoniga) ja kiire interneti püsiühendus.</li>
        <li>4.4 Õppijale saadetakse e-posti teel hiljemalt 5 päeva enne koolituse algust kinnitus, 
          kus on kirjas täpne koolituse toimumisaeg ja -koht jm oluline info.</li>
   
          <h2>5. Koolitusgrupi komplekteerimine</h2>
    
        <li>5.1 Õppegruppide moodustamise aluseks on õppijate keeleoskustase kursuse alguses, baaskeel ning õppijate eelistused kursuse toimumise aegade osas.</li>
        <li>5.2 Koolituse alustamiseks koostatakse koolitusel osalejate nimekiri, mille alusel toimub tundidest osavõtu arvestus. Arvestust peab õpetaja.</li>
     

      <h2>6. Koolituse tingimused, koolituse eest tasumine</h2>
    
        <li>6.1 Koolituse õpiväljundid omandanud ning hindamise läbinud õppijale väljastatakse tunnistus. Hindamisel mitteosalenud või hindamist mitteläbinud õppijale väljastatakse tõend.</li>
        <li>6.2 Koolituse eest tasumine toimub arve alusel. Arve saadetakse e-posti teel. Arve tuleb tasuda arvel märgitud tähtajaks.</li>
        <li>6.3 Koolituse eest on võimalus tasuda osamaksetena, mille suurus ja maksetähtajad fikseeritakse koolituslepingus.</li>
        <li>6.4 Koolituse tundidest puudumist või koolituse katkestamist ei tasaarveldata.</li>
        <li>6.5 Keelerõõmud Keeltekool OÜ-l on õigus mitte tagastada õppijatele õppetasu katkestatud kursuse eest (välja arvatud juhul, kui õppija on teatanud oma loobumisest kirjalikult hiljemalt peale teist õppetundi).</li>
        <li>6.6 Õppetasust vabastamist ei toimu.</li>
        <li>6.7 Keelerõõmud Keeltekool OÜ ei väljasta tunnistust või tõendit koolitusel osalemise kohta, kui õppetasu ei ole makstud täies mahus.</li>


        <h2>7. Koolirõõmud Keeltekool OÜ kohustub</h2>
      
        <li>7.1 Komplekteerima keelegrupid vastavalt õppijate keeletasemele.</li>
        <li>7.2 Läbi viima keelekursuse vastavalt kursuse õppekavale.</li>
        <li>7.3 Pidama tundide toimumise kohta arvestust.</li>
        <li>7.4 Õpetaja haiguse tõttu või mõnel muul põhjusel ära jäänud tunnid läbi viima tagantjärgi õppijatega eelnevalt kokkulepitult ja nendele sobival ajal.</li>
        <li>7.5 Koolirõõmud Keeltekool OÜ-l on õigus kursuse gruppi mitte avada, kui on registreerunud kavandatavast grupisuurusest vähem inimesi.</li>
        <li>7.6 Koolirõõmud Keeltekool OÜ-l on õigus muuta kursuse tundide arvu ja hinda, kui õppegruppi on registreerunud eeldatust vähem inimesi, teavitades muutustest grupi liikmeid enne kursuse algust.</li>
        <li>7.7 Koolituse kohta tagasiside saamiseks täidavad koolitusel osalejad kursuse lõpus elektroonilise tagasiside küsitluse.</li>
  

      <h2>8. Õppija kohustub</h2>
      
        <li>8.1 Osalema kursustel, millele ta on registreerunud või oma osalust kinnitanud kirjalikult taasesitatavas vormis.</li>
        <li>8.2 Õigeaegselt tasuma õppetasu Koolirõõmud Keeltekool OÜ poolt väljastatud arve alusel.</li>
        <li>8.3 Õppijal on õigus tasuda keelekursuste eest osade kaupa, maksimaalselt kuni neljas osas konkreetse Koolirõõmud Keeltekool OÜ poolt kehtestatud maksegraafiku alusel, mis fikseeritakse õppijaga sõlmitavas koolituslepingus.</li>
        <li>8.4 Õppijal on õigus loobuda keelekursusest hiljemalt peale teist tundi (teatades sellest kirjalikult), hilisem loobumine ei vabasta õppijat õppetasu tasumisest.</li>
        <li>8.5 Individuaalõppetunnist puudumisest teatab õppija õpetajale telefonitsi, meilitsi või sõnumiga vähemalt 24 tundi enne tunni algust. Teatamise kohustuse mittetäitmisel on õppija kohustatud tasuma tundide eest täies ulatuses.</li>
        <li>8.6 Grupitunnist puudumisest teatab õppija õpetajale telefonitsi, meilitsi või sõnumiga vähemalt 2 tundi enne tunni algust. Tunnist puudumist ei tasaarveldata ega tehta tundi hiljem järele.</li>
      

        <h2>9. Õpingute lõpetamise tingimused ja väljastatav dokument</h2>
     
        <li>9.1 Õpingute eduka lõpetamise eelduseks on osalemine vähemalt 80% tundidest ja iseseisvate tööde tegemine.</li>
        <li>9.2 Kursuse lõpetamiseks sooritavad õppijad tõenduspõhise testi kõigi nelja osaoskuse tõendamiseks. Test loetakse sooritatuks vähemalt 60% tulemusega.</li>
        <li>9.3 Kursuse lõpus saab õppija tema oskusi ja arengut kajastava tunnistuse, kui õpingute lõpetamise nõuded on täidetud ja õpiväljundid saavutatud.</li>
        <li>9.4 Tõend täienduskoolituses osalemise või selle läbimise kohta väljastatakse õppijale juhul, kui ta osales vähem kui pooltes tundides või kui ta ei saavutanud õppekava lõpetamiseks nõutud õpiväljundeid. Tõend väljastatakse ka juhul, kui koolitusel ei kontrollita õpiväljundite saavutamist või õppija katkestab koolituse. Sellisel juhul tuuakse tõendil (või selle lisas) välja ka info selle kohta, milliste teemade käsitlemisel õppija osales.</li>
   </div>
 </>):(<></>)}

  {Tab3 ? (<>
    <div className="container absoulte mt-5" style={{marginTop:""}}>
      <h2>Kvaliteedi tagamise alused</h2>
    <h4>1. Üldsätted</h4>
     
        <li>
          1.1. Koolirõõmud Keeltekool OÜ juhatuse poolt asutatud koolitusasutuse
             nimi on Koolirõõmud Keeltekool OÜ.
        </li>
        <li>
          1.2. Koolirõõmud Keeltekool OÜ korraldab täiskasvanutele ja kooliõpilastele suunatud
           eesti ja inglise keele õppe täienduskoolitust.
        </li>
     

      <h4>2. Õppekavade kvaliteedi tagamise tingimused ja kord</h4>
      
        <li>
          2.1. Koolirõõmud Keeltekool OÜ õppekavade koostamise aluseks on 
          võetud täiskasvanute koolituse seadus, täienduskoolituse standard ja 
          Euroopa keeleõppe raamdokument.
        </li>
        <li>
          2.2. Õppekavade täiendamine toimub vajaduspõhiselt ja seadustest lähtuvalt.
        </li>
    

      <h4>3. Koolitajate kvaliteedi tagamise tingimused ja kord</h4>
      
        <li>
        3.1. Koolirõõmud Keeltekool OÜ lähtub täiskasvanute koolitaja eetikakoodeksist, mis on
        aluseks koolitaja ja koolituse kvaliteedi tagamisel.
        </li>
        <li>
          3.2. Õpetajal on erialane kõrgharidus ja ta omab töökogemust täiskasvanute koolitamise alal.
        </li>
        <li>
          3.3. Õppekvaliteedi tagamiseks osaleb õpetaja regulaarselt täienduskoolitustel: digipädevused,
           aktiivõppe meetodid, õppematerjalide koostamine.
        </li>
        <li>
          3.4. Õpetaja töökvaliteeti hinnatakse koolitusejärgselt osalejate
           suulise ja kirjaliku tagasisideküsitluse põhjal.
        </li>
      
        <h4>4. Õppekeskkonna kvaliteedi tagamise tingimused ja kord</h4>
      
        <li>4.1 Kõik registreerunud saavad teabe koolituse täpse korraldusliku poole kohta: ajakava, koolitusruumide või veebikeskkonna ja õppematerjalide kohta hiljemalt kursuse algusele eelneval nädalal.</li>
        <li>4.2 Keelekoolituse läbiviimiseks on loodud õppimist toetav keskkond.</li>
        <li>4.3 Õppeklassid asuvad Narvas, renditud klassiruumides või kursuse tellija ruumides. Kõik õppeklassid vastavad tervisekaitse nõuetele. Klassides on iga õppija jaoks piisavalt ruumi ja valgust. Klassid on varustatud tänapäevase esitlustehnika ja internetiühendusega.</li>
        <li>4.4 Õppijatele on kättesaadav joogivesi.</li>
    

      <h4>5. Täienduskoolituse kohta tagasiside kogumise kord</h4>
      
        <li>5.1 Iga kursuse lõpul täidavad osalejad internetipõhise või paberkandjal tagasisideküsitluse, kus annavad hinnangu kursuse sisule, enda keelealasele arengule, õppematerjalidele, õppemetoodikale, tundide ülesehitusele (tempo, õhkkond, selgituste arusaadavus, õpitava keele praktiseerimise võimalused jm), õpetaja tööle ja kursuse korralduslikule poolele ning teevad ettepanekuid õppetöö sisu ja vormi täiustamiseks.</li>
        <li>5.2 Õpetaja analüüsib tagasisideküsitlust parendamaks kõiki nimetatud aspekte.</li>
      

      </div>
     </>):(<></>)}

   
</div>
</div>
</Container>
  );
}

export default EffEduPro;
