"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./why-me.style.css";
import Image from "next/image";

const WhyME = () => {
  useGSAP(() => {
    const wavePaths5 = [
      "M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,37.3C1120,21,1280,11,1360,5.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
      "M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,74.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
    ];

    const wavePaths6 = [
      "M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,234.7C840,267,960,277,1080,288C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
      "M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,250.7C840,277,960,267,1080,224C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
      "M0,128L60,122.7C120,117,240,107,360,138.7C480,171,600,245,720,256C840,267,960,213,1080,176C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
    ];

    gsap
      .timeline({ repeat: -1, yoyo: true })

      .to("#wavePath5", {
        duration: 3,
        attr: { d: wavePaths5[0] },
        ease: "power1.inOut",
      })
      .to("#wavePath5", {
        duration: 3,
        attr: { d: wavePaths5[1] },
        ease: "power1.inOut",
      });

    gsap
      .timeline({ repeat: -1, yoyo: true })

      .to("#wavePath6", {
        duration: 4,
        attr: { d: wavePaths6[0] },
        ease: "power1.inOut",
      })
      .to("#wavePath6", {
        duration: 4,
        attr: { d: wavePaths6[1] },
        ease: "power1.inOut",
      })
      .to("#wavePath6", {
        duration: 4,
        attr: { d: wavePaths6[2] },
        ease: "power1.inOut",
      });
  });
  return (
    <section id="why-me" className="why-me">
      <svg
        className="whyme-toper"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          id="wavePath5"
          fill="#292930"
          fillOpacity="1"
          d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,74.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className="section-heading">Why me</div>
        <h2 className="why-me-header">Why Should You Choose Me?</h2>
        <div className="content">
          <ul>
            <li>Efficient Coding</li>
            <li>Strong Problem-Solving Skills</li>
            <li>Custom Solutions</li>
            <li>Attention to Detail</li>
            <li>Full Project Lifecycle Management</li>
            <li>Proactive Testing</li>
            <li>Client-Centric Approach</li>
            <li>Good communication skills</li>
            <li>Unlimited Revisions</li>
            <li>Commitment to 100% buyer satisfaction</li>
          </ul>

          <Image
            src="/img/why-me.png"
            width={400}
            height={600}
            alt="why me image"
          />
        </div>
      </div>
      <svg
        className="wave6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          id="wavePath6"
          fill="#292930"
          fillOpacity="1"
          d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,202.7C840,181,960,139,1080,117.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default WhyME;
