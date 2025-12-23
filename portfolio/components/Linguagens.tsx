import {
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiReact,
   SiExpress,
   SiTypescript,
   SiNextdotjs,
   SiTailwindcss,
   SiNodedotjs,
   
} from "react-icons/si";

export default function LinguagensComp() {
   return (
      <div className="p-2">
         <h1 className="text-white text-center text-2xl lg:text-3xl p-2">
            Linguagens
         </h1>

         <ul className="max-md:flex gap-3 max-md:items-center  max-md:flex-col  py-2 max-md:flex-wrap  lg:flex  lg:justify-center  lg:flex-wrap max-md:text-2xl lg:text-2xl lg:gap-10 md:flex  md:justify-center md:flex-wrap ">
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-yellow-300 p-2 rounded-2xl">
               <SiJavascript />
               JavaScript
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-orange-500 p-2 rounded-2xl">
               <SiHtml5 />
               HTML5
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-sky-500 p-2 rounded-2xl">
               <SiCss3 />
               CSS
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-blue-600 p-2 rounded-2xl">
               <SiReact />
               React
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-white p-2 rounded-2xl">
               <SiExpress />
               Express
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-blue-700 p-2 rounded-2xl">
               <SiTypescript />
               TypeScript
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-white p-2 rounded-2xl">
               <SiNextdotjs />
               Next
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-sky-400 p-2 rounded-2xl">
               <SiTailwindcss />
               TailwindCSS
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-green-700 p-2 rounded-2xl">
               <SiNodedotjs />
               Node
            </li>
         </ul>
      </div>
   );
}
