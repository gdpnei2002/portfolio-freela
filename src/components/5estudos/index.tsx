import { Container } from "./style";

export function Estu(){
    return(
        <Container>
           <h1 id="es">Estudos:</h1>
            <p  className="titulo">
                Curso Ignite da Rocketseat 
            </p>
            <p  className="tempo">
                Nov.2021 - Atualmente
           </p>
           <p  className="tipo">
                Curso online
            </p>
            <p  className="detalhes">
                Na Rocketseat aprendo a construção de aplicações em Next.js, com varias estilizações como styled components, SASS, CHAKRA, integrações de api e etc. <br /><br />
                Já no back end, temos aulas desde a criação de API's até de sistemas mais complexos em Node.js com ambiente Docker.<br /><br />
            </p>
            <p  className="titulo">
                Análise e Desenvolvimento de Sistemas
            </p>
            <p  className="tempo">
                Janeiro.2020 - Julho.2022
           </p>
           <p  className="tipo">
                Faculdade
            </p>
            <p  className="detalhes">
            Hoje graduado, vejo que a faculdade me proporcionou várias experiências na área, criando uma network com profissionais atuantes no mercado, assim fazendo com que eu tenha conseguido meus primeiros serviços de freelance.
            </p>
        </Container>
    );
}