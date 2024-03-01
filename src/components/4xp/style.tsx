import styled from "styled-components";

export const Container = styled.main`
  h1 {
    margin-left: 10%;
    padding-left: 50px;
  }

  p {
    margin-left: 30%;
    color: #b3bdc1;
    width: 50%;
    a {
      color: #1a79e5;
      text-decoration: none;
    }
  }

  .titulo {
    color: #1a79e5;
    font-size: 2.3rem;
  }

  .tempo {
    color: white;
    font-size: 1.3rem;
  }

  hr {
    margin-top: 3%;
  }

  @media (max-width: 600px) {
    p {
      margin-left: 10%;
      width: 80%;
    }
  }
`;
