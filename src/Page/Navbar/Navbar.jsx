import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import Banner from "../../Layout/Banner/Banner";
import Contact from "../../Layout/Contact/Contact";
import Portfolio from "../../Layout/Portfolio/Portfolio";
import About from "../../Layout/About/About";
import Footer from "../../Layout/Footer/Footer";
import { LuPlay } from "react-icons/lu";
import v1 from "../../assets/Hybrid Work Management_ Collaborate Across Teams, Workstyles & Locations..mp4" 
import Services from "../Services/Services";
import Resume from "../../Layout/Resume/Resume";
import OpenModal from "../../components/Modal";


const Navbar = () => {
 const [isOpen, setOpen] = useState(false);

 
 const menuItem = (
   <>
     <a
       href="#home"
       className="border px-5 font-medium opacity-80 text-white hover:scale-105 border-blue-900 hover:text-white hover:bg-blue-950 duration-200"
     >
       Home
     </a>
     <a
       href="#services"
       className="border px-5 font-medium opacity-80 text-white border-blue-900  hover:text-white hover:bg-blue-950 duration-200"
     >
       Services
     </a>
     <a
       href="#about"
       className="border px-5 font-medium opacity-80 text-white border-blue-900  hover:text-white hover:bg-blue-950 duration-200"
     >
       About
     </a>
     <a
       href="#resume"
       className="border px-5 font-medium opacity-80 text-white border-blue-900  hover:text-white hover:bg-blue-950 duration-200"
     >
       Resume
     </a>
     <a
       href="#portfolio"
       className="border px-5 font-medium opacity-80 text-white border-blue-900  hover:text-white hover:bg-blue-950 duration-200"
     >
       Portfolio
     </a>
     <a
       href="#contact"
       className="border px-5 font-medium opacity-80 text-white border-blue-900  hover:text-white hover:bg-blue-950 duration-200"
     >
       Contact
     </a>
   </>
 );
 return (
   <div className="relative">
     <div className="flex items-center justify-between bg-slate-700 max-w-screen-2xl mx-auto py-1 fixed w-full z-20 h-11 md:px-20 px-4 pl-10">
       <div>
         <Link to="/">
           <h1 className="text-4xl font-extrabold text-white items-center font-fira flex gap-0">
             Forhad
             <span className="accent gap-0">.</span>
           </h1>
         </Link>
       </div>
       <div>
         <div className="text-2xl md:hidden lg:hidden">
           <span onClick={() => setOpen(!isOpen)}>
             <Hamburger color="#4FD1C5" />
           </span>
         </div>
         <ul className={`md:flex lg:flex items-center gap-4 font-geo hidden`}>
           {menuItem}
         </ul>
         <ul
           className={`${
             isOpen ? 'flex flex-col  ' : 'hidden'
           } fixed right-0 px-2 w-60 h-screen bg top-0 -z-10 md:hidden duration-300`}
         >
           <h1 className="text-4xl font-extrabold text-center text-white font-jet mt-24">
             Forhad
             <span className="accent gap-0">.</span>
           </h1>
           <span className="flex flex-col justify-center space-y-5  mt-20 mx-auto w-full text-lg font-geo">
             {menuItem}
           </span>
         </ul>
       </div>
     </div>
     {/* banner section */}
     <div className="pt-11" id="home">
       <Banner />
     </div>
     {/* resume me */}
     <div className="bg py-4 pt-20 my-[1px] md:px-20 px-11" id="services">
       <Services />
     </div>
     {/* about me */}
     <div className="bg py-4 my-[1px] md:px-20 px-11 " id="about">
       <Resume />
     </div>
     {/* resume me */}
     <div className="bg py-4 my-[1px]" id="resume">
       <About />
     </div>

     {/* portfolio section */}
     <div className="bg md:px-20 px-11 py-4 my-[1px]" id="portfolio">
       <Portfolio />
     </div>

     <div className=" md:px-20 px-11 pt-8 bg my-[1px]" id="contact">
       <Contact />
     </div>
     <div className="bg-slate-800 h-48">
       <Footer />
     </div>
     <div className=" fixed z-500 text-white bottom-3 left-4">
       <OpenModal />
     </div>
   </div>
 );
};

export default Navbar;