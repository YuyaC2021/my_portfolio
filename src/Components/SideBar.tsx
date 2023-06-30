import { useState, useCallback } from "react";

// Icons
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const SideBar = () => {
  const [showNav, setShowNave] = useState<boolean>(false);
  const toggleNav = useCallback(() => setShowNave((prev) => !prev), []);

  console.log(showNav);
  return (
    <div>
      <AiOutlineMenu
        size={20}
        className="fixed top-0 right-0 z-100 md:hidden m-3 cursor-pointer"
        onClick={toggleNav}
      />
      {showNav ? (
        <div
          className="fixed top-0 right-0 z-100 w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20"
          onClick={toggleNav}
        >
          {/* <span className="text-black cursor-pointer absolute top-2 right-2 z-100 md:hidden">
            &#935;
          </span> */}
          <a
            href="#main"
            className="text-black border-1 bg-[#F3F6FB] border-[#F3F6FB] rounded-full flex justify-center items-center py-1 my-5 w-52 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
          >
            <AiOutlineHome size={20} />
            <span className="pl-1">Home</span>
          </a>
          <a
            href="#work"
            className="text-black border-1 bg-[#F3F6FB] border-[#F3F6FB] rounded-full flex justify-center items-center py-1 my-5 w-52 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
          >
            <MdWorkOutline size={20} />
            <span className="pl-1">Work</span>
          </a>
          <a
            href="#project"
            className="text-black border-1 bg-[#F3F6FB] border-[#F3F6FB] rounded-full flex justify-center items-center py-1 my-5 w-52 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
          >
            <TbGridDots size={20} />
            <span className="pl-1">Project</span>
          </a>
          <a
            href="#resume"
            className="text-black border-1 bg-[#F3F6FB] border-[#F3F6FB] rounded-full flex justify-center items-center py-1 my-5 w-52 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
          >
            <IoDocumentTextOutline size={20} />
            <span className="pl-1">Resume</span>
          </a>
          <a
            href="#contact"
            className="text-black border-1 bg-[#F3F6FB] border-[#F3F6FB] rounded-full flex justify-center items-center py-1 my-5 w-52 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
          >
            <IoIosContact size={20} />
            <span className="pl-1">Contact</span>
          </a>
        </div>
      ) : (
        <>
          <div className="md:flex hidden fixed w-14 h-screen top-0 left-0 flex-col justify-center items-end">
            <a
              href="#main"
              className="bg-[#F3F6FB] w-10 border-2 border-[#F3F6FB] rounded-full flex justify-center items-center p-1 my-3 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
            >
              <AiOutlineHome size={20} />
            </a>
            <a
              href="#work"
              className="bg-[#F3F6FB] w-10 border-2 border-[#F3F6FB] rounded-full flex justify-center items-center p-1 my-3 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
            >
              <MdWorkOutline size={20} />
            </a>
            <a
              href="#project"
              className="bg-[#F3F6FB] w-10 border-2 border-[#F3F6FB] rounded-full flex justify-center items-center p-1 my-3 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
            >
              <TbGridDots size={20} />
            </a>
            <a
              href="#resume"
              className="bg-[#F3F6FB] w-10 border-2 border-[#F3F6FB] rounded-full flex justify-center items-center p-1 my-3 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
            >
              <IoDocumentTextOutline size={20} />
            </a>
            <a
              href="#contact"
              className="bg-[#F3F6FB] w-10 border-2 border-[#F3F6FB] rounded-full flex justify-center items-center p-1 my-3 shadow-md shadow-black/40 hover:shadow-black/90 hover:scale-110 ease-in duration-150"
            >
              <IoIosContact size={20} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
