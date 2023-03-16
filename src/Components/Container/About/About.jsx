import React from "react";
import "./About.css";
import BlockRevealAnimation from "../../Animations/Revealer/animation";
// import ScrollShow from '../../Animations/Scroll_show/Scroll_show'

const softwareTools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Premiere Pro",
  "Adobe Animate",
  "Maxon Cinema 4D",
  "Maxon Redshift",
  "Chaos V-Ray",
];
const About = () => {
  return (
    <>
      <section id="about" className="main_about container pt-5 pb-5">
        <div className="row pt-5">
          <div className="title_about col-lg-6">
            <h2 className="ps-5 pb-5">
              I am passionate <span>front-end developer </span>and{" "}
              <span>designer </span> with keen eye for details.
            </h2>
          </div>
          <div className="content_about">
            <div className="box_image_about ps-1 col-5">
              <div className="avatar ps-1">
                <img src="/images/iCloud/IMG_1276.jpg" width="300px" alt="" />
              </div>
              <img
                src="/images/lines.jpg"
                className="lines"
                width="300px"
                height="300px"
                alt=""
              />
            </div>
            <div className="col-md-10 col-lg-6 ms-auto pe-5">
              <p>
                Hi! I'm Lemouddene Anass. I have a strong passion for design and
                technology. I specialize in Front End Development and Design, my
                passion is all about building elegant and professional user
                interfaces and websites. I also do branding and identity design
                such as logo design, letterhead and business card, along with
                photo editing, image cropping, video editing, 3D modeling and
                animation, and other graphic design services.
              </p>
            </div>
          </div>
          <div className="content_skills">
            <h2 className="fw-bold ps-5 pt-5">My Skills.</h2>
            <div className="software col-sm-8 col-lg-6 ms-auto">
              <h3>Softwares / Tools</h3>
              <div className="list_skills_about">
                <ul className="pt-3 ps-0">
                  {softwareTools.map((tool) => {
                    return <li>{tool}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="dev col-sm-8 col-lg-6 ms-auto">
              <h3>Web Developement</h3>
              <div className="list_skills_about">
                <ul className="dev_grid pt-3 ps-0">
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>Node JS</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="vertically_about">
        <BlockRevealAnimation>
          <h1>About</h1>
        </BlockRevealAnimation>
      </div>
      {/* <ScrollShow/> */}
    </>
  );
};

export default About;
