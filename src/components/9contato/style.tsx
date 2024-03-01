import styled from "styled-components";

export const Container = styled.main`

display: flex;

p{
    color: #b3bdc1;
}

img{
    width: 50px;
    padding: 20px;
    padding-top: 40px;
}

img:hover{
    width: 80px;
    transition: 0.5s;
}

.gmail{
    height: 100%;
}

@media (max-width: 800px) {

display: grid;
grid-template-columns: auto auto;
}
`;