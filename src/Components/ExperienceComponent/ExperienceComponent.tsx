interface ObjType {
  year: number;
  month: number;
  title: string;
  duration: string;
  details: string;
}

const ExperienceComponent = ({
  year,
  month,
  title,
  duration,
  details,
}: ObjType) => {
  console.log(year);
  return (
    <li className="relative pl-3 pb-3">
      <p className="w-[10px] h-[10px] bg-[grey] rounded-full absolute top-[7px] -left-[6px]"></p>
      <div className="flex">
        <p className="text-lg text-white font-bold bg-[blue] p-1 rounded-md">
          {year}-{month}
        </p>
        <p className="text-lg px-3 p-1">{title}</p>
        <p className="text-lg text-[grey] p-1">{duration}</p>
      </div>
      <div>
        <p>{details}</p>
      </div>
    </li>
  );
};

export default ExperienceComponent;
