import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import classes from "./FAQinfo.module.css";

// const FAQinfo = () => {
//   const [firstFaq, setFirstFaq] = useState(true);
//   const [secondFaq, setSecondFaq] = useState(true);
//   const [thirdFaq, setThirdFaq] = useState(true);
//   const [fourthFaq, setFourthFaq] = useState(true);
//   const [fifthFaq, setFifthFaq] = useState(true);
//   const [sixthFaq, setSixthFaq] = useState(true);

//   const handleFirstClick = () => {
//     setFirstFaq(!firstFaq);
//   };

//   const handleSecondClick = () => {
//     setSecondFaq(!secondFaq);
//   };

//   const handleThirdClick = () => {
//     setThirdFaq(!thirdFaq);
//   };

//   const handleFourthClick = () => {
//     setFourthFaq(!fourthFaq);
//   };

//   const handleFifthClick = () => {
//     setFifthFaq(!fifthFaq);
//   };

//   const handleSixthClick = () => {
//     setSixthFaq(!sixthFaq);
//   };

//   return (
//     <div className={classes.faq}>
//       <div className={classes.faqTitle}>
//         <h2>PYETJET MË TË SHPESHTA</h2>
//         <h6>Disa nga pyetjet më të shpeshta mund t'i gjeni më poshtë</h6>
//       </div>
//       <div className={classes.questionContainer}>
//         <div onClick={handleFirstClick} className={classes.questionCard}>
//           {firstFaq ? (
//             <div className={classes.question}>
//               <img src={require("../Images/plus.png")} alt="plus" />
//               <h3>KUR U THEMELUA AUTOCATALOG24?</h3>
//             </div>
//           ) : (
//             <div className={classes.answer}>
//               <img src={require("../Images/minus.png")} alt="plus" />
//               <h3>KUR U THEMELUA AUTOCATALOG24?</h3>
//               <p>
//                 Ideja për themelin e kompanisë AutoCatalog24 erdhi në vitin
//                 2022, gjatë tërë vitit ekipa jonë ka punuar duke arritur që të
//                 bëhet ofruesi i parë shqiptar i databazës së kërkimit të pjesëve
//                 të veturave
//               </p>
//             </div>
//           )}
//         </div>
//         <div onClick={handleSecondClick} className={classes.questionCard}>
//           {secondFaq ? (
//             <div className={classes.question}>
//               <img src={require("../Images/plus.png")} alt="plus" />
//               <h3>SI TA PAGUAJMË PLANIN E DËSHIRUAR?</h3>
//             </div>
//           ) : (
//             <div className={classes.answer}>
//               <img src={require("../Images/minus.png")} alt="plus" />
//               <h3>SI TA PAGUAJMË PLANIN E DËSHIRUAR?</h3>
//               <p>
//                 Abonimin e dëshiruar mund ta paguani direkt me para në duar apo
//                 përmes xhirollogarisë së AutoCatalog24. Gjithçka është
//                 transparente dhe korrekte nga ana e AutoCatalog24.
//               </p>
//             </div>
//           )}
//         </div>
//         <div onClick={handleThirdClick} className={classes.questionCard}>
//           {thirdFaq ? (
//             <div className={classes.question}>
//               <img src={require("../Images/plus.png")} alt="plus" />
//               <h3>ÇFARË MUNDËSI TË KËRKIMIT KA DATABAZA?</h3>
//             </div>
//           ) : (
//             <div className={classes.answer}>
//               <img src={require("../Images/minus.png")} alt="plus" />
//               <h3>ÇFARË MUNDËSI TË KËRKIMIT KA DATABAZA?</h3>
//               <p>
//                 Databaza ofron mundësinë e kërkimit përmes numrit të shasisë së
//                 veturës (VIN) dhe kërkimit manual sipas brendit dhe modelit të
//                 veturës.
//               </p>
//             </div>
//           )}
//         </div>
//         <div onClick={handleFourthClick} className={classes.questionCard}>
//           {fourthFaq ? (
//             <div className={classes.question}>
//               <img src={require("../Images/plus.png")} alt="plus" />
//               <h3>SA ËSHTË E PËRDITËSUAR DATABAZA?</h3>
//             </div>
//           ) : (
//             <div className={classes.answer}>
//               <img src={require("../Images/minus.png")} alt="plus" />
//               <h3>SA ËSHTË E PËRDITËSUAR DATABAZA?</h3>
//               <p>
//                 Databaza përditësohet qdo javë në bazë të mirëmbajtjes dhe
//                 kërkesave që ne si kompani hasim.
//               </p>
//             </div>
//           )}
//         </div>
//         <div onClick={handleFifthClick} className={classes.questionCard}>
//           {fifthFaq ? (
//             <div className={classes.question}>
//               <img src={require("../Images/plus.png")} alt="plus" />
//               <h3>ÇFARË PËRFITOJ ME BLERJEN E ABONIMIT?</h3>
//             </div>
//           ) : (
//             <div className={classes.answer}>
//               <img src={require("../Images/minus.png")} alt="plus" />
//               <h3>ÇFARË PËRFITOJ ME BLERJEN E ABONIMIT?</h3>
//               <p>
//                 Me rastin e blerjes së abonimit qasje të plotë në databazë dhe
//                 menjëherë iu mundësohet kërkimi i pjesëve të veturës së
//                 dëshiruar.
//               </p>
//             </div>
//           )}
//         </div>
//         <div onClick={handleSixthClick} className={classes.questionCard}>
//           {sixthFaq ? (
//             <div className={classes.question}>
//               <img src={require("../Images/plus.png")} alt="plus" />
//               <h3>A ËSHTË E LIMITUAR QASJA NË DATABAZË?</h3>
//             </div>
//           ) : (
//             <div className={classes.answer}>
//               <img src={require("../Images/minus.png")} alt="plus" />
//               <h3>A ËSHTË E LIMITUAR QASJA NË DATABAZË?</h3>
//               <p>
//                 Qasja mund të jetë e limituar në rast që bleni abonimin 1 ditor,
//                 përndryshe abonimi 1 mujor dhe 1 vjetor ka qasje të plotë në
//                 çfarëdo kohe.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

const Accordion = () => {
  const [accActive, setAccActive] = useState();

  let accordionData = [
    {
      title: "KUR U THEMELUA AUTOCATALOG24?",
      accordionContent:
        "Ideja për themelin e kompanisë AutoCatalog24 erdhi në vitin 2022, gjatë tërë vitit ekipa jonë ka punuar duke arritur që të bëhet ofruesi i parë shqiptar i databazës së kërkimit të pjesëve të veturave.",
    },
    {
      title: "SI TA PAGUAJMË PLANIN E DËSHIRUAR?",
      accordionContent:
        "Abonimin e dëshiruar mund ta paguani direkt me para në duar apo përmes xhirollogarisë së AutoCatalog24. Gjithçka është transparente dhe korrekte nga ana e AutoCatalog24.",
    },
    {
      title: "ÇFARË MUNDËSI TË KËRKIMIT KA DATABAZA?",
      accordionContent:
        "Databaza ofron mundësinë e kërkimit përmes numrit të shasisë së veturës (VIN) dhe kërkimit manual sipas brendit dhe modelit të veturës.",
    },
    {
      title: "SA ËSHTË E PËRDITËSUAR DATABAZA?",
      accordionContent:
        "Databaza përditësohet qdo javë në bazë të mirëmbajtjes dhe kërkesave që ne si kompani hasim.",
    },
    {
      title: "ÇFARË PËRFITOJ ME BLERJEN E ABONIMIT?",
      accordionContent:
        "Me rastin e blerjes së abonimit qasje të plotë në databazë dhe menjëherë iu mundësohet kërkimi i pjesëve të veturës së dëshiruar.",
    },
    {
      title: "A ËSHTË E LIMITUAR QASJA NË DATABAZË?",
      accordionContent:
        "Qasja mund të jetë e limituar në rast që bleni abonimin 1 ditor, përndryshe abonimi 1 mujor dhe 1 vjetor ka qasje të plotë në çfarëdo kohe.",
    },
  ];
  const handleActive = (index) => {
    if (accActive === index) {
      setAccActive();
    } else {
      setAccActive(index);
    }
  };

  return (
    <div className={classes.faq}>
      <div className={classes.faqTitle}>
        <h2>PYETJET MË TË SHPESHTA</h2>
        <h6>Disa nga pyetjet më të shpeshta mund t'i gjeni më poshtë</h6>
      </div>

      <div className={classes.accordionContainer}>
        {accordionData.map((acc, index) => {
          return (
            <div
              className={classes.accordion}
              onClick={() => handleActive(index)}
            >
              <div className={classes.accordionHeading}>
                <span
                  className={classes.addIcon}
                  style={{
                    transform: `${
                      accActive === index ? "rotate(45deg)" : "rotate(0deg)"
                    }`,
                  }}
                >
                  <RiAddLine size={25} />
                </span>
                <h3>{acc.title}</h3>
              </div>
              {accActive === index ? (
                <div className={classes.accordionContent}>
                  {acc.accordionContent}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
