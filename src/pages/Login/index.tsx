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
    cpf: z.string().min(5, "Digite seu cpf corretamente"),
    happyday: z.string().min(5, "Digite sua data corretamente"),
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
            const response = await loginRequest(data.cpf, data.happyday);
            if (response && response.access_token) {
                localStorage.setItem('access_token', response.access_token);
                // console.log("Token obtido após login:", response.access_token);
                login();
                navigate('/');
            } else {
                console.error("Token não encontrado na resposta.");
            }
        } catch (error) {
            console.error("Erro no processo de login:", error);
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
                            <InputLogin type="text" register={register("cpf")} />
                            {errors.cpf && <p style={{ color: "red" }}>{errors.cpf.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Senha</h3>
                            <InputLogin type="date" register={register("happyday")} />
                            {errors.happyday && <p style={{ color: "red" }}>{errors.happyday.message}</p>}
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
