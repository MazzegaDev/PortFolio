import ProjetosComp from "./Projetos";
import SobreComp from "./Sobre";
import StackComp from "./Stack";

export default function BodyComp(){


   return (
      <main className="bg-slate-400 min-h-screen p-2">
         {/* Sobre */}
         <SobreComp />
         {/* Stack */}
         <StackComp/>
         {/* Projetos */}
         <ProjetosComp/>
      </main>
   );
}