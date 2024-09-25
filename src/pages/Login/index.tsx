import { Container, ContainerContent, Header, Body, Footer, ContainerForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BackGroundLogin from "../../assets/img/background.svg";
import ButtonDown from "../../components/ButtonDownLogin";
import InputLogin from "../../components/Input/InputLogin";
import LogoLogin from "../../assets/img/Logo.svg";
import { useAuth } from '../../context/AuthContext';
import { loginRequest } from '../../service/LoginService';

const loginSchema = z.object({
    username: z.string().min(5, "Digite seu cpf corretamente"),
    password: z.string().min(5, "Digite sua data corretamente"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const response = await loginRequest(data.username, data.password);
            if (response) {
                login();
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <img src={BackGroundLogin} alt="Fundo do Login" id="container" />
            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <ContainerContent>
                    <Header>
                        <img src={LogoLogin} alt="Logo" width={150} id="logo" />
                    </Header>
                    <Body>
                        <label>
                            <h3 style={{ color: "white" }}>Usuário</h3>
                            <InputLogin type="text" register={register("username")} />
                            {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Senha</h3>
                            <InputLogin type="date" register={register("password")} />
                            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                        </label>
                    </Body>
                    <Footer>
                        <ButtonDown type="submit">Entrar</ButtonDown>
                        <ButtonDown type="button" onClick={() => navigate("/register")}>
                            Cadastrar-se
                        </ButtonDown>
                    </Footer>
                </ContainerContent>
            </ContainerForm>
        </Container>
    );
}
