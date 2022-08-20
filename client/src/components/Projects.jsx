import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECT);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <div className="mt-3">
      {data?.projects.length > 0 ? (
        <div className="row">
          {data?.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects </p>
      )}
    </div>
  );
};

export default Projects;
