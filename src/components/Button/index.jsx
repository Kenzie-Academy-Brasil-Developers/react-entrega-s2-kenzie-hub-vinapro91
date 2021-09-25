import { Container } from "./style";

const Button = ({ children, ligth, ...rest }) => {
  return (
    <Container ligth={ligth} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
