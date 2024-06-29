"use client";
import { useState } from "react";
import "./contact.style.css";

const Contact = () => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_FORM_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsFormSubmited(true);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-wrapper">
        <div className="left">
          <h3>Contact Me</h3>
          <div className="contact-option">
            <div className="contact-option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"
                />
              </svg>
            </div>
            <div className="contact-option-text">
              <h4>Call Me</h4>
              <a href="tel:+8801746885259">+880 1746 885259</a>
            </div>
          </div>

          <div className="contact-option">
            <div className="contact-option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </div>
            <div className="contact-option-text">
              <h4>Email me</h4>
              <a href="mailto:mahfuzm444@gmail.com">mahfuzm444@gmail.com</a>
            </div>
          </div>

          <div className="contact-option">
            <div className="contact-option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </div>
            <div className="contact-option-text">
              <h4>My Address</h4>
              <p>House NO: 227, Ward: 6, Bhangura, Pabna, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="right">
          {!isFormSubmited ? (
            <form onSubmit={onSubmit}>
              <div className="name-wraper">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="mail-wrapper">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="subject-wrapper">
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  required
                />
              </div>
              <div className="text-area-wrapper">
                <label>
                  <textarea></textarea>
                </label>
              </div>
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </form>
          ) : (
            <div className="form-success-massate">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                  stroke="currentColor"
                  strokeWidth="3"
                ></path>
              </svg>
              <h4 style={{ color: "green", fontSize: "2rem" }}>
                Form submitted successfully!
              </h4>
              <p>
                Thank you! The form has been submitted successfully. I will
                reply to you soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
