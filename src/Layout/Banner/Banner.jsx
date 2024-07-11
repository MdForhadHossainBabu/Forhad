import { Button } from "@mui/material";
import CountUp from "react-countup"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import bannerImg from "../../assets/forhad.png";

const Banner = () => {
 return (
   <div className="w-full h-full  md:px-20 bg text-white px-4 py-9 mt-1">
     
     <div>
       {/* main div */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center px-7">
         <div className=" mx-auto border-[#00e187] pb-1  px-1 flex md:hidden lg:hidden">
           <img
             className="w-12/12 h-[32rem] mx-auto  rounded-full border-2 border-dashed border-[#00e187]"
             src={bannerImg}
             alt=""
           />
         </div>
         <div className=" flex flex-col">
           <h1 className="font- font-jet text-sm md:text-lg">Web Developer</h1>
           <h1 className="md:text-4xl opacity-80 font-medium font-fira ">
             Hello I am
           </h1>
           <h1 className="md:text-6xl text-4xl font-bold accent text-balance font-fira">
             Forhad Hossain
           </h1>

           <h1 className="accent font-fira text-2xl my-4">
             <Typewriter
               words={[
                 'Programmer',
                 'Front-end developer',
                 'Mern-Stack Developer',
                 'Professional Coder',
                 'Experience of Git & Github',
               ]}
               cursor
               typeSpeed={100}
               delaySpeed={70}
               cursorStyle="_"
               loop={true}
             />
           </h1>
           <p className="font-geo">
             Hello! there I am Forhad Hossain. I am passionate web developer &
             also developing a dynamic web site web based-on friendly. If you
             want to be your dynamic web site then I can develop your website
             ...
           </p>
           <div className="flex items-center gap-3 mt-6">
             <a href="https://facebook.com/yesforhad" target="_blank">
               <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
                 <FaFacebook className="text-lg text-white" />
               </button>
             </a>

             <a href="https://github.com/MdForhadHossainBabu" target="_blank">
               <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
                 <FaGithub className="text-lg" />
               </button>
             </a>
             <a
               href="https://linkedin.com/in/mdforhadhossainbabu"
               target="_blank"
             >
               <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
                 <FaLinkedin className="text-lg" />
               </button>
             </a>

             <a href="https://instagram.com/yesforhad" target="_blank">
               <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
                 <FaInstagram className="text-lg" />
               </button>
             </a>
           </div>
           {/* Download CV */}
           <div className="mt-6">
             <a
               href="../../assets/Md-Forhad-Hossain_Cv.pdf"
               download={'../../assets/Md-Forhad-Hossain_Cv.pdf'}
             >
               <Button
                 className="flex font-fira items-center gap-2"
                 variant="contained"
               >
                 Download CV <FaDownload />
               </Button>
             </a>
           </div>
         </div>
         <img className="radius hidden md:flex" src={bannerImg} alt="" />
         {/* <div className=" mx-auto border-b-4  border-x-2 border-[#00e187] pb-1 animate-pulse px-1  radius hidden md:flex lg:flex  rounded-b-full border-dashed">
           <img
             className="w-12/12 h-[32rem] mx-auto  rounded-b-full"
             src={bannerImg}
             alt=""
           />
         </div> */}
       </div>
       {/* github counter */}
       <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 md:mt-16">
         <div className="font-extrabold text-4xl md:text-7xl font-jet flex items-center mx-auto">
           {/* year of experience */}
           <CountUp end={1} duration={10} />
           <h4 className="text-sm font-fira md:font-jet mt-5 ml-2 font-normal opacity-70">
             Year of <br /> Experienced
           </h4>
         </div>
         <div className="font-extrabold text-4xl md:text-7xl font-jet flex items-center mx-auto">
           {/* project complete */}
           <CountUp end={14} duration={10} />
           <h4 className="text-sm mt-5 ml-2 font-normal opacity-70">
             Project <br /> Completed
           </h4>
         </div>
         <div className="font-extrabold text-4xl md:text-7xl font-jet flex items-center mx-auto">
           {/* project complete */}
           <CountUp end={210} duration={10} />
           <h4 className="text-sm mt-5 ml-2 font-normal opacity-70">
             Total <br /> Contributions
           </h4>
         </div>
         <div className="font-extrabold text-4xl md:text-7xl font-jet flex items-center mx-auto">
           {/* project complete */}
           <CountUp end={340} duration={10} />
           <h4 className="text-sm mt-3 ml-2 font-normal opacity-70">
             Code <br /> Commits
           </h4>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Banner;