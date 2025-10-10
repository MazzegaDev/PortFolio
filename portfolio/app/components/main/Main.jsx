import style from "./style.css";
import Stack from "../stack/Stack.jsx";

export default function Main() {
  return (
    <main>
      {/* sobre */}
      <div className="titulo-sobre" id="sobre">
        <h1>Sobre mim</h1>
      </div>

      <section className="section-sobre">
        <p>
          Sou Guilherme Mazzega Barchi, nascido em 05 de maio de 2005,
          atualmente cursando o quarto termo de Análise e Desenvolvimento de
          Sistemas na Universidade do Oeste Paulista (Unoeste). Procuro uma
          oportunidade para aplicar meus conhecimentos na prática, contribuir
          com soluções tecnológicas e desenvolver minha carreira profissional na
          área de TI.
        </p>
      </section>

      <section className="section-imagem">
        <img 
        src="/rahul-mishra-glmeeU0zabw-unsplash.jpg" 
        alt=""
        width={500}
        height={300}
        />
      </section>
      {/* sobre */}

      {/* stack */}
        <div className="titulo-stack" id="stack">
            <h1>Stack</h1>
        </div>
      {/* stack */}
      <section className="section-stack">
        <Stack/>        
      </section>
    </main>
  );
}
