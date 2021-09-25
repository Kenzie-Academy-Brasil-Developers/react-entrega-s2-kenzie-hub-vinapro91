import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  h1 {
    text-shadow: 0px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
  }
  h1 p {
    font-weight: normal;
    margin: 0;
  }
  p {
    margin-top: 15px;
    font-weight: bold;
  }
  div {
    display: flex;
    flex: 1;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }
`;
