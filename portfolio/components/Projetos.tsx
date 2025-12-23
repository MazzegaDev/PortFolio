import ProjetoCardComp from "./ProjetoCard";

export default function ProjetosComp() {
   interface IProjeto {
      name: string;
      desc: string;
      link: string;
      imageLink?: string;
   }

   const p1: IProjeto = {
      name: "FullStore",
      desc: "Um sistema de e-commerce moderno, construído com arquitetura separada entre frontend e backend, oferecendo uma solução completa para gestão de lojas virtuais.",
      link: "https://github.com/MazzegaDev/FullStore",
      imageLink: "Fsprods.png",
   };
   const p2: IProjeto = {
      name: "SGE",
      desc: "API Rest de gerenciamento escolar",
      link: "https://github.com/MazzegaDev/SGE",
      imageLink: "sge.png",
   };
   const p3: IProjeto = {
      name: "JurandirLanches",
      desc: "Sistema monolito para a hamburgueria do seu Jurandir, construido com arquitetura MVC",
      link: "https://github.com/MazzegaDev/JurandirLanches",
      imageLink: "jurandir.png",
   };
   
   return (
      <section className="flex flex-col ">
         <h1 className="text-white text-center text-4xl py-2" id="projetos">Projetos</h1>
         <div className="flex max-md:flex-col  flex-wrap m-2 items-center justify-center">
            <div className="flex max-md:flex-col">
               <ProjetoCardComp project={p1} />
               <ProjetoCardComp project={p2} />
            </div>
            <div className="flex max-md:flex-col">
               <ProjetoCardComp project={p3} />
            </div>
         </div>
      </section>
   );
}
