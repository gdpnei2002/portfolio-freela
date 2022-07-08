import styled from "styled-components";

export const Container = styled.main`
div{
    display: grid;
grid-template-columns: auto auto auto;
}
h1{
    margin-left:10%;
    padding-left: 50px;
}
p{
    color: #b3bdc1;
    padding: 15px;
    transition: 1s;
}
.p1{
    margin-left:10%;
    padding-left: 50px;
    color: white;
}
p:hover{
    color: white;
    transition: 1s;
}
img{
    width: 100%;
    border-radius: 4%;
}
a{
    background-color: #1e2735;
    border-radius: 4%;
    padding: 15px;
    margin: 30px;
    transition: 1s;
    text-decoration: none;
}
a:hover{
    background-color: #1a79e5;
    transition: 1s;
    color: white;
}
@media (max-width: 1500px) {
    div{
        display: grid;
        grid-template-columns: auto auto;
    }
}
@media (max-width: 900px) {
    div{
        display: grid;
        grid-template-columns: auto ;
    }
}
`;