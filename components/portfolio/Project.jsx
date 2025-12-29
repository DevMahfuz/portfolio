"use client";

import Image from "next/image";

const Project = ({ project }) => {
  return (
    <section className="container">
      <Image
        src={`/img/portfolio/${project.mainImage}`}
        width={543}
        height={306}
        alt={`${project.title}'s Image`}
      />
      <h1>{project.title}</h1>

      <p>{project.description}</p>
      <div className="technologies-used">
        <h3>Technologies Used:</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="wp-block-button">
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
          Live Project
        </a>
      </div>
    </section>
  );
};

export default Project;
