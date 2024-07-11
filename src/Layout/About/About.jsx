import { Button } from '@mui/material';
import Scrollbars from 'rc-scrollbars';
import { FaCss3, FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiDaisyui, SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';

const About = () => {
  return (
    <div className="text-white md:h-[100vh]  py-24 md:px-20 px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="  text-center space-y-3 py-[15%]">
        <h1 className="text-4xl font-bold font-jet text-slate-100 opacity-70">
          Why hire me?
        </h1>
        <p className="text-balance text-slate-300 opacity-75">
          Though a beginner, I possess strong foundational skills in Mern-stack
          and a keen willingness to learn. My fresh perspective and enthusiasm
          can bring new energy and innovative ideas to your team.
        </p>
        <div className="flex flex-col">
          <div className="mt-14">
            <a href="#contact">
              <Button className="w-10/12 mx-auto" variant="contained">
                Hire me !
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 md:h-[32rem] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {/* biography parent div */}
        <div className=" relative p-2 overflow-auto">
          <button className="w-full py-1 font-geo accent bg-slate-800 absolute z-10 right-0 top-0 h-10">
            Biography
          </button>
          <div className=" opacity-60 mt-16 space-y-2">
            <div className="font-geo flex items-center justify-between">
              <h3>Name </h3>
              <h3>Md Forhad Hossain Babu</h3>
            </div>
            <hr />
            <div className="font-geo flex items-center justify-between">
              <h3>age </h3>
              <h3>16</h3>
            </div>
            <hr />
            <div className="font-geo flex items-center justify-between">
              <h3>Email </h3>
              <h3>developerforhad2@gmail.com</h3>
            </div>
            <hr />
            <div className="font-geo flex items-center justify-between">
              <h3>Country </h3>
              <h3>Bangladesh</h3>
            </div>
            <hr />
            <div className="font-geo flex items-center justify-between">
              <h3>Address</h3>
              <h3>Kurigram, Bangladesh</h3>
            </div>
            <hr />
            <div className="font-geo flex items-center justify-between">
              <h3>Phone</h3>
              <h3>(+880) 13021-61178</h3>
            </div>
            <hr />
            <div className="font-geo flex items-center justify-between">
              <h3>Freelance</h3>
              <h3>Available</h3>
            </div>
          </div>
        </div>
        {/* skill section  */}
        <div className=" relative overflow-auto">
          <button className="w-full py-1 font-geo accent bg-slate-800 absolute z-10 top-0 h-10">
            Skill
          </button>
          <div className=" opacity-60 mt-16 overflow-auto grid grid-cols-3 gap-12">
            <div className="border p-4 justify-center mx-auto">
              {/* html5 */}
              <FaHtml5 className="text-2xl items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* css3 */}
              <FaCss3 className="text-2xl items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* Tailwind css */}
              <RiTailwindCssFill className="text-2xl items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* daisy ui */}
              <SiDaisyui className="text-2xl items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* javascript */}
              <IoLogoJavascript className="text-2xl items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* react.js */}
              <FaReact className="text-2xl animate-spin duration-100 items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* firebase */}
              <IoLogoFirebase className="text-2xl duration-100 items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* firebase */}
              <SiMongodb className="text-2xl duration-100 items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* node.js */}
              <SiNodedotjs className="text-2xl duration-100 items-center text-center flex justify-center" />
            </div>
            <div className="border p-4 justify-center mx-auto">
              {/* express.js */}
              <SiExpress className="text-2xl duration-100 items-center text-center flex justify-center" />
            </div>
          </div>
        </div>

            {/* <Scrollbars> */}
        <div className=" relative overflow-auto">
          
          <button className="w-full py-1 font-geo accent bg-slate-800 absolute z-10 top-0 h-10">
            Education
          </button>
          <div className=" opacity-60 mt-16 space-y-16">
              <div className="border-l-2 pl-4 border-[#00e187] relative mx-2">
                <span className="border-[3px] absolute top-0 -left-[11px] bg-[#00e187] w-2 p-2 rounded-full h-4 border-[#00e187]"></span>
                <h1 className="text-lg font-bold font-geo overflow-x-auto">
                  SSC-Secondary School certificate
                </h1>
                <h4 className="font-fira text-sm py-2">
                  Bagua Anantapur High School
                </h4>
                <span className="font-extrabold text-xl px-2 bg-opacity-80 text-slate-50 py-1 bg-[#00e187]">
                  2018-23
                </span>
                <p className="text-sm py-3 text-slate-50">
                  Successfully completed rigorous educational training. Gained
                  valuable skills, knowledge, and a strong academic foundation.
                  Participated actively in various learning activities.
                  Demonstrated consistent dedication to excellence. Prepared for
                  future educational and professional endeavors.
                </p>
              </div>
              <div className="border-l-2 pl-4 border-[#00e187] relative mx-2">
                <span className="border-[3px] absolute top-0 -left-[11px] bg-[#00e187] w-2 p-2 rounded-full h-4 border-[#00e187]"></span>
                <h1 className="text-lg font-bold font-geo overflow-x-auto">
                  HSC-Secondary School certificate
                </h1>
                <h4 className="font-fira text-sm py-2">
                  Kurigram Collectorate College
                </h4>
                <span className="font-extrabold text-xl px-2 bg-opacity-80 text-slate-50 py-1 bg-[#00e187]">
                  2023-24
                </span>
                <p className="text-sm py-3 text-slate-50">
                  Successfully completed rigorous educational training. Gained
                  valuable skills, knowledge, and a strong academic foundation.
                  Participated actively in various learning activities.
                  Demonstrated consistent dedication to excellence. Prepared for
                  future educational and professional endeavors.
                </p>
              </div>
              <div className="border-l-2 pl-4 border-[#00e187] relative mx-2">
                <span className="border-[3px] absolute top-0 -left-[11px] bg-[#00e187] w-2 p-2 rounded-full h-4 border-[#00e187]"></span>
                <h1 className="text-lg font-bold font-geo overflow-x-auto">
                  Complete Web Development
                </h1>
                <h4 className="font-fira text-sm py-2">Programming Hero</h4>
                <span className="font-extrabold text-xl px-2 bg-opacity-80 text-slate-50 py-1 bg-[#00e187]">
                  2023-2024
                </span>
                <p className="text-sm py-3 text-slate-50">
                  MERN Stack Complete Web Development Completed comprehensive
                  Programming Hero course on MERN stack web development.
                  Proficient in MongoDB, Express.js, React, Node.js, and
                  building full-stack applications.
                </p>
              </div>
          </div>
        </div>
            {/* </Scrollbars> */}
      </div>
    </div>
  );
};

export default About;
