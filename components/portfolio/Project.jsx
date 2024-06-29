"use client";

import Fetcher from "@/util/featcher/fetcher";
import useSWR from "swr";

const Project = ({ id }) => {
  const { data, error, isLoading } = useSWR(`/api/projects/${id}`, Fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred</div>;
  }

  if (data) {
    let project = data.data;
    return (
      <section className="container">
        <img src={project.yoast_head_json.og_image[0].url} alt="" />
        <h1>{project.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
      </section>
    );
  }

  return null;
};

export default Project;
