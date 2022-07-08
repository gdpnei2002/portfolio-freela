import   "./style.css";

function Estu(){
    return(
         <>
           <h1 id="es">Estudos:</h1>
            <p  className="titulo">
                Curso da Rocketseat 
            </p>
            <p  className="tempo">
                Dez.2021 - Atualmente
           </p>
           <p  className="tipo">
                E.A.D.
            </p>
            <p  className="detalhes">
                Na Rocketseat aprendo a construção de aplicações em Next.js, com varias estilizações como styled components, SASS, CHAKRA, integrações de api e etc. <br /><br />
                Já no back end, temos aulas de desde criação de API's até de sistemas mais complexos em Node.js com ambiente Docker.
            </p>
            <p  className="titulo">
                Análise e Desenvolvimento de Sistemas
            </p>
            <p  className="tempo">
                Fevereiro.2020 - Julho.2022
           </p>
           <p  className="tipo">
                Faculdade
            </p>
            <p  className="detalhes">
            A graduação me proporcionou várias experiêcias na área, criando uma network com profissionais atuantes no mercado, assim, fazendo com que eu tenha conseguido meus primeiros serviços de freelacer.
            </p>
         </>
    );
}
export default Estu;