import React from "react";
import "./Container.css";
import BlockRevealAnimation from "../Animations/Revealer/animation";
import AnimationChain from "../Animations/FadeIn/FadeIn";

function Container() {
  return (
    <>
      <div id="home" className="main_container">
        <div className="vertically">
          <BlockRevealAnimation>
            <h1>Portfolio</h1>
          </BlockRevealAnimation>
        </div>
        <div className="col-12 animation d-flex justify-content-center align-items-center">
          <div className="cont_circle">
            <div className="circle" />
          </div>
          <div className="Xs">
            <div class="television">
              <div class="screen"></div>
            </div>

            <div className="X1 bg-dark" />
            <div className="X2 bg-dark" />
          </div>
        </div>
        <main className="basemain ps-5 col-xl-5 d-flex align-items-center pt-5 text-dark flex-wrap">
          <div className="paragraph1 ps-5 col-sm-7 col-md-7 col-xl-12">
            <div className="blockrevealdiv">
              <BlockRevealAnimation>
                <h2 className="fw-bold fs-1">Creative designer &</h2>
              </BlockRevealAnimation>

              <BlockRevealAnimation>
                <h2 className="fw-bold fs-1">developer.</h2>
              </BlockRevealAnimation>
            </div>
            <AnimationChain className="mt-5" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Container;
