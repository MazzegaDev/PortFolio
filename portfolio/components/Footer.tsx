import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";

export default function FooterComp() {
   return (
      <footer className="bg-slate-500 flex flex-col  p-4 text-white">
         <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
               <p className="text-white text-2xl items-center">
                  Desenvolvido por
                  <a href="https://github.com/MazzegaDev" target="_blank">MazzegaDev</a>
               </p>
               <SiGithub />
            </div>

            <div className="flex gap-8">
               <div className="flex items-center gap-2">
                  <SiGmail />
                  <a href="mailto:mazzguilherme@gmail.com">gmail</a>
               </div>

               <div className="flex items-center gap-2">
                  <SiLinkedin />
                  <a href="https://linkedin.com/in/mazzegadev" target="_blank">
                     linkedin
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
