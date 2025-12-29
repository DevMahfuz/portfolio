"use client";

import useSWR from "swr";
import Fetcher from "@/util/featcher/fetcher";
import { useState } from "react";
import Project from "./Project";
import Image from "next/image";

const Projects = () => {
  const { data, error, isLoading } = useSWR("/api/projects", Fetcher);
  let [isProjectOpen, setIsProjectOpen] = useState(null);

  if (isLoading) {
    return (
      <div className="project-container">
        <div className="project-item-loader"></div>
        <div className="project-item-loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: "orange", textAlign: "center" }}>
        Something went wrong
      </div>
    );
  }

  if (data) {
    let projects = data;
    console.log(projects);
    return (
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div
              className="project-item"
              key={project.id}
              onClick={() => setIsProjectOpen(project)}
            >
              <div className="project-img">
                <Image
                  src={`/img/portfolio/${project.thumbnail}`}
                  width={400}
                  height={225}
                  alt={`${project.title}'s Image`}
                />
              </div>
              <div className="project-meta">{project.title}</div>
            </div>
          );
        })}
        {isProjectOpen && (
          <div className="project-view">
            <button className="btn" onClick={() => setIsProjectOpen(null)}>
              Close
            </button>
            <Project project={isProjectOpen} />
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Projects;
