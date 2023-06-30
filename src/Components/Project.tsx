// Component
import Container from "./Tools/Container";
import ProjectImg from "./ProjectComponent/ProjectImg";

interface projectDataType {
  path: string;
}

const projectData = [
  { path: "/img/webDev.jpeg" },
  { path: "/img/webDev.jpeg" },
  { path: "/img/webDev.jpeg" },
  { path: "/img/webDev.jpeg" },
];

const Project = () => {
  return (
    <Container id="project" title="Project">
      <div className="w-[full] flex justify-center flex-wrap">
        {projectData.map((obj: projectDataType, idx: number) => (
          <ProjectImg key={idx} imgPath={obj.path} />
        ))}

        {/* <div>
          <h1>Project1</h1>
          <h3>skills</h3>
          <p>details</p>
        </div> */}
      </div>
    </Container>
  );
};

export default Project;
