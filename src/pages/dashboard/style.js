import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px;
  footer {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: var(--white);
  }
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > div {
      max-width: 80%;
      flex: 1;
      margin-top: 5px;
    }
    button {
      max-width: 260px;
      height: 40px;
      margin: 0;
    }
    select {
      border-radius: 8px;
      margin-right: 10px;
      background: var(--white);
      max-width: 80%;
      height: 50px;

      option {
        text-align: center;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const TaskContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  div {
    margin: 16px 32px 0 0;
  }

  ul {
    li {
      button {
        border-radius: 50px;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        color: var(--white);
        background-color: var(--red);
      }
    }
  }
`;
