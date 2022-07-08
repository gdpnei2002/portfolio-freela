import "./style.css";
import React from 'react';

 function Header(){
    return(
       <>
             <div className="App">
                <header className="App-header">
                    <div className="App">
                    <div className="topnav">
                        <a href="#inicio">Inicio</a>
                        <a href="#xp">Experiência</a>
                        <a href="#es">Estudos</a>
                        <a href="#pro">Projetos</a>
                        <a href="#con">Contatos</a>
                    </div>
                    </div>
                </header>
             </div>
             <hr />
        </>
    );
}
export default Header;