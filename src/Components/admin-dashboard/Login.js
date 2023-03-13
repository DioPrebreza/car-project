import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import classes from "../List/CarList.module.css";

const list = [
  {
    url: "https://audi.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:rdw}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/audi.png",
  },
  {
    url: "https://volkswagen.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:rdw}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/vw.png",
  },
  {
    url: "https://skoda.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:cz}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/skoda.png",
  },
  {
    url: "https://seat.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:e}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/seat.png",
  },
  {
    url: "https://opel.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;category:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/opel.png",
  },
  {
    url: "https://bmw.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:bmw}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/bmw.png",
  },
  {
    url: "https://bmw-i.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:bmw-i}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/bmwi.png",
  },
  {
    url: "https://ford.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;category:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/ford.png",
  },
  {
    url: "https://kia.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eur}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/kia.png",
  },
  {
    url: "https://rolls-royce.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:rolls-royce}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/rolls_royce.png",
  },
  {
    url: "https://mercedes.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu;set_aggtyp:fg;wheel_class:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/merce.png",
  },
  {
    url: "https://smart.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu;set_aggtyp:fg;wheel_class:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/smart.png",
  },
  {
    url: "https://nissan.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:el}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/nissan.png",
  },
  {
    url: "https://honda.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/honda.png",
  },
  {
    url: "https://toyota.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/toyota.png",
  },
  {
    url: "https://hyundai.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eur}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/hyundai.png",
  },
  {
    url: "https://fiat.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/fiat.png",
  },
  {
    url: "https://alfa-romeo.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/alfa_romeo.png",
  },
  {
    url: "https://mini.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:mini}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/mini.png",
  },
  {
    url: "https://vauxhall.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;category:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/vauxhall.png",
  },
  {
    url: "https://maybach.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu;set_aggtyp:fg;wheel_class:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/maybach.png",
  },
  {
    url: "https://infiniti.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:el}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/infiniti.png",
  },
  {
    url: "https://lexus.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/lexus.png",
  },
  {
    url: "https://abarth.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/abarth.png",
  },
];

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert("Të dhënat janë gabim!");
    }
  };

  let loggedIn = auth.currentUser;
  console.log(auth.currentUser);
  return (
    <div>
      {!isLoggedIn && (
        <div className={classes.container}>
          <Link to="/">
            <img src={require("../../Images/Logo-PNG.png")} />
          </Link>
          <div className={classes.login}>
            <h3>HYR NË DATABAZË</h3>
            <div className={classes.loginFields}>
              <input
                type="email"
                placeholder="Email.."
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Fjalekalimi.."
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
            </div>
            <button onClick={login} className={classes.loginButton}>
              KYÇU
            </button>
            <div className={classes.loginDivider}></div>
            <h5>
              Nëse keni harruar fjalëkalimin <br />
              Kontaktoni administratën
            </h5>
          </div>
          <div className={classes.info}>
            <p>
              Të gjitha të drejtat e rezervuara © 2023 | Autocatalog24 <br />{" "}
              është markë e Reklamohu Sh.P.K
            </p>
            <p className={classes.policy}>
              <Link to="/kushtet-politika">
                Kushtet e përdorimit | Politika e privatësisë
              </Link>
            </p>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className={classes.list}>
          <img
            src={require("../../Images/Logo-PNG.png")}
            className={classes.listImg}
          />
          <div className={classes.listWrapper}>
            <h1 className={classes.listTitle}>Zgjedh markën:</h1>
            <p>Klikoni në logo</p>
            <div className={classes.brands}>
              {list.map((car) => {
                return (
                  <div className={classes.listLogo}>
                    <a href={car.url}>
                      <img src={`${car.imgUrl}`} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
