import { Container } from "./style";
import perfil from '../../assets/perfilrosto.jpeg';

function About(){
    return(
        <Container>
            <img id="sobre" src={perfil} alt="" />
            <div>
            <h1>Sobre mim</h1>
                <p className="p">
                    Já pensou em aumentar o alcance de seu produto/serviço ? <br />
                    Ou gerenciar com mais eficiência funcionários e estoque da sua empresa ? <br /><br />
                    Eu posso te ajudar, meu nome é José Neilson, sou graduado no curso de Analise e desenvolvimento de sistemas,
                    busco oportunidade para aplicar os meus conhecimento e adquirir experiência nas áreas de desenvolvimento de software e web.
                    <br /><br />
                    Atualmente aplico o meu conhecimento em desenvolvimentos freelance, desenvolvendo aplicações web, com objetivo de facilitar os controles comerciais (serviços/vendas) de um determinado estabelecimento.
                    Desenvolvi front-end de CRM para alguns sistemas de vendas, criações de landing pages e sistema para gestão de clientes.
                </p>
                <h1 id="skills">Skills:</h1>
                <p  className="titulo">Front-End:</p>
                    <p className="skills">HTML5, CSS3, JS, REACT.JS, NEXT.JS, STYLED COMPONENTS, SASS, CHAKRA UI.</p>
                <p  className="titulo">Back-End:</p>
                    <p className="skills">Node.JS, Docker, API's, My SQL, Laravel.</p>
            </div>
        </Container>
    );
}

export default About;