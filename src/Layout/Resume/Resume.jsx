import img from "../../assets/forhad.png"


const Resume = () => {
 return (
   <div className="grid grid-cols-1 md:grid-cols-2 my-20">
     <div className="">
       <img className="mx-auto rounded-full" src={img} alt="" />
     </div>
     <div>
       <div className="flex flex-col md:px-16 mx-auto">
         <h1 className="text-lg font-geo py-4 md:mt-28 mt-12">About Me</h1>
         <h1 className="text-4xl font-medium font-geo">
           I develop Solutions
           <br />
           that Empower.
         </h1>
         <p className="text-white/80 py-8">
           I'm Forhad Hossain, a skilled MERN stack developer. With MongoDB,
           Express.js, React, and Node.js, I've crafted dynamic web applications
           that captivate. From sleek interfaces to powerful backend systems, I
           deliver unique online experiences. Let's turn your ideas into
           exceptional digital realities.
         </p>
       </div>
     </div>
   </div>
 );
};

export default Resume;