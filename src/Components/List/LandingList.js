import React, { useState, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import classes from "./LandingList.module.css";
import LogoList from "./LogoList";

const LandingList = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("test")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("Something went wrong");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
            // console.log(data);
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);
  return (
    <div className={classes.landingList}>
      {error && <p className={classes.error}>{error}</p>}
      {isPending && <p className={classes.loading}></p>}
      {data && <LogoList list={data} />}
    </div>
  );
};

export default LandingList;
