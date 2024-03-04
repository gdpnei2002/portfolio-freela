import styled from "styled-components";

export const Container = styled.main`
    *{
        margin-left:30%;
    }

    h1{
        margin-left:10%;
        padding-left: 50px;
    }

    p{
        width: 50%;
    }

    .titulo{
        color :#1a79e5;
        font-size: 2.3rem;
    }

    .tempo{
        font-size: 1.3rem;
        padding-top:10px;
        padding-bottom:10px;
    }

    .tipo{
        padding-top:10px;
    }

    @media (max-width: 600px) {
        p{
        margin-left: 10%;
        width: 80%;

    }
}

`;