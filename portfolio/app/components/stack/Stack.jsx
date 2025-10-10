import style from "./style.css";

export default function Stack() {
  return (
    <div className="div-principal">
      <section className="section-card">
        <div className="div-titulo">
          <h2>Linguagens de programação e de marcação</h2>
        </div>
        <ul>
          <li>
            <img src="/html5.svg" alt="HTML5" />
          </li>
          <li>
            <img src="/js.svg" alt="JavaScript" />
          </li>
          <li>
            <img src="/csharp.svg" alt="C-Sharp" />
          </li>
          <li>
            <img src="/css.svg" alt="CSS3" />
          </li>
        </ul>
      </section>

      <section className="section-card">
        <div className="div-titulo">
          <h2>Frameworks e bibliotecas</h2>
        </div>
        <ul>
          <li>
            <img src="/nextt.svg" alt="Next.js" />
          </li>
          <li>
            <img src="/node.svg" alt="Node.js" />
          </li>
          <li>
            <img src="/exp.svg" alt="Express.js" />
          </li>
          <li>
            <img src="/react.svg" alt="React.js" />
          </li>
        </ul>
      </section>

      <section className="section-card">
        <div className="div-titulo">
          <h2>Ferramentas</h2>
        </div>
        <ul>
          <li>
            <img src="/mysql.svg" alt="MySql" />
          </li>
        </ul>
      </section>
    </div>
  );
}
