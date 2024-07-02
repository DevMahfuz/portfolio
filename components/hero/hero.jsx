import Link from "next/link";
import "./hero.style.css";
import TipeTitle from "./type-title";
import Image from "next/image";
import VideoModal from "./video-model";
import VideoButton from "./video-button";

const Hero = () => {
  const svgContent = `<svg width="400" height="540" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="540"" fill="#00000084" /></svg>`;

  const blurDataURL = `data:image/svg+xml;base64,${btoa(svgContent)}`;

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-text">
          <p>Hello Budy! I'm</p>
          <h1>Mahfuzur Rahman</h1>
          <TipeTitle />
          <div className="social-container">
            <div>
              <nav style={{ "--count": 4 }}>
                <ul>
                  <li style={{ "--index": 1 }}>
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                        Follow Me
                      </span>
                    </a>
                  </li>
                  <li style={{ "--index": 2 }}>
                    <a
                      href="https://x.com/iam_mahfuz"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                        Twitter
                      </span>
                    </a>
                  </li>
                  <li style={{ "--index": 3 }}>
                    <a
                      href="https://www.facebook.com/mahfuzur.me"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                        FaceBook
                      </span>
                    </a>
                  </li>
                  <li style={{ "--index": 4 }}>
                    <a
                      href="https://github.com/DevMahfuz"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                        GitHub
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="pay-btn-container">
            {/* <button type="button" className="btn-play">
              <span></span>
            </button> */}
            <VideoButton />
          </div>
        </div>
        <div className="hero-img">
          <div className="img-wrapper">
            <img className="shape4" src="/img/shape4.png" alt="shape4" />
            <img className="shape1" src="/img/shape1.png" alt="shape1" />
            <img className="shape2" src="/img/shape2.png" alt="shape2" />
            <Image
              src="/img/mahfuz.webp"
              alt="Mahfuzr's profile pic"
              width={500}
              height={656}
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </div>
      </div>

      <div className="cursor-icon">
        <Link
          href="#about"
          className="cursor-icon-pointer"
          aria-label="About ME"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="currentColor"
              d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
