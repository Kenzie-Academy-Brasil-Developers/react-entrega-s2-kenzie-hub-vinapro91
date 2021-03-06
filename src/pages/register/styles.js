import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
from{
    opacitty: 0;
    transform:translateX(50px)
 
}
to {
    opacitty: 1;
    transform:translateX(0px)
}
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apperFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 32px;
  }

  div {
    margin-top: 16px;
  }

  p {
    margin-top: 8px;
    a {
      font-weight: bold;
      color: var(--deepBlush);
    }
  }
`;
