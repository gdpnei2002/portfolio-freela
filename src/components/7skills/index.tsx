import { Container } from "./style";
import react from '../../assets/react.png';
import laravel from '../../assets/laravel.png';
import sass from '../../assets/sass.png';
import node from '../../assets/node.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import styled from '../../assets/styled.png';



export function Skills(){
    return(
        <Container>
        <hr />
            <h1 id="skills">Skills:</h1>
            <p  className="titulo">Front-End:</p>
            <h2>
                <img className="ht" src={html} alt="" />
                <img className="js" src={js} alt="" />
                <img className="re" src={react} alt="" />
                <img className="sa" src={sass} alt="" />
                <img className="st" src={styled} alt="" />
            </h2>
            <p  className="titulo">Back-End:</p>
            <h2>
                <img className="no" src={node} alt="" />
                <img className="la" src={laravel} alt="" />
            </h2>
           
            <hr />
        </Container>
    );
}