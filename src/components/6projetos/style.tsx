import styled from "styled-components";

export const Projetcs = styled.main`
    display: grid;
    grid-template-columns: auto auto auto;
    margin-left:5%;
    margin-right:5%;

    @media (max-width: 1500px) {
        display: grid;
        grid-template-columns: auto auto;
    }
    
    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: auto ;
    }
}
`;

export const CustomSelect = styled.select`
  margin-left: 6%;

  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #ccc;

  background-color: #0d1117;
  color: white;
`;
