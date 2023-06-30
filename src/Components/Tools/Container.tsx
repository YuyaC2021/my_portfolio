import { ReactNode } from "react";

type ContainerType = {
  id: string;
  title: string;
  children: ReactNode;
};

const Container = ({ id, title, children }: ContainerType) => {
  return (
    <div
      id={id}
      className="w-full flex flex-col items-center pt-5 md:px-[90px] px-3"
    >
      <div className="w-[100%] lg:w-[800px] xl:w-[1000px]">
        <h1 className="py-3 text-center text-2xl text-[blue] font-bold">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Container;
