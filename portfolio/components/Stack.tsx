import FerramentasComp from "./Ferramentas";
import LinguagensComp from "./Linguagens"

export default function StackComp() {
   return (
      <section className="m-2">
         <h1 className="text-white text-4xl text-center" id="stack">Stack</h1>
         <div className="max-md:flex max-md:flex-col py-5">
            <LinguagensComp/>
            <FerramentasComp/>
         </div>
      </section>
   );
}
