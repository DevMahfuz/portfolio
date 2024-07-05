"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./about.style.css";
import InteractiveImage from "./InteractiveImage";

const About = () => {
  useGSAP(() => {
    const originalPath =
      "M0,128L20,133.3C40,139,80,149,120,138.7C160,128,200,96,240,96C280,96,320,128,360,133.3C400,139,440,117,480,96C520,75,560,53,600,48C640,43,680,53,720,64C760,75,800,85,840,85.3C880,85,920,75,960,96C1000,117,1040,171,1080,165.3C1120,160,1160,96,1200,58.7C1240,21,1280,11,1320,42.7C1360,75,1400,149,1420,186.7L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z";

    const animatedPath =
      "M0,128L20,138.7C40,149,80,160,120,160C160,160,200,138.7,240,128C280,117,320,107,360,112C400,117,440,139,480,149.3C520,160,560,160,600,154.7C640,149,680,139,720,133.3C760,128,800,128,840,138.7C880,149,920,171,960,181.3C1000,192,1040,192,1080,181.3C1120,171,1160,149,1200,144C1240,139,1280,149,1320,165.3C1360,181,1400,203,1420,213.3L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z";

    gsap.to("#wavePath", {
      duration: 5,
      attr: { d: animatedPath },
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    const wavePaths = [
      "M0,160L21.8,133.3C43.6,107,87,53,131,74.7C174.5,96,218,192,262,224C305.5,256,349,224,393,186.7C436.4,149,480,107,524,117.3C567.3,128,611,192,655,213.3C698.2,235,742,213,785,192C829.1,171,873,149,916,133.3C960,117,1004,107,1047,133.3C1090.9,160,1135,224,1178,261.3C1221.8,299,1265,309,1309,272C1352.7,235,1396,149,1418,106.7L1440,64L1440,320L0,320Z",
      "M0,160L21.8,144C43.6,128,87,96,131,80C174.5,64,218,64,262,80C305.5,96,349,128,393,138.7C436.4,149,480,139,524,138.7C567.3,139,611,149,655,154.7C698.2,160,742,160,785,170.7C829.1,181,873,203,916,213.3C960,224,1004,224,1047,213.3C1090.9,203,1135,181,1178,170.7C1221.8,160,1265,160,1309,170.7C1352.7,181,1396,203,1418,213.3L1440,224L1440,320L0,320Z",
    ];

    gsap
      .timeline({ repeat: -1, yoyo: true })

      .to("#wavePath2", {
        duration: 3,
        attr: { d: wavePaths[1] },
        ease: "power1.inOut",
      })
      .to("#wavePath2", {
        duration: 3,
        attr: { d: wavePaths[0] },
        ease: "power1.inOut",
      });
  });

  return (
    <section id="about" className="about">
      <svg
        className="top-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          id="wavePath"
          fill="#25262f"
          fillOpacity="1"
          d="M0,128L20,133.3C40,139,80,149,120,138.7C160,128,200,96,240,96C280,96,320,128,360,133.3C400,139,440,117,480,96C520,75,560,53,600,48C640,43,680,53,720,64C760,75,800,85,840,85.3C880,85,920,75,960,96C1000,117,1040,171,1080,165.3C1120,160,1160,96,1200,58.7C1240,21,1280,11,1320,42.7C1360,75,1400,149,1420,186.7L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className="left">
          <div className="about-text-style animated-text">
            <span>Mahfuz</span>
          </div>
          <InteractiveImage />
        </div>
        <div className="right">
          <div className="section-heading">About Me</div>
          <h2>I&apos;m A Full stack Web Developer</h2>
          <p>
            My name is Mahfuzur Rahman, a passionate full stack web developer
            from Bangladesh. With a strong background in both front-end and
            back-end technologies, I enjoy crafting seamless and dynamic web
            experiences. I am dedicated to continuous learning and staying
            updated with the latest industry trends to deliver innovative
            solutions.
          </p>
          <p>Here is about me...</p>
          <hr />
          <div className="info">
            <div className="info-item">
              <strong>Name :</strong>
              <span>Mahfuzur Rahman</span>
            </div>
            <div className="info-item">
              <strong>Birth Date :</strong>
              <span>
                1<sup>st</sup> January, 1994
              </span>
            </div>
            <div className="info-item">
              <strong>Address :</strong>
              <span>Holding No# 227, Ward No# 06, Bhangura, Pabna</span>
            </div>
            <div className="info-item">
              <strong>Nationality :</strong>
              <span>Bangladeshi</span>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <svg
        className="bottom-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          id="wavePath2"
          fill="#000000"
          fillOpacity="1"
          d="M0,160L21.8,133.3C43.6,107,87,53,131,74.7C174.5,96,218,192,262,224C305.5,256,349,224,393,186.7C436.4,149,480,107,524,117.3C567.3,128,611,192,655,213.3C698.2,235,742,213,785,192C829.1,171,873,149,916,133.3C960,117,1004,107,1047,133.3C1090.9,160,1135,224,1178,261.3C1221.8,299,1265,309,1309,272C1352.7,235,1396,149,1418,106.7L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default About;
