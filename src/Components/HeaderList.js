import React from "react";
import { Link } from "react-router-dom";

import classes from "./HeaderList.module.css";

const HeaderList = () => {
  return (
    <div className={classes.headerList}>
      <div className={classes.brands}>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/1.bmw.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/2.bmw-i.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/3. volkswagen.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/4.audi.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/5. seat.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/6. skoda.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/7. mercedes.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/8. maybach.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/9. smart.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/10. rolls royce.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/11. mini.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/12. opel.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/13. vauxhall.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/14. fiat.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/15. fiat pro.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/16. abarth.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/17. alfa romeo.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/18. toyota.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/19. ford.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/20. lexus.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/21. kia.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/22. nissan.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/23. lancia.jpg")} />
        </Link>
        <Link to="/List" className={classes.listLogo}>
          <img src={require("../Images/car-logos/24. infinity.jpg")} />
        </Link>
      </div>
      <div className={classes.services}>
        <h4>Çfarë përfitoni nga databaza jonë</h4>
        <ul className={classes.serviceList}>
          <li>
            <img
              src={require("../Images/Tick-icon.png")}
              alt="tick icon"
              className={classes.listImg}
            />
            Akses në llogarinë tuaj 24 orë / 7 ditë
          </li>
          <li>
            <img
              src={require("../Images/Tick-icon.png")}
              alt="tick icon"
              className={classes.listImg}
            />
            Përditësime javore të modeleve më të reja
          </li>
          <li>
            <img
              src={require("../Images/Tick-icon.png")}
              alt="tick icon"
              className={classes.listImg}
            />
            Mundësia për të bërë kërkim përmes VIN
          </li>
          <li>
            <img
              src={require("../Images/Tick-icon.png")}
              alt="tick icon"
              className={classes.listImg}
            />
            Platformë e optimizuar dhe e lehtë për përdorim
          </li>
          <li>
            <img
              src={require("../Images/Tick-icon.png")}
              alt="tick icon"
              className={classes.listImg}
            />
            Mundësia për të shikuar numrin OEM të pjesës
          </li>
          <li>
            <img
              src={require("../Images/Tick-icon.png")}
              alt="tick icon"
              className={classes.listImg}
            />
            Çmim fleksibël si: ditor, mujor apo vjetor
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderList;
