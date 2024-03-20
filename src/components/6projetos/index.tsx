import React, { useState } from "react";
import Card from "./cards";
import julia from "../../assets/julia.png";
import acclanding from "../../assets/acclanding.png";
import gira from "../../assets/gira.png";
import ssaude from "../../assets/ssaude.jpeg";
import emkt from "../../assets/emkt.png";
import embreve from "../../assets/embreve.png";
import disc from "../../assets/testdisc.png";
import vocepolicia from "../../assets/vocenapolicia.png";
import devpp from "../../assets/devpp.png";
import cerbrum from "../../assets/cerbrum.png";
import firstWeekThinker from "../../assets/firstWeekThinker.png";
import spm from "../../assets/spm.png";
import steps from "../../assets/steps.png";
import { CustomSelect, Projetcs } from "./style";

export function Projetos() {
  const cards = [
    {
      image: ssaude,
      title: "System Saúde",
      text: "Colaborei no desenvolvimento exclusivamente do front-end do Sistema de Vendas de uma renomada empresa de assistência médica em Caruaru-PE. Ao longo deste projeto, aprimorei significativamente minhas habilidades em JavaScript, Bootstrap, API, MVC, GIT, Laravel, Factory, Testes, Trello e SCRUM.",
      link: "https://systemsaude.com.br/",
      techs: ["Laravel"],
      tags: ["Sistema", "Laravel"],
    },
    {
      image: julia,
      title: "Academia do rosto",
      text: "Freelance para um workshop de estética natural, infelizmente o evento acabou, sendo assim não é mais possível acessa-lo.",
      link: "",
      techs: ["React"],
      tags: ["Landing Page", "React"],
    },
    {
      image: emkt,
      title: "E-mail Marketing",
      text: "Primeiro freelance solicitado pelo hospital A.C.Camargo consiste na realização de e-mails marketing para que os clientes do hospital sejam informados das últimas notícias, como por exemplo: cursos realizados pelo hospital, avisos e requerimentos.",
      link: "",
      techs: ["React"],
      tags: ["HTML e CSS"],
    },
    {
      image: acclanding,
      title: "A.C.Camargo",
      text: "Freelance de landing page solicitado pelo hospital A.C.Camargo feita em React.JS com intenção de promover detalhes sobre o tratamento de câncer.",
      link: "https://www.especializadoemvida.org.br/",
      techs: ["React"],
      tags: ["Landing Page", "Angular"],
    },
    {
      image: disc,
      title: "Teste de perfil DISC",
      text: "O link conduzirá à página da Psicodanii, na qual o teste estará incorporado, permitindo a consulta direta dos resultados com o à própria psicóloga. O formulário foi desenvolvido em React.js, utilizando duas bibliotecas. E o sistema de gerenciamento em Next.",
      link: "https://psicodaniiconsultoriaonline.com/",
      techs: ["React"],
      tags: ["Sistema", "React"],
    },
    {
      image: cerbrum,
      title: "Cerbrum",
      text: "Na maior empresa no seguimento de educação na região da minha cidade tem apenas um projeto de mesmo nome, ele consiste em gerenciar toda uma instituição de ensino, seja escola ou faculdade. No Cerbrum trabalhei em um sistema usando principalmente o .Net e JavaScript.",
      link: "http://cerbrum.com/",
      techs: [".Net"],
      tags: ["Sistema", ".Net"],
    },
    {
      image: vocepolicia,
      title: "Você na polícia",
      text: "Trata-se de uma landing page com o propósito de promover um curso direcionado a concursos públicos para a Polícia Militar, disponível na plataforma Hotmart. Este projeto foi desenvolvido utilizando React.",
      link: "https://www.vocenapolicia.com.br/",
      techs: ["React"],
      tags: ["Landing Page", "React"],
    },
    {
      image: firstWeekThinker,
      title: "Primeira semana do Thinker",
      text: "Landing page como desafio feito na semana do thinker, um evento produzido pela Think A.M. com objetivo de estimular o aprendizado de programação para iniciantes e vender a mentoria DEV 360º.",
      link: "https://primeirasemanadothinker.web.app/",
      techs: ["Angular"],
      tags: ["Landing Page", "Angular"],
    },
    {
      image: gira,
      title: "Gira",
      text: "Primeiro freelance, solicitado pelo projeto Gira do banco Santander, para promove-lo e detalha-lo. Feito em HTML e CSS com display GRID. Fiz em parceria com um amigo utilizando GIT para versionamento de código.",
      link: "https://gira.com.br/",
      techs: ["Angular"],
      tags: ["Landing Page", "Angular"],
    },
    {
      image: devpp,
      title: "DEV PP",
      text: "Durante meu desenvolvimento acabei entrando para uma comunidade de programadores, onde fui desafiado a construir uma landing page em Angula.JS usando como base um template no figma.",
      link: "https://devpp-reload.web.app/",
      techs: ["Angular"],
      tags: ["Landing Page", "Angular"],
    },
    {
      image: spm,
      title: "SPM",
      text: "É um projeto desenvolvido com objetivo de melhorar o gerenciamento da Secretaria de Políticas Públicas para Mulheres. Conta com uma equipe completa como designers, product owner e programadores do front e back end",
      link: "https://www.facebook.com/PrefeituradeCaruaru/photos/a.549930408368020/5895878380439836/?type=3&locale=pt_BR",
      techs: ["Angular"],
      tags: ["Sistema", "React", "Node.JS"],
    },
    {
      image: steps,
      title: "Steps",
      text: "Projeto desenvolvido com a equipe Squad Pilots da Think AM. Onde atuei como full stack no projeto do início ao fim.  Tem como objetivo melhorar tratamentos na área da fisioterapia.",
      link: "",
      techs: [""],
      tags: ["Sistema", "Angular", ".Net"],
    },
    {
      image: jadlog,
      title: "Jadlog",
      text: "Projeto desenvolvido com a equipe da DarwinSoft. Onde atuei como desenvolvedor front end no projeto. Tem como objetivo calcular o frete de uma encomenda e gerar o comprovante de destino.",
      link: "https://www.jadlog.com.br/jadlog/home",
      techs: [""],
      tags: ["Sistema", "React"],
    },
    {
      image: embreve,
      title: "Em breve",
      text: "Sempre trabalhando em novos projetos ... Aprendendo atualmente: Next, Node e Angular.",
      link: "",
      techs: [""],
      tags: ["Em Breve"],
    },
  ];

  const [busca, setBusca] = useState("");
  const filteredCards =
    busca === "" ? cards : cards.filter((card) => card.tags.includes(busca));

  return (
    <div>
      <hr />
      <h1 id="pro">Projetos: </h1>

      <CustomSelect onChange={(ev) => setBusca(ev.target.value)}>
        <option value="">Todos</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Landing Page">Landing Page</option>
        <option value="Sistema">Sistema</option>
      </CustomSelect>
      <Projetcs>
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text ?? ""}
            techs={card.techs}
            tags={card.tags}
            link={card.link ?? ""}
          />
        ))}
      </Projetcs>
    </div>
  );
}

export default Projetos;
