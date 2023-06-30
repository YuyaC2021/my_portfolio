type ProjectImgType = {
  imgPath: string;
};

const ProjectImg = ({ imgPath }: ProjectImgType) => {
  return (
    <div className="w-[45%] min-w-[200px] bg-[blue] m-3 rounded-lg overflow-hidden relative cursor-pointer shadow-lg shadow-black flex-grow">
      <img className="w-[100%]" src="/img/webDev.jpeg" alt="title" />
      <div className="w-[100%] h-[100%] bg-black/[0.5] hover:bg-gradient-to-l from-indigo-500/[0.8] absolute top-0 left-0 flex flex-col justify-center items-center text-transparent hover:text-white">
        <p className="">name</p>
        <p className="">skills</p>
        <p className="">gitLink</p>
      </div>
    </div>
  );
};

export default ProjectImg;
