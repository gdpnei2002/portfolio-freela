import { Container } from "./style";
import linkedin from '../../assets/linkedin.png';
import gmail from '../../assets/gmail.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/github.png';


export function Contato(){
    return(
        <Container>
            <h1 id="con">Contatos:</h1> <br />
            <div>
                <a target="_blank" href="https://www.linkedin.com/in/jose-neilson-4380b6206/" rel="noreferrer"><img src={linkedin} alt="" /></a>
                <a target="_blank" href="https://github.com/gdpnei2002" rel="noreferrer"><img src={github} alt="" /></a>
                <a target="_blank" className="gmail" href="mailto:joseneilson25@gmail.com" rel="noreferrer"><img src={gmail} alt="" /></a>
                <a target="_blank" href="https://wa.me/5581992812121" rel="noreferrer"><img src={whatsapp} alt="" /></a>
            </div>
           
        </Container>
    );
}