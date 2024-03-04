import styled from "styled-components";

export const Container = styled.main`

display: flex;

img{
    width: 50px;
    padding-left: 20px;
    padding-top: 5px;
    filter: grayscale(100%) invert(100%);
}

img:hover{
    width: 80px;
    transition: 0.5s;
}

.gmail{
    height: 85%;
    width: 12%;
}

@media (max-width: 800px) {

display: grid;
grid-template-columns: auto auto;
}
`;