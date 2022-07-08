import "./style.css";
import perfil from '../../assets/perfilrosto.jpeg';

function About(){
    return(
         <>
            <img id="sobre" src={perfil} alt="" />
            <div>
            <h1>Sobre mim</h1>
                <p  className="">
                    Meu nome é José Neilson, graduado no curso de Analise e desenvolvimento de sistemas na faculdade,
                    busco oportunidade para aplicar os meus conhecimento e adquirir experiência nas áreas de desenvolvimento de software e web.
                    <br /><br />
                    Atualmente aplico o meu conhecimento em desenvolvimentos freelance, desenvolvendo aplicações web, com objetivo de facilitar os controles comerciais (serviços/vendas) de um determinado estabelecimento.
                    Desenvolvi front-end de CRM para alguns sistemas de vendas e criações de landing pages.
                </p>
                <h1 id="skills">Skills:</h1>
                <p  className="titulo">Front-End:</p>
                    <p className="skills">HTML5, CSS3, JS, REACT.JS, NEXT.JS, STYLED COMPONENTS, SASS, CHAKRA UI.</p>
                <p  className="titulo">Back-End:</p>
                    <p className="skills">Node.JS, API's, Docker, Laravel, My SQL.</p>
                <a target="_blank"  href="https://drive.google.com/file/d/1631ZQ6xdGRponXct4cKfZ_sgO7ps6iEt/view?usp=sharing" rel="noreferrer"><button className="curriculo">Currículo</button></a>
            </div>
         </>
    );
}

export default About;