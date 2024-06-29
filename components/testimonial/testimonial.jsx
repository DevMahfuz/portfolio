import Image from "next/image";
import ReviewSlider from "./reviewSlider";
import "./testimonial.style.css";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial">
      <div className="section-heading">Testimonial</div>
      <h2>Real Feedback From Happy Clients</h2>
      <ReviewSlider />
      <div className="testimonial__shape-3">
        <Image
          src="/img/testi-shape-3.svg"
          alt="shape 3"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Testimonial;
