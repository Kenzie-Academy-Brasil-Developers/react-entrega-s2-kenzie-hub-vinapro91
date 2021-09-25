import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.ligth ? `var(--pictonBlue)` : `var(--blue)`)};
  color: var(--white);
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--blue);
  margin-top: 16px;
  width: 120px;
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--deepBlush);
  }
`;
