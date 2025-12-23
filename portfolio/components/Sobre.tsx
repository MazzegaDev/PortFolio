export default function SobreComp() {
   return (
      <section>
         <h1 className="text-white text-center text-4xl py-2" id="sobre">
            Sobre mim
         </h1>
         <div className="text-white max-md:flex max-md:flex-row max-md:gap-5 max-md:justify-center max-md:items-center p-2 flex gap-5 lg:justify-evenly  md:flex md:flex-row md:gap-5 md:justify-center md:items-center max-sm:min-w-full min-sm:min-w-full">
            <img
               src="foto2.png"
               alt="minha foto"
               className="max-md:w-32 md:w-72 rounded-2xl"
            />

            <article className="bg-slate-500 p-2 rounded-2xl lg:text-left lg:w-1/2 lg:text-2xl lg:h-fit lg:self-center flex flex-wrap">
               <p className="p-2">
                  Bem vindos ao meu PortfolioDev, me chamo Guilherme Mazzega
                  Barchi sou estudante de Analise e Desenvolvimento de Sistemas
                  pela Unoeste e atualmente estou no quinto termo. Atualmente
                  tenho focado meus estudos em desenvolvimento web tanto no
                  front-end e no back-end.
               </p>
            </article>
         </div>
      </section>
   );
}
