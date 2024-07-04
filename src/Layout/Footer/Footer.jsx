import { AwesomeButton } from "react-awesome-button";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
 return (
   <div className="md:px-20 px-10 pt-10 text-white">
     <div className="grid grid-cols-1 md:grid-cols-2 ">
       <div className="mx-auto ">
         <h1 className="text-4xl font-bold font-fira text-slate-200">
           Forhad
           <span className="text-[#00e187]">.</span>
         </h1>
         <h6 className="font-mono px-12 text-slate-300">Web Developer</h6>
       </div>
       <div className="mx-auto">
         <div className="flex items-center gap-3 mt-6">
           <a href="https://facebook.com/yesforhad" target="_blank">
             <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
               <FaFacebook className="text-3xl text-white" />
             </button>
           </a>
           <a href="https://github.com/MdForhadHossainBabu" target="_blank">
             <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
               <FaGithub className="text-3xl" />
             </button>
           </a>
           <a
             href="https://linkedin.com/in/mdforhadhossainbabu"
             target="_blank"
           >
             <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
               <FaLinkedin className="text-3xl" />
             </button>
      </a>

           <a href="https://instagram.com/yesforhad" target="_blank">
             <button className=" p-2 hover:scale-110 duration-200 rounded-full  text-white bg-gray-700 hover:bg-[#00e187] hover:bg-opacity-70">
               <FaInstagram className="text-3xl hover:text-rose-500" />
             </button>
           </a>
         </div>
       </div>
     </div>
     <br />
     <hr />
     <br />
     <h4 className="text-sm font-bold text-center font-geo">
       © 2024 Forhad Hossain. All Rights Reserved
     </h4>
   </div>
 );
};

export default Footer;