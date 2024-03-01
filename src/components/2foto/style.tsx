import styled from "styled-components";

export const Container = styled.main`

img{
    width:100%;
    transform: scaleX(-1);
}

.texto {
    position: absolute;
    color:#ffffff;
    text-align: left;
    top: 40%;
    margin-left: 20%;  
    background-color: black; 
   font-size: 2.5rem;
    max-width: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: escrever normal 5s steps(55)both;
    padding: 15px
}

@keyframes escrever {
    100%{
        max-width: 100%;
    }
    
}

@media (max-width: 900px) {
    .texto{
    top: 40%;
    margin-left: 5%;  
    font-size: 1.25rem;
    }
}


`;