import React from "react";
import { Container } from "./style";
import julia from '../../assets/julia.png';
import acclanding from '../../assets/acclanding.png';
import gira from '../../assets/gira.png';
import ssaude from '../../assets/ssaude.jpeg';
import emkt from '../../assets/emkt.png';
import embreve from '../../assets/embreve.png';
import disc from '../../assets/testdisc.png'
import faetton from '../../assets/faetton.png'

function Projetos(){
    return(
         <Container>
          <hr />
                <h1 id="pro">Projetos: </h1>
                <p className="p1">Abaixo contêm links de projetos em uso realizados por mim</p> 
            <div>
                <a target="_blank" href="##" rel="noreferrer"><img src={ssaude} alt="" />
                <p>System Saúde<br /><br />
                Ajudei a desenvolver apenas o front-end do CRM (sistema de vendas) de uma empresa de assistencia médica de referência em minha cidade. Nesse projeto foi aplicado JavaScript, Bootstrap, API's, MVC, GIT, Laravel, Factory, Testes, Trello e SCRUM.</p></a>
                <a target="_blank" href="https://gira.com.br/#/" rel="noreferrer"><img src={gira} alt="" />
                <p>Gira <br /><br />
                Primeiro freelancer, solicitado pelo projeto Gira do banco Santander, para promove-lo e detalha-lo. Feito em HTML e CSS com display GRID. Fiz em parceria com um amigo ultilizando GIT para versionamento de código.</p></a>
                <a target="_blank" href="https://academiadorosto.com" rel="noreferrer"><img src={julia} alt="" />
                <p>Academia do rosto <br /><br />
                Freelancer para um workshop de desenvolvimento pessoal, hoje em dia a página está em manutenção devido o evento já ter acabado, mas ainda é possível acessa-la.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002" rel="noreferrer"><img src={emkt} alt="" />
                <p>E-mail Marketing <br /><br />
                Primeiro freelance solicitado pelo hospital A.C.Camargo consiste em na realização de e-mails marketing para clientes do hospital para informa-los das últimas notícias como por exemplo: cursos realizados pelo hospital, avisos e requerimentos.</p></a>
                <a target="_blank" href="https://www.especializadoemvida.org.br/" rel="noreferrer"><img src={acclanding} alt="" />
                <p>ACCamargo <br /><br />
                Freelance de landing page solicitado pelo hospital A.C.Camargo feita em React.JS com intenção de promover detalhes sobre o tratamento de câncer.</p></a>
                <a target="_blank" href="https://psicodaniiconsultoriaonline.com/" rel="noreferrer"><img src={disc} alt="" />
                <p>Teste de perfil DISC<br /><br />
                O link irá para a página de psicodanii, o teste está dentro da página e o resultado pode ser consultado diretamente com a mesma. O formulario foi feito em REACT ultilizando 2 bibliotecas.</p></a>
                <a target="_blank" href="https://faetton.com/" rel="noreferrer"><img src={faetton} alt="" />
                <p>Faetton<br /><br />
                Participei da implementação do layout do e-commerce FAETTON. Uma loja virtual voltada para materiais da terceira arte moderna.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002" rel="noreferrer"><img src={embreve} alt="" />
                <p>Em breve<br /><br />
                Sempre trabalhando em novos projetos. <br /> Projeto secreto em desenvolvimento...</p></a>
           </div>
           <hr />
         </Container>
    );
}export default Projetos;