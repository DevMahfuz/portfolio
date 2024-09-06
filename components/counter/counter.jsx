"use client";
import "./counter.style.css";
import CountUp from "react-countup";
import Image from "next/image";

const Counter = () => {
  return (
    <section id="counter">
      <div className="container counter">
        <Image
          className="c-shape-1"
          src="/img/counter-shape-1.png"
          width={289}
          height={117}
          alt="counter shape-1"
        />
        <Image
          className="c-shape-2"
          src="/img/counter-shape-2.png"
          width={210}
          height={79}
          alt="counter shape-2"
        />
        <div className="count">
          <p>
            <CountUp end={7} enableScrollSpy={true} duration={4} />
          </p>
          <p>
            years <br /> of <br /> coding
          </p>
        </div>
        <div className="count">
          <p>
            <CountUp end={150} enableScrollSpy={true} duration={7} />{" "}
            <span> +</span>
          </p>
          <p>
            happy <br />
            client
          </p>
        </div>
        <div className="count">
          <p>
            <CountUp end={100} enableScrollSpy={true} duration={5} />
            <span> +</span>
          </p>
          <p>
            Five Star <br />
            Review
          </p>
        </div>

        <Image
          className="c-shape-3"
          src="/img/counter-shape-3.png"
          width={160}
          height={219}
          alt="counter shape-3"
        />
        <Image
          className="c-shape-4"
          src="/img/counter-shape-4.png"
          width={116}
          height={163}
          alt="counter shape-4"
        />
      </div>
    </section>
  );
};

export default Counter;
