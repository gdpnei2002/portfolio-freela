import { Container } from "./style";

export function Xp() {
  return (
    <Container>
      <hr />
      <h1 id="xp">Experiências:</h1>
      <p className="titulo">Desenvolvedor Full-Stack</p>
      <p className="tempo">Dez.2021 - Atualmente</p>
      <p className="tipo">Freelance</p>
      <p className="detalhes">
        Desenvolvo landing pages de maneira independente, utilizando HTML | CSS
        | JS | REACT | ANGULAR com o propósito de ampliar a visibilidade dos
        seus produtos ou serviços.
        <br />
        Experiência em criação de Sistemas e Landing Pages para empresas no ramo de saúde,
        imobiliário e entre outros. <br />
        <br />
      </p>
      <p className="titulo">Desenvolvedor Full-Stack</p>
      <p className="tempo">Set.2022 - Atualmente</p>
      <p className="tipo">Thinker</p>
      <p className="detalhes">
        Hoje participo da equipe de desenvolvimento da empresa{" "}
        <a href="https://thinkam.net/home" target="_blank" rel="noreferrer">
          {" "}
          Think A.M.{" "}
        </a>{" "}
        tenho como foco desenvolver landing pages e sistemas de CRM's.
        <br />
        <br />
      </p>
      <hr />
    </Container>
  );
}
