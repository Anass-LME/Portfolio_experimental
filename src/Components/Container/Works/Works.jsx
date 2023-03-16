import React, { useState, useEffect } from "react";
import "./Works.css";
import BlockRevealAnimation from "../../Animations/Revealer/animation";
import { firestore } from "../../../config/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, "works"), orderBy("number"));
    onSnapshot(q, (querySnapshot) => {
      const firebaseWorks = [];
      querySnapshot.forEach((work) => {
        console.log(work.data());
        firebaseWorks.push(work.data());
      });
      setWorks(firebaseWorks);
    });
  }, []);
  return (
    <div id="works" className="bg_works pt-5 bg-light">
      <section className="main_works container pt-5 px-3 pb-1">
        {works.map((work) => {
          return (
            <div className="label gap-5">
              {work.position === "left" ? (
                <>
                  <div className="left">
                    <img className="img" src={work.image} alt="" />
                  </div>
                  <div className="right">
                    <div className="label_text">
                      <h2>{work.title}</h2>
                      <p className="d-none">{work.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="left">
                    <div className="label_text">
                      <h2>{work.title}</h2>
                      <p className="d-none">{work.description}</p>
                    </div>
                  </div>
                  <div className="right">
                    <img className="img" src={work.image} alt="" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>
      <div className="vertically_works">
        <BlockRevealAnimation>
          <h1>Works</h1>
        </BlockRevealAnimation>
      </div>
    </div>
  );
};

export default Works;
