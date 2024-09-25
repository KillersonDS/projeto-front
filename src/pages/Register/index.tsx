import { Container, ContainerContent, Header, Body, Footer, ContainerForm } from "./styles"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BackGroundLogin from "../../assets/img/background.svg"
import ButtonDown from "../../components/ButtonDownLogin"
import InputLogin from "../../components/Input/InputLogin"
import LogoLogin from "../../assets/img/Logo.svg"


const loginSchema = z.object({
    cpf: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
    birth: z.string().min(1, "A senha deve ter pelo menos 6 caracteres"),
    phone: z.string().min(1, "O número de telefone deve ter pelo menos 6 caracteres"),
    address: z.string().min(5, "O endereço teve ter pelo menos 5 caracteres"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Register() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        console.log(data);
        navigate("/");
    };
    return (
        <Container>
            <img src={BackGroundLogin} id="container" />
            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <ContainerContent>
                    <Header>
                        <img src={LogoLogin} width={150} id="logo" />
                    </Header>
                    <Body>
                        <label>
                            <h3 style={{ color: "white" }}>CPF</h3>
                            <InputLogin type="text" register={register("cpf")} />
                            {errors.cpf && <p style={{ color: "red" }}>{errors.cpf.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Nascimento</h3>
                            <InputLogin type="date" register={register("birth")} />
                            {errors.birth && <p style={{ color: "red" }}>{errors.birth.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Celular</h3>
                            <InputLogin type="phone" register={register("phone")} />
                            {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Endereço</h3>
                            <InputLogin type="text" register={register("address")} />
                            {errors.address && <p style={{ color: "red" }}>{errors.address.message}</p>}
                        </label>
                    </Body>
                    <Footer>
                        <ButtonDown>Cadastrar-se</ButtonDown>
                    </Footer>
                </ContainerContent>
            </ContainerForm>
        </Container>
    )
}
