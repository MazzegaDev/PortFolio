import style from "./style.css";

export default function Footer() {
    return(
        <footer id="contato">
            
            <div className="div-contatos">
                <h1>Meus contatos</h1>
                <ul className="lista-contatos">
                    <li>
                        <a className="links" href="https://www.linkedin.com/in/guilherme-mazzega-barchi-b0a24a345/" target="_blank"><img src="/lkd.svg" alt="Linkedin"/></a>
                    </li>
                    <li>
                        <a className="links" href="mailto:mazzguilherme@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};
