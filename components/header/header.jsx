"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.style.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          &lt;Mahfuzur.me&#8725;&gt;
        </Link>
        <nav>
          <div className="desktop-navigation">
            <Link
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </Link>
            <Link
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
            <Link
              href="#testimonial"
              className={activeSection === "testimonial" ? "active" : ""}
            >
              Testimonial
            </Link>
            <Link
              href="#why-me"
              className={activeSection === "why-me" ? "active" : ""}
            >
              Why me
            </Link>
            <Link
              href="#hire-me"
              className={activeSection === "hire-me" ? "active" : ""}
            >
              HIRE ME
            </Link>
            <Link
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
          <div className="mobile-navigation">
            <svg
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 448 512"
            >
              {isMenuOpen ? (
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              ) : (
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              )}
            </svg>

            {isMenuOpen && (
              <div className="dropdown-mobile-menu">
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                >
                  About
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="#skills"
                  className={activeSection === "skills" ? "active" : ""}
                >
                  Skills
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="#portfolio"
                  className={activeSection === "portfolio" ? "active" : ""}
                >
                  Portfolio
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="#testimonial"
                  className={activeSection === "testimonial" ? "active" : ""}
                >
                  Testimonial
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="#why-me"
                  className={activeSection === "why-me" ? "active" : ""}
                >
                  Why me
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="#hire-me"
                  className={activeSection === "hire-me" ? "active" : ""}
                >
                  HIRE ME
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="#contact"
                  className={activeSection === "contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
