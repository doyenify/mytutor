import React from 'react'
import { useTranslation } from 'react-i18next';

// import './home.css';


const LearningEnv = () => {
    const {t} = useTranslation();
  
   
  return (
    <>
    <div className="container" style={{marginTop:"150px"}}>
    <h4>{t('Koolitusele vastuvõtt ja õppegrupi komplekteerimine')}</h4>
    
<h4 className='mt-3'>{t('1. Koolitusele vastuvõtt')}</h4>

<li className="listing-items">
  {t('1.1. Õppija keeletase määratakse testi ja sellele järgneva vestluse alusel, õppija ja koolitaja koostöös.')}  
  </li>
  <li className="listing-items">
  {t('1.2. Koolitusele võetakse vastu õppijad, kes on sooritanud keeletaset selgitava testi, esitanud kirjaliku taotluse, sõlminud koolituslepingu ning tasunud väljastatud arve alusel õppemaksu enne õppetö ö algust. Osaline tasumine lepitakse kokku kirjalikult.')}  
  </li>
  <li className="listing-items">
  {t('1.3. Koolituse pikkuse arvestamise aluseks on akadeemiline tund (1 akadeemiline tund on 45 minutit).')}
    
  </li>
  <li className="listing-items">
  {t('1.4. Õppijale saadetakse e-posti teel hiljemalt 5 päeva enne koolituse algust kinnitus, kuson kirjas täpne koolituse toimumisaeg ja -koht jm oluline info.')}  
  </li>


<h4 className='mt-3'>{t('2. Õppegrupi komplekteerimin')}</h4>

<li className="listing-items">
  {t('2.1. Õppegrupi moodustamise aluseks on õppijate keeleoskustase kursuse alguses, baaskeel ning õppijate eelistused kursuse toimumise aegade osas.')}
    
  </li>
  <li className="listing-items">
  {t('2.2. Koolituse alustamiseks koostatakse osalejate nimekiri, mille alusel toimub tundidest osavõtu arvestus. Arvestust peab õpetaja.')}
   
  </li>


  <h4 className='mt-3'>{t('3. Koolituse eest tasumine')}</h4>


  <li className="listing-items">
  {t('3.1. Koolituse eest tasumine toimub arve alusel. Arve saadetakse e-posti teel. Arve tuleb tasuda arvel märgitud tähtajaks3. Koolituse eest tasumine')}
   
  </li>
  <li className="listing-items">
  {t('3.2. Koolituse eest on võimalus tasuda osamaksetena, mille suurus ja maksetähtajad fikseeritakse koolituslepingus.')}
  </li>
  <li className="listing-items">
  {t('3.3. Õppetasust vabastamist ei toimu.')}
    
  </li>
  <li className="listing-items">
  {t('3.4. Koolituse tundidest puudumist või koolituse katkestamist ei tasaarveldata.')}
    
  </li>
  <li className="listing-items">
  {t('3.5. Keeltekoolil on õigus mitte tagastada õppijatele õppetasu katkestatud kursuse eest (välja arvatud juhul, kui õppija on teatanud oma loobumisest kirjalikult hiljemalt peale teist õppetundi).')}
    
  </li>
  <li className="listing-items">
  {t('3.6. Keeltekool ei väljasta tunnistust või tõendit koolitusel osalemise kohta, kui õppetasu ei ole makstud täies mahus.')}
 
  </li>

  <h4 className='mt-3'>{t('4. Keeltekool kohustub')}</h4>
  <li className="listing-items">
  {t('4.1. Õpetaja haiguse tõttu või mõnel muul õpetajast tuleneval põhjusel ära jäänud tunnid viiakse läbi tagantjärgi õppijatega eelnevalt kokkulepitult ja nendele sobival ajal.')} 
    
  </li>
  <li className="listing-items">
  {t('4.2. Keeltekoolil on õigus kursuse gruppi mitte avada, kui on registreerunud kavandatavast grupisuurusest vähem inimesi.')}
   
  </li>
  <li className="listing-items">
  {t('4.3. Keeltekoolil on õigus muuta kursuse tundide arvu ja hinda, kui õppegruppi on registreerunud eeldatust vähem inimesi, teavitades muutustest grupi liikmeid enne kursuse algust.')}
  
  </li>
  <li className="listing-items">
  {t('4.4. Koolituse kohta tagasiside saamiseks täidavad koolitusel osalejad kursuse lõpus elektroonilise või paberkandjal tagasiside küsitluse. Keeltekool analüüsib tagasisideküsitlusi.')} 
 
  </li>

  <h4 className='mt-3'> {t('5. Õppija kohustub')}</h4>
  <li className="listing-items">
  {t('5.1. Osalema kursustel, millele ta on registreerunud või oma osalust kinnitanud kirjalikult taasesitatavas vormis.')}
   
  </li>
  <li className="listing-items">
  {t('5.2. Õigeaegselt tasuma õppetasu koolitusfirma poolt väljastatud arve alusel.')}
   
  </li>
  <li className="listing-items">
  {t('5.3. Õppijal on õigus tasuda keelekursuste eest osade kaupa, maksimaalselt kuni kolmes osas konkreetse Keelerõõmud Keeltekool OÜ poolt kehtestatud maksegraafiku alusel, mis fikseeritakse õppijaga sõlmitavas koolituslepingus.')}
     
  </li>
  <li className="listing-items">
  {t('5.4. Õppijal on õigus loobuda keelekursusest hiljemalt  peale teist tundi, teatades sellest kirjalikult. Hilisem loobumine ei vabasta õppijat õppetasu tasumisest.')}
   
  </li>
  <li className="listing-items">
  {t('5.5. Asudes õppima veebikursusel on õppijal endal olemas veebiõppeks vajalik tehnika (arvuti koos kaamera ja mikrofoniga) ja kiire interneti püsiühendus.')}
    
  </li>
  <li className="listing-items">
  {t('5.6. Individuaalõppetunnist puudumisest teatab õppija õpetajale telefonitsi, meilitsi või sõnumiga vähemalt 24 tundi enne tunni algust. Teatamise kohustuse mittetäitmisel on õppija kohustatud tasuma tundide eest täies ulatuses.')}

  </li>
  <li className="listing-items">
  {t('5.7. Grupitunnist puudumisest teatab õppija õpetajale telefonitsi, meilitsi või sõnumiga vähemalt 2 tundi enne tunni algust. Tunnist puudumist ei tasaarveldata ega tehta tundi hiljem järele.')}
   
  </li>
  <li className="listing-items">
  {t('5.8. Koolituse kohta tagasiside saamiseks täidavad koolitusel osalejad kursuse lõpus elektroonilise või paberkandjal tagasiside küsitluse, kus annavad hinnangu kursuse sisule, enda keelealasele arengule, õppematerjalidele, õppemetoodikale, tundide ülesehitusele (tempo, õhkkond, selgituste arusaadavus, õpitava keele praktiseerimise võimalused jm), õpetaja tööle ja kursuse korralduslikule poolele ning teevad ettepanekuid õppetöö sisu ja vormi täiustamiseks. Küsitlus on anonüümne, mis tagab objektiivsuse.')}
    
  </li>

  <h4 className='mt-3'> {t('6 Õpingute lõpetamise tingimused ja väljastatav dokument')}</h4>
  <li className="listing-items">
        {t('6.1. Õpingute eduka lõpetamise eelduseks on osalemine vähemalt 80% tundidest ja iseseisvate tööde tegemine.')}
         
        </li>
        <li className="listing-items">
        {t('6.2. Kursuse lõpetamiseks sooritavad õppijad tõenduspõhise testi kõigi nelja osaoskuse tõendamiseks. Test loetakse sooritatuks vähemalt 60% tulemusega.')}
         
        </li>
        <li className="listing-items">
        {t('6.3. Tunnistuse saab õppija kursuse lõpus juhul, kui õpingute lõpetamise nõuded on täidetud ja õpiväljundid saavutatud (testi tulemus vähemalt 60%).')}
          
        </li>
        <li className="listing-items">
          {t('6.4. Tõendi täienduskoolituses osalemise või selle läbimise kohta saab õppija juhul, kui ta osales vähem kui pooltes tundides või kui ta ei saavutanud õppekava lõpetamiseks nõutud õpiväljundeid. Tõend väljastatakse ka juhul, kui koolitusel ei kontrollitud õpiväljundite saavutamist või õppija katkestas koolituse. Sellisel juhul tuuakse tõendil (või selle lisas) välja ka info selle kohta, milliste teemade käsitlemisel õppija osales.')}
          
        </li>
    </div>
   
    </>
  )
}

export default LearningEnv