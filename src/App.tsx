// Components
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Main from "./Components/Main";
import Project from "./Components/Project";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="pb-5">
      <Main />
      <SideBar />
      <Experience />
      <Project />
      <div className="w-full">
        <Contact />
      </div>
    </div>
  );
}

export default App;
