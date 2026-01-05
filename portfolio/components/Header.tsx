export default function HeaderComp(){
   return (
      <header className="bg-slate-500">
         <div className="flex justify-between p-4 text-white max-md:text-2xl lg:text-4xl">
            <h1>PortfolioDev</h1>
            <ul className="flex max-md:gap-2 lg:gap-10">
               <li className="hover:scale-90 hover:text-blue-400">
                  <a href="#sobre">Sobre</a>
               </li>
               <li className="hover:scale-90 hover:text-blue-400">
                  <a href="#stack">Stack</a>
               </li>
               <li className="hover:scale-90 hover:text-blue-400">
                  <a href="#projetos">Projetos</a>
               </li>
            </ul>
         </div>
      </header>
   );
}