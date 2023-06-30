// Component
import Container from "./Tools/Container";
import ExperienceComponent from "./ExperienceComponent/ExperienceComponent";

interface ObjType {
  year: number;
  month: number;
  title: string;
  duration: string;
  details: string;
}

const data = [
  {
    year: 2022,
    month: 12,
    title: "Web Developer",
    duration: "1 year",
    details: "Working Details",
  },
  {
    year: 2022,
    month: 12,
    title: "Web Developer",
    duration: "1 year",
    details: "Working Details",
  },
  {
    year: 2022,
    month: 12,
    title: "Web Developer",
    duration: "1 year",
    details: "Working Details",
  },
  {
    year: 2022,
    month: 12,
    title: "Web Developer",
    duration: "1 year",
    details: "Working Details",
  },
];

const Experience = () => {
  return (
    <Container id="work" title="Experience">
      <ul className="w-[80] border-l-2 border-black-500">
        {data.map((d: ObjType, idx: number) => {
          return (
            <ExperienceComponent
              key={idx}
              year={d.year}
              month={d.month}
              title={d.title}
              duration={d.duration}
              details={d.details}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default Experience;
