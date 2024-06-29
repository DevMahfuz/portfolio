"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.style.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

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
        <div className="logo">&lt;Mahfuzur.me&#8725;&gt;</div>
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
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
          <div className="mobile-navigation"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
