import { FaGithub } from "react-icons/fa6";
import { IoArrowForwardSharp } from "react-icons/io5";
import img1 from "../../assets/1.png"
import img2 from "../../assets/2 (2).png"
import img3 from "../../assets/3.png"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Scrollbars from "rc-scrollbars";


const Portfolio = () => {
  return (
    <Carousel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
        <div className="mx-auto px-12">
          <h1 className="text-8xl font-extrabold font-jet">01</h1>
          <h1 className="text-4xl font-bold font-geo">Front-end Project</h1>
          <p className="text-balance py-3">
            An HTML, CSS, and JavaScript project integrates front-end
            technologies to build interactive and visually appealing web
            applications, combining structure (HTML), styling (CSS), and dynamic
            behavior (JavaScript) for responsive user interfaces.
          </p>
          <h3 className="text-xl font-jet font-bold accent">
            Html 5, Css 3, Javascript
          </h3>
          <div className="my-5 pr-12">
            <hr />
          </div>
          <div className="flex items-center gap-6">
            <div>
              <a target="_blank" href="https://b9-assignment-07.netlify.app">
                <h3 className=" w-10 text-blue-950 shadow-2xl drop-shadow-2xl h-10 flex items-center justify-center bg-slate-950 border border-[#00e187] rounded-full p-1">
                  <IoArrowForwardSharp className=" hover:-rotate-45 text-slate-100 hover:text-[#00e187] duration-300 w-full h-full" />
                </h3>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/MdForhadHossainBabu/Vive-Calories"
              >
                <h3 className=" w-10 text-blue-950 shadow-2xl drop-shadow-2xl h-10 flex items-center justify-center hover:bg-slate-950 border border-[#00e187] rounded-full p-1">
                  <FaGithub className=" text-slate-100 hover:text-[#00e187] duration-300 w-full h-full" />
                </h3>
              </a>
            </div>
          </div>
        </div>

        <div className="border mx-auto h-[32rem] overflow-auto">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
        <div className="mx-auto px-12">
          <h1 className="text-8xl font-extrabold font-jet">02</h1>
          <h1 className="text-4xl font-bold font-geo">Front-end Project</h1>
          <p className="text-balance py-3">
            A project using React.js and Tailwind CSS combines powerful
            front-end tools for building modern web applications. React.js
            enables component-based development for dynamic user interfaces,
            while Tailwind CSS provides utility-first styling for rapid design
            iteration.
          </p>
          <h3 className="text-xl font-jet font-bold accent">
            Html 5, Css 3,Tailwind Css, React.js
            <br /> Firebase, MongoDB
          </h3>
          <div className="my-5 pr-12">
            <hr />
          </div>
          <div className="flex items-center gap-6">
            <div>
              <a target="_blank" href="https://assignment-11-effective.web.app">
                <h3 className=" w-10 text-blue-950 shadow-2xl drop-shadow-2xl h-10 flex items-center justify-center bg-slate-950 border border-[#00e187] rounded-full p-1">
                  <IoArrowForwardSharp className=" hover:-rotate-45 text-slate-100 hover:text-[#00e187] duration-300 w-full h-full" />
                </h3>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/MdForhadHossainBabu/Effective-task"
              >
                <h3 className=" w-10 text-blue-950 shadow-2xl drop-shadow-2xl h-10 flex items-center justify-center hover:bg-slate-950 border border-[#00e187] rounded-full p-1">
                  <FaGithub className=" text-slate-100 hover:text-[#00e187] duration-300 w-full h-full" />
                </h3>
              </a>
            </div>
          </div>
        </div>

        <div className="border mx-auto h-[32rem] overflow-auto">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
        <div className="mx-auto px-12">
          <h1 className="text-8xl font-extrabold font-jet">03</h1>
          <h1 className="text-4xl font-bold font-geo">Front-end Project</h1>
          <p className="text-balance py-3">
            "Modern Estate Elite" could be a project name or concept for a
            high-end real estate platform or service. It aims to offer exclusive
            properties with cutting-edge design and luxurious ameniti es,
            catering to affluent clients seeking upscale living solutions. 
          </p>
          <h3 className="text-xl font-jet font-bold accent">
            Html 5, Css 3, Tailwind Css, React.js <br />
            Firebase , MongoDB
          </h3>
          <div className="my-5 pr-12">
            <hr />
          </div>
          <div className="flex items-center gap-6">
            <div>
              <a target="_blank" href="https://estate-elite-final.web.app">
                <h3 className=" w-10 text-blue-950 shadow-2xl drop-shadow-2xl h-10 flex items-center justify-center bg-slate-950 border border-[#00e187] rounded-full p-1">
                  <IoArrowForwardSharp className=" hover:-rotate-45 text-slate-100 hover:text-[#00e187] duration-300 w-full h-full" />
                </h3>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/MdForhadHossainBabu/Estate-Elite"
              >
                <h3 className=" w-10 text-blue-950 shadow-2xl drop-shadow-2xl h-10 flex items-center justify-center hover:bg-slate-950 border border-[#00e187] rounded-full p-1">
                  <FaGithub className=" text-slate-100 hover:text-[#00e187] duration-300 w-full h-full" />
                </h3>
              </a>
            </div>
          </div>
        </div>


        <Scrollbars>
        <div className="border mx-auto h-[32rem] overflow-auto">
          <img src={img3} alt="" />
        </div>
        </Scrollbars>
      </div>
    </Carousel>
  );
};

export default Portfolio;