import "./style.css";
import perfil from '../../assets/perfil.png';

 function Foto(){
    return(
        <>
           <img id="inicio" src={perfil} alt="" />
            <div className="imagem">
                <div className="texto">
                    <p> 
                    ⠀&lt;José Neilson 
                        Desenvolvedor Full Stack⠀/&gt; ⠀
                    </p>
                </div>
            </div>
        </>
    );
}
export default Foto;