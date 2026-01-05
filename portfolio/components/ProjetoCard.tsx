interface IProjeto {
   name: string;
   desc: string;
   link: string;
   imageLink?: string;
}

interface IProjectCard {
   project: IProjeto;
}

export default function ProjetoCardComp({ project }: IProjectCard) {
   return (
      <div className="flex p-5 gap-4 my-2  ">
         <div className="bg-slate-200 rounded-2xl flex grow lg:flex-row flex-col p-4 gap-4 max-w-5xl w-1/2 border-slate-500  border-2 hover:scale-105">
            <img
               src={project.imageLink ? project.imageLink : "images.png"}
               alt="Foto do projeto"
               className="rounded-2xl w-full lg:w-1/2 object-cover"
            />

            <ul className="flex flex-col justify-center gap-4 text-center lg:text-left lg:w-1/2">
               <li className="font-bold text-xl">{project.name}</li>
               <li className="text-gray-700">{project.desc}</li>
               <li>
                  <a
                     href={project.link}
                     target="_blank"
                     className="text-blue-600"
                  >
                     GitHub
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
}
