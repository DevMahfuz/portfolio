"use client";
import { useState } from "react";
import "./contact.style.css";

const Contact = () => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_FORM_API_KEY);

    // (Optional) if you want first+last merged into a single "name" field
    const firstName = formData.get("first-name") || "";
    const lastName = formData.get("last-name") || "";
    formData.set("name", `${firstName} ${lastName}`.trim());

    const object = Object.fromEntries(formData.entries());
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
      event.target.reset(); // optional
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-wrapper">
        <div className="left">{/* ...your left content unchanged... */}</div>

        <div className="right">
          {!isFormSubmited ? (
            <form onSubmit={onSubmit}>
              {/* Hidden combined name field (recommended) */}
              <input type="hidden" name="name" value="" />

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
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="text-area-wrapper">
                {/* ✅ THIS was the main issue */}
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  required
                />
              </div>

              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </form>
          ) : (
            <div className="form-success-massate">
              {/* ...success UI unchanged... */}
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
