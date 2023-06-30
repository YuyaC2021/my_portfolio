import { TypeAnimation } from "react-type-animation";
// Icons
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// Profile img
import profile_img_path from "../assets/profile_img.jpg";

const Main = () => {
  return (
    <div id="main">
      <div className="img_container w-full relative">
        <img
          src={profile_img_path}
          alt="Profile Image"
          className="w-full h-screen"
        />
        <div className="text_container bg-white/70 w-100 h-100 absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center ">
          <div className="w-full max-w-[550px] bg-white/10 p-5 flex flex-col items-center">
            <h1 className="sm:text-2xl text-1xl">
              My name is
              <span className="sm:text-4xl text-3xl font-bold text-[grey] pl-3">
                Yuya Kawamoto
              </span>
            </h1>
            <h2>
              I am
              <TypeAnimation
                sequence={[
                  "a web developer", // Deletes 'One' and types 'Two'
                  3000, // Waits 2s
                  "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                  color: "grey",
                  paddingLeft: "10px",
                  fontWeight: "bold",
                }}
              />
            </h2>
            <div className="flex w-[80px] justify-between pt-5">
              <FaInstagram className="cursor-pointer" size={20} />
              <FaLinkedin className="cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
