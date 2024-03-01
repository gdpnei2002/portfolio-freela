import { Container } from "./style";
import perfil from "../../assets/perfilrosto.jpeg";

export function About() {
  return (
    <Container>
      <img id="sobre" src={perfil} alt="" />
      <div>
        <h1>Sobre mim</h1>
        <p>
          Com uma trajetória sólida e apaixonada pela arte da programação, me
          apresento como José Neilson, graduado em Análise e Desenvolvimento de
          Sistemas. Minha jornada profissional é marcada pela dedicação
          incansável em transformar conceitos em realidade, impulsionando
          projetos do início ao fim.
        </p>{" "}
        <br />
        <p>
          Atualmente, tenho o privilégio de contribuir com a Think AM, onde
          estou trabalhando em um projeto do inicio ao fim. Desenvolvendo
          aplicações web, com objetivo de facilitar o control comercial
          (serviços/vendas) de um determinado estabelecimento. Desenvolvi
          front-end de CRM's para alguns sistemas de vendas e criações de
          Landing Pages.
        </p>
        <br />
        <p>
          Ao longo da minha carreira, tive a honra de colaborar com empresas de
          renome de forma Freelancer, sendo elas DarwinSoftware -&gt; jadlog,
          Genesi -&gt; System Saúde e a empresa chamada Cerbrum, referência em
          minha cidade.
        </p>
        <br />
        <p>
          {" "}
          Meu comprometimento com a excelência técnica, aliado à minha paixão
          pela inovação, me capacita a enfrentar desafios com confiança e
          determinação. Estou pronto para abraçar novas oportunidades e
          continuar deixando minha marca no mundo da tecnologia.
        </p>
      </div>
    </Container>
  );
}
