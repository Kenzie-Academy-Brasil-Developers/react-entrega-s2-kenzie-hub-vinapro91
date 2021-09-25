import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router";
import { InputContainer, Container, TaskContainer } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";
import * as yup from "yup";
const Dashboard = ({ authenticade, setAuthenticate }) => {
  const [tecs, setTecs] = useState([]);

  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatorio"),
    status: yup.string().required("Campo Obrigatorio"),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();

  const loadTecs = () => {
    api
      .get(`/users/${user.id}`)
      .then((response) => setTecs(response.data.techs));
  };

  const updateTechs = (data) => {
    console.log(data);
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Baerer ${token}`,
        },
      })
      .catch((err) => toast.error("Já existe essa Tecnologia"));
  };

  useEffect(() => {
    loadTecs();
  }, [tecs]);

  const deletTech = (id) => {
    console.log(id);
    api.delete(`users/techs/${id}`, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  };

  const logout = () => {
    localStorage.clear();
    setAuthenticate(false);
  };

  if (!authenticade) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(updateTechs)}>
        <section>
          <label>Adicionar Tecnologia:</label>
          <Input
            name="title"
            placeholder="Nome da Tecnologia"
            register={register}
            error=""
          />
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TaskContainer>
        <h2>Bem vindo, {user.name}.</h2>
        <p>Modulo: {user.course_module} </p>
        <p> Sobre Você: {user.bio}</p>
        <p>
          Site de contato: <Link>{user.contact}</Link>
        </p>
      </TaskContainer>
      <TaskContainer>
        <h2> Minhas Tecnologias : </h2>
        <ul>
          {tecs &&
            tecs.map((item) => {
              return (
                <li>
                  <p>Tecnologia: {item.title}</p>
                  <p>Status: {item.status}</p>
                  <button
                    title="Remover tecnologia"
                    onClick={() => deletTech(item.id)}
                  >
                    x
                  </button>
                </li>
              );
            })}
        </ul>
      </TaskContainer>
      <footer>
        <Button ligth="true" onClick={logout}>
          Logout
        </Button>
      </footer>
    </Container>
  );
};
export default Dashboard;
