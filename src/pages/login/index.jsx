import { Container, Content, AnimationContainer } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router";

const Login = ({ authenticade, setAuthenticate }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(6, "minimo 6 digitos")
      .required("Campo Obrigatorio"),
  });

  const history = useHistory();
  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

        setAuthenticate(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("E-mail ou senha Inválidos"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (authenticade) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login </h1>

            <Input
              error={errors.email?.message}
              name="email"
              label="E-mail"
              register={register}
            />

            <Input
              error={errors.password?.message}
              name="password"
              label="Senha"
              type="password"
              register={register}
            />

            <div>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
          <p>
            Não tem conta ? Faça seu <Link to="/signup">Cadastro</Link>
          </p>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Login;
