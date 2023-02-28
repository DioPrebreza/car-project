import React, { useState } from "react";

import classes from "../Components/Policies.module.css";

const Policies = () => {
  const [policyVisible, setPolicyVisible] = useState(true);
  const [privacyVisible, setPrivacyVisible] = useState(false);

  const termsVisibilityHandler = () => {
    setPolicyVisible(true);
    setPrivacyVisible(false);
  };

  const privacyVisibilityHandler = () => {
    setPolicyVisible(false);
    setPrivacyVisible(true);
  };

  return (
    <div className={classes.policies}>
      <div className={classes.policyNavbar}>
        <div
          className={classes.policyNavbarButton}
          onClick={termsVisibilityHandler}
          style={policyVisible ? { backgroundColor: "#87a9c7" } : {}}
        >
          Kushtet e përdorimit
        </div>
        <div
          className={classes.privacyNavbarButton}
          onClick={privacyVisibilityHandler}
          style={privacyVisible ? { backgroundColor: "#87a9c7" } : {}}
        >
          Politika e privatësisë
        </div>
      </div>
      <div
        className={classes.termsContainer}
        style={policyVisible ? { display: "block" } : { display: "none" }}
      >
        <h3>Kushtet e përdorimit</h3>
        <p>
          Kushtet e Përdorimit përbëjnë një marrëveshje ligjërisht të
          detyrueshme të bërë midis Autocatalog24 (këtu e tutje, Ofruesi i
          Shërbimit të Faqes) dhe Klientit (Kontraktorit).
        </p>
        <p>
          Respektimi i Kushteve të Përdorimit dhe Politikës sonë të Privatësisë
          është i detyrueshëm për hyrjen dhe përdorimin e kësaj faqe në
          internet, e cila është në pronësi dhe operohet nga Autocatalog24. Këto
          Kushtet e Përdorimit zbatohen për transaksionet e biznesit kolektiv
          ndërmjet Autocatalog24. dhe Klientit. Ato vlejnë për të gjithë
          marrëdhënien e biznesit, përfshirë kontratat e ardhshme. Klientët janë
          persona juridikë si dhe individë.
        </p>
        <p>
          Ju pranoni që duke hyrë në sajt, ju keni lexuar, kuptuar dhe pranuar
          të jeni të detyruar nga të gjitha këto Kushte. Nëse nuk jeni dakord me
          të gjitha këto Kushte dhe Rregulla, atëherë ju ndalohet shprehimisht
          të përdorni Faqen dhe duhet të ndërprisni përdorimin menjëherë.
        </p>
        <p>
          Kushtet dhe kushtet shtesë ose dokumentet që mund të postohen në sit
          herë pas here përfshihen shprehimisht këtu me referencë. Ne rezervojmë
          të drejtën, sipas gjykimit tonë të vetëm, për të bërë ndryshime ose
          modifikime në këto Kushte dhe Kushtet në çdo kohë dhe për ndonjë
          arsye.
        </p>
        <h5>PËRGJEGJËSITË E KLIENTIT</h5>
        <p>
          Klienti do të bëjë një kyqje digjitale. Pasojat e mangësive ose
          vonesave që rezultojnë nga një formulim i paqartë, i pasaktë ose jo i
          plotë i detyrës nga ana e Klientit do të përballohen nga Klienti.
          Pagesa nga Klienti duhet të përfshijnë të dhënat e kërkuara nga ne.
          Pasojat e gabimeve dhe vonesave që vijnë nga mosrespektimi i këtyre
          detyrimeve nga ana e Klientit do të barten nga Klienti.
        </p>
        <h5>PËRGJEGJËSITË E AUTOCATALOG24</h5>
        <p>
          Ne do të kryejmë shërbimin në përputhje me standardet më të larta të
          kualitetit të shërbimit në industri.
        </p>
        <p>
          Afatet e dorëzimit sigurohen sipas kornizës kohore të rënë dakord,
          sipas vlerësimit më të mirë. Nuk do të ketë asnjë përgjegjësi për
          defektet që vijnë nga shkelja e detyrave të bashkëpunimit të Klientit
          ose që janë shkaktuar nga dokumente të gabuara, jo të plota,
          terminologjike të pasakta ose të lexueshme dobët. Faqja do të jetë
          përgjegjëse vetëm për veprime të qëllimshme dhe neglizhencë të rëndë.
        </p>
        <h5>OFERTA DHE ÇMIMET</h5>
        <p>
          Të gjitha ofertat dhe çmimet nuk janë detyruese. Ato mund të
          përshtaten për t’iu përshtatur kushteve aktuale dhe shpenzimeve
          shtesë, pa njoftim të veçantë. Çmimet janë në euro, përveç nëse është
          rënë dakord për një valutë tjetër. Të gjitha çmimet e listuar në
          ofertat tona janë me TVSH të përfshirë. Kushtet e pagesës, zbritjet e
          parakohshme të pagesave ose zbritjet e tjera nuk garantohen, përveç
          nëse ato janë rregulluar shprehimisht. Shërbimet speciale kërkojnë një
          shtesë ose do të tarifohen sipas shpenzimeve të mëparshme.
        </p>
        <h5>PËRDORIMI I FAQES NË INTERNET</h5>
        <p>
          Autocatalog24, zotëron të gjitha të drejtat intelektuale në këtë faqe
          në internet dhe përmbajtjen e saj, duke përfshirë por jo kufizuar në
          të gjitha logot, markat tregtare, të dhënat, tekstet, grafikët,
          skemat, imazhet ose ndonjë material tjetër ose algoritme audiovizive.
          Në varësi të këtyre kushteve të përdorimit, përdoruesit i është dhënë
          një licencë e kufizuar, e përkohshme, e revokueshme dhe jo-ekskluzive
          për të hyrë, shfletuar dhe përdorur këtë faqe në internet vetëm për
          qëllime personale dhe jo-komerciale.
        </p>
        <p>
          Asnjë pjesë e kësaj faqe në internet nuk mund të riprodhohet,
          dublikohet, kopjohet, shitet, rishitet, pranohet, modifikohet, ose
          përdoret ndryshe ose shfrytëzohet, qoftë plotësisht ose pjesërisht,
          për ndonjë qëllim paraprak pa pëlqimin tonë paraprak me shkrim. Nuk
          lejohet të ribotoni ndonjë pjesë të kësaj faqe në internet në çfarëdo
          forme në ndonjë medium tjetër (të shtypur, elektronik ose ndryshe) ose
          si pjesë e ndonjë shërbimi tregtar pa lejen paraprake me shkrim nga
          NE. Të gjitha të drejtat e pronës intelektuale të përmendura më lart
          mbeten në pronësi të Autocatalog24.
        </p>
        <h5>PËRGJEGJËSIA</h5>
        <p>
          Autocatalog24, nuk merr asnjë përgjegjësi për dëmet ose humbjet që
          rezultojnë nga vizita në faqen e internetit https://autocatalog24.com/
          gjithashtu nuk është përgjegjës për, dhe as nuk përfshin në asnjë
          mënyrë ndonjë lidhje të palës së tretë ose përmbajtjen e tyre.
          Autocatalog24, është përgjegjësia e informacionit e lidhur me
          shërbimet e veta përcaktohet gjithashtu nga Marrëveshja e Shërbimit me
          klientët e saj për shërbimet specifike.
        </p>
        <h5>ZBATIMI</h5>
        <p>
          Nëse e tërë ose ndonjë pjesë e ndonjë dispozite të këtyre kushteve të
          përdorimit është ose bëhet e pavlefshme ose e pazbatueshme për ndonjë
          arsye, e njëjta do të përjashtohet nga këto kushte të përdorimit dhe
          do të bëhet e paefektshme për aq sa është e mundur pa duke modifikuar
          dispozitat e mbetura të këtyre kushteve të përdorimit dhe në asnjë
          mënyrë nuk do të ndikojë në vlefshmërinë ose zbatueshmërinë e ndonjë
          dispozite tjetër.
        </p>
        <h5>HEQJA DORË</h5>
        <p>
          Asnjë heqje dorë nga ana jonë për ndonjë shkelje të këtyre kushteve të
          përdorimit nuk do të përbëjë heqje dorë nga ndonjë shkelje tjetër
          paraprake ose pasuese dhe ne nuk do të ndikohemi nga asnjë vonesë,
          dështim ose mosveprim për të zbatuar ose shprehur durimin e dhënë në
          lidhje me ndonjë nga veprimet tuaja lidhjet.
        </p>
        <h5>LIGJI DHE JURIDIKSIONI QEVERISËS</h5>
        <p>
          Këto kushte të përdorimit dhe / ose përdorimi juaj i faqes në internet
          rregullohen dhe interpretohen në përputhje me ligjin e Republikës së
          Kosovës dhe gjykatat e Republikës së Kosovës do të kenë juridiksion
          ekskluziv për çdo mosmarrëveshje që mund të lind.
        </p>
      </div>
      <div
        className={classes.privacyContainer}
        style={privacyVisible ? { display: "block" } : { display: "none" }}
      >
        <h3>Politika e Privatësisë</h3>
        <p>
          Autocatalog24 (këtu e tutje Ofruesi i Shërbimit të Faqes), zotohet t’i
          përmbahet rregullave dhe parimeve të përcaktuara në këtë politikë të
          privatësisë, e cila është në përputhje me Ligjin Nr. 06/L-082, datë
          25.02.2019 “Për mbrojtjen e të dhënave personale” (të ndryshuar).
          Faqja i jep rëndësinë e duhur privatësisë së individëve dhe mbrojtjes
          së të dhënave personale. Politika e Privatësisë është zhvilluar për të
          përcaktuar qëllimet, termat dhe kushtet e përpunimit të dhënave
          personale dhe të drejtat që kanë të bëjnë me të dhënat personale të
          pronarëve të dhënave. Ne e konsiderojmë konfidencialitetin dhe
          mbrojtjen e të dhënave personale si thelbësore dhe zotohemi për
          ligjshmërinë e përpunimit të të dhënave personale.
        </p>
        <p>
          Kjo Politikë e Privatësisë përshkruan se si informacioni juaj personal
          mblidhet, përdoret dhe ndahet kur vizitoni https://autocatalog24.com/
        </p>
        <h5>KUSHTET DHE PËRKUFIZIMET</h5>
        <p>
          Të dhënat personale – nënkuptojnë çdo informacion që i përket një
          personi fizik të identifikuar ose të identifikueshëm (referuar tani e
          tutje si subjekt subjekt i të dhënave); një person fizik i
          identifikueshëm është ai që mund të identifikohet, drejtpërdrejt ose
          indirekt, veçanërisht përmes një identifikuesi të tillë si një emër,
          një të dhëne identifikimi, vendndodhjes, një identiteti në internet
          ose një ose më shumë faktorëve specifik për fizik, fiziologjik,
          biologjik, psikologjik , identiteti ekonomik, kulturor ose shoqëror i
          atij personi fizik.
        </p>
        <p>
          Përpunimi – nënkupton çdo operacion ose një seri operacionesh të
          kryera në të dhëna personale ose në grupe të të dhënave personale,
          pavarësisht nëse janë ose jo me mjete të automatizuara, të tilla si
          blerja, regjistrimi, organizimi, rregullimi, ruajtja, adaptimi ose
          modifikimi, rikuperimi, konsultimi, përdorimi, zbulimi nga
          transmetimi, shpërndarja ose vënia ndryshe në dispozicion, rreshtimi
          ose kombinimi, kufizimi, fshirja ose shkatërrimi.
        </p>
        <p>
          Kontrolluesi – nënkupton personin fizik ose juridik, autoritetin
          publik ose të qeverisjes lokale që është mbledhësi origjinal i të
          dhënave personale. Kontrolluesi konstaton objektivat dhe mjetet e
          përpunimit të të dhënave personale.
        </p>
        <p>
          Përpunuesi – nënkupton një person fizik ose juridik, autoritet publik
          ose të qeverisjes vendore që përpunon të dhëna personale në emër të
          udhëzuesve dhe nga udhëzuesit e tyre.
        </p>
        <p>
          Shkelja e të dhënave personale – nënkupton një shkelje që çon në
          shkatërrim aksidental ose të paligjshëm, humbje, ndryshim, zbulim të
          paautorizuar ose qasje në të dhënat personale të transmetuara, të
          ruajtura ose të përpunuara ndryshe.
        </p>
        <p>
          Subjekti i të dhënave – nënkupton një person, të dhënat personale të
          të cilit përpunohen.
        </p>
        <h5>SIGURIA DHE QËLLIMI I PËRPUNIMIT</h5>
        <p>
          Duke ndjekur parimin e arsyeshmërisë, faqja zbaton masa të ndryshme
          organizative, fizike dhe të teknologjisë së informacionit të sigurisë
          për të mbrojtur të dhënat personale.
        </p>
        <p>
          Ne, në raste të caktuara, mund të përdorim procesorë për përpunimin
          dhe ofrimin e shërbimeve. Faqja siguron që përpunuesit të përpunojnë
          të dhëna personale në përputhje me ligjin me ligjet e Republikës së
          Shqipërisë si dhe të marrin masat përkatëse të sigurisë. Marrëveshjet
          e konfidencialitetit janë lidhur me cilindo dhe të gjithë përpunuesit.
        </p>
        <p>
          Ne menjëherë njoftojmë subjektet e të dhënave për çdo shkelje të të
          dhënave personale. Ne përdorim informacionin që mbledhim për të na
          ndihmuar të zbulojmë për rrezik të mundshëm dhe mashtrim (në veçanti,
          adresën tuaj IP), dhe më përgjithësisht për të përmirësuar dhe
          optimizuar Faqen tonë.
        </p>
        <p>
          Sajti përpunon të dhënat personale për të kryer një shërbim dhe për të
          siguruar kryerjen e tyre.
        </p>
        <h5>TË DREJTAT E SUBJEKTIT TË TË DHËNAVE</h5>
        <p>
          Subjektet e të dhënave kanë të drejtë të bëjnë kërkime në lidhje me të
          dhënat e tyre personale që ata na kanë dorëzuar.
        </p>
        <p>
          Subjektet e të dhënave kanë të drejtë të paraqesin një ankesë në
          lidhje me përpunimin e të dhënave personale në Inspektorin e Mbrojtjes
          së të Dhënave.
        </p>
        <h5>LLOJI I TË DHËNAVE PERSONALE TË MBLEDHURA</h5>
        <p>
          Faqja mbledh të dhënat personale të mëposhtme: emrin e biznesit email
          adresen e biznesit numri i telefonit
        </p>
        <h5>RUAJTJA E TË DHËNAVE PERSONALE</h5>
        <p>
          Ne i mbajmë të dhënat personale në një formë që lejon identifikimin e
          subjekteve të të dhënave jo më shumë se sa është e nevojshme për
          qëllimet për të cilat përpunohen të dhënat personale, përveç nëse
          faqja duhet të pajtohet me një kërkesë që del nga ligji që parashikon
          kushte të ndryshme të ruajtjes personale të dhëna.
        </p>
        <p>
          Ne do të shkatërrojmë dhe / ose fshijmë në mënyrë të sigurt çdo të
          dhënë personale pa ndonjë qëllim për ruajtje pasi të ketë kaluar një
          vit nga ofrimi i shërbimit, përveç nëse është rënë dakord ndryshe
          midis marrësit të shërbimit dhe nesh.
        </p>
        <h5>RUAJTJA E TË DHËNAVE / NDRYSHIMET</h5>
        <p>
          Kur të bëni një kyqje përmes Sajtit, ne do të ruajmë Informacionin
          tuaj të Rendit për të dhënat tona përveç nëse dhe derisa të na kërkoni
          të fshini këtë informacion.
        </p>
        <p>
          Ne mund ta azhornojmë këtë Politikë të Privatësisë herë pas here në
          mënyrë që të pasqyrojmë ndryshimet në praktikat tona ose për arsye të
          tjera operacionale, ligjore ose rregullatore.
        </p>
        <p>
          Faqja e konsideron të rëndësishme privatësinë e individëve dhe, për
          këtë arsye azhornon rregullisht këtë Politikë të Privatësisë. Versioni
          i fundit i Politikës së Privatësisë është gjithmonë i disponueshëm në
          faqen e internetit.
        </p>
      </div>
    </div>
  );
};

export default Policies;
