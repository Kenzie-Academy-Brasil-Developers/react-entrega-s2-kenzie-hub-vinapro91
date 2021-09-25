import { Redirect, useHistory } from "react-router";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = ({ authenticade }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  if (authenticade) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <Content>
        <h1>
          Kenzie <p>Hub</p>
        </h1>
        <p> O seu portfólio da Kenzie!</p>
        <div>
          <Button onClick={() => handleNavigation("/signup")} ligth={true}>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};
export default Home;
