import { SiMysql, SiVscodium, SiGit } from "react-icons/si";

export default function FerramentasComp() {

   

   return (
      <div className="p-2">
         <h1 className="text-white text-center text-2xl lg:text-3xl p-2">
            Ferramentas
         </h1>

         <ul className="max-md:flex gap-3  max-md:items-center  max-md:flex-col py-2 max-md:flex-wrap lg:flex  lg:justify-center   lg:flex-wrap max-md:text-2xl lg:text-2xl lg:gap-10 md:flex  md:justify-center md:flex-wrap">
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-orange-400 p-2 rounded-2xl">
               <SiMysql />
               MySql
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-blue-500 p-2 rounded-2xl">
               <SiVscodium />
               Visual Studio Code
            </li>
            <li className="text-black hover:scale-105 flex items-center gap-3 bg-orange-700 p-2 rounded-2xl">
               <SiGit />
               Git
            </li>
         </ul>
      </div>
   );
}
