import { Container, Content, AnimationContainer } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import YupPassword from "yup-password";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
YupPassword(yup);

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatorio"),
    email: yup.string().email("Email inválido").required("Campo Obrigatorio"),
    bio: yup.string().required("Campo Obrigatorio"),
    password: yup.string().password().required("Campo Obrigatorio"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
      .required("Campo Obrigatorio"),
  });

  const onSubmitFunction = ({
    name,
    email,
    bio,
    password,
    contact,
    course_module,
  }) => {
    const user = { name, email, bio, password, contact, course_module };
    api
      .post("/users", user)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro </h1>
            <Input
              error={errors.name?.message}
              name="name"
              label="nome"
              register={register}
            />
            <Input
              error={errors.email?.message}
              name="email"
              label="E-mail"
              register={register}
            />
            <Input
              error={errors.bio?.message}
              name="bio"
              label="Fale sobre você"
              register={register}
            />
            <Input
              error={errors.contact?.message}
              name="contact"
              label="Linkedin"
              register={register}
            />
            <Input
              error={errors.password?.message}
              name="password"
              label="Senha"
              type="password"
              register={register}
            />
            <Input
              error={errors.passwordConfirm?.message}
              name="passwordConfirm"
              label="Confirme sua senha"
              type="password"
              register={register}
            />
            <label>Selecione seu modulo:</label>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>

            <div>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
          <p>
            Já tem uma conta ? Faça seu <Link to="/login">Login</Link>
          </p>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Register;
