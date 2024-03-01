import styled from "styled-components";

export const Container = styled.main`
  position: sticky;
  overflow: hidden;
  position: fixed;
  width: 100%;

  .topnav {
    background-color: #161b22;
    overflow: hidden;
    position: sticky;
  }

  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    color: #9a9e9e;
  }

  .topnav .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
      display: flex;
    }
    .topnav a {
      font-size: 13px;
    }
  }
`;
