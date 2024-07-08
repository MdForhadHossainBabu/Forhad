import { FaFireAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiFirebase, SiMongodb } from "react-icons/si";


const Services = () => {
 return (
   <div>
     <h4 className="text-lg font-medium text-cyan-500/80 text-center uppercase">
       MY EXPERTISE
     </h4>
     <h1 className="text-4xl font-medium text-center font-geo uppercase">
       What I Do
     </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
       <div className="md:border-r md:border-b-0 border-b border-slate-400">
         <div className="text-center mx-auto py-4 pb-8">
           <FaReact className="mx-auto text-7xl text-blue-500" />
           <h1 className="text-3xl font-bold font-geo mt-7 text-balance">
             React Js Frontend <br />
             development
           </h1>
           <p className="text-balance px-4 mt-5 text-slate-300">
             React.js is a popular JavaScript library used for building user
             interfaces, particularly single-page applications. Developed and
             maintained by Facebook, React allows developers to create dynamic
             and interactive web applications efficiently. The main concept of
             React is its component-based architecture, where the UI is divided
             into reusable components. React uses a virtual DOM to optimize
             performance by minimizing direct manipulation of the actual DOM.
             Its declarative nature makes the code more predictable and easier
             to debug. React flexibility and simplicity make it a preferred
             choice for many developers in modern web development.
           </p>
         </div>
       </div>
       <div className="md:border-r border-b md:border-b-0 border-slate-400">
         <div className="text-center mx-auto py-4 pb-8">
           <SiFirebase className="mx-auto text-7xl text-yellow-600" />
           <h1 className="text-3xl font-bold font-geo mt-7 text-balance">
             Firebase Backend <br />
             Authentication
           </h1>
           <p className="text-balance px-4 mt-5 text-slate-300">
             Firebase Authentication is a Google service that simplifies user
             authentication for web and mobile apps. It supports multiple
             authentication methods, including email/password and social logins
             (Google, Facebook). The service handles secure login processes,
             user session management, and integrates seamlessly with other
             Firebase services like Firestore and Realtime Database. This makes
             it easy for developers to implement robust and secure
             authentication systems without extensive backend code.
           </p>
         </div>
       </div>
       <div>
         <div className="text-center mx-auto py-4 pb-8">
           <SiMongodb className="mx-auto text-7xl text-green-600" />
           <h1 className="text-3xl font-bold font-geo mt-7 text-balance">
             MongoDB Database
           </h1>
           <p className="text-balance px-4 mt-5 text-slate-1 00">
             MongoDB is a database that stores data in flexible, JSON-like
             documents. It supports dynamic schemas, horizontal scaling, and
             high availability, making it ideal for handling unstructured or
             semi-structured data in modern web applications.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Services;