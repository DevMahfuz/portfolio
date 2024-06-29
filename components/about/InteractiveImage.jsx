"use client";

// components/InteractiveImage.js
import { useEffect, useRef } from "react";
import Image from "next/image";
import "./about.style.css";

const InteractiveImage = () => {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  const svgContent = `<svg width="400" height="540" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="540"" fill="#000" /></svg>`;

  const blurDataURL = `data:image/svg+xml;base64,${btoa(svgContent)}`;

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const image = imageRef.current;

    const handleMouseMove = (event) => {
      const { offsetX, offsetY, target } = event;
      const { offsetWidth: width, offsetHeight: height } = target;

      // Calculate rotation values
      const rotateX = (offsetY / height - 0.5) * 20; // Adjust the multiplier for more or less rotation
      const rotateY = (offsetX / width - 0.5) * -20;

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "rotateX(0) rotateY(0) scale(1)";
    };

    if (imageContainer) {
      imageContainer.addEventListener("mousemove", handleMouseMove);
      imageContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    // Clean up event listeners on component unmount
    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener("mousemove", handleMouseMove);
        imageContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={imageContainerRef} className="imageContainer">
      <Image
        ref={imageRef}
        src="/img/about-img.jpg"
        width={400}
        height={500}
        alt="image of Mahfuz"
        placeholder="blur"
        blurDataURL={blurDataURL}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default InteractiveImage;
