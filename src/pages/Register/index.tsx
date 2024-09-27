import { Container, ContainerContent, Header, Body, Footer, ContainerForm, FooterControler } from "./styles";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonDown from "../../components/ButtonDownLogin";
import InputLogin from "../../components/Input/InputLogin";
import BackGroundLogin from "../../assets/img/background.svg";
import LogoLogin from "../../assets/img/Logo.svg";
import { toast } from 'react-toastify';
import axios from 'axios';

const pageSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    cpf: z.string().length(11, "O CPF deve ter exatamente 11 dígitos"),
    happyday: z.string().min(5, "Digite a data de nascimento corretamente"),
    tell: z.string().min(10, "O telefone deve conter apenas números"),
    role: z.string().min(1, "A permissão do usuário é obrigatória"),
    num: z.string().min(1, "Número de telefone é obrigatório"),
    street: z.string().min(1, "Informar a rua é obrigatório"),
    cep: z.string().regex(/^\d{5}-\d{3}$/, "O CEP deve estar no formato XXXXX-XXX"),
    complement: z.string().min(1, "Digite um complemento para sua localidade"),
});

type RegisterFormInputs = z.infer<typeof pageSchema>;

export default function RegisterForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
        resolver: zodResolver(pageSchema),
    });

    const onSubmit = async (data: RegisterFormInputs) => {
        setLoading(true);
        try {
            const payload = {
                name: data.name,
                cpf: data.cpf,
                happyday: data.happyday,
                tell: data.tell.toString(),
                role: data.role,
                address: {
                    num: data.num.toString(),
                    street: data.street,
                    cep: data.cep,
                    complement: data.complement,
                },
            };

            console.log("Payload enviado:", payload);

            await axios.post('https://roseanne-dias-aluguel.onrender.com/register', payload);

            toast.success("Cadastro realizado com sucesso!");
            navigate('/caminho-para-redirecionar');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Erro de Axios:", error.response?.data);
                toast.error("Erro ao cadastrar, tente novamente.");
            } else {
                console.error("Erro inesperado:", error);
                toast.error("Erro ao cadastrar, tente novamente.");
            }
        } finally {
            setLoading(false);
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
                            <h3 style={{ color: "white" }}>Nome</h3>
                            <InputLogin type="text" register={register("name")} id="input" />
                            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>CPF</h3>
                            <InputLogin type="number" register={register("cpf")} id="input" />
                            {errors.cpf && <p style={{ color: "red" }}>{errors.cpf.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Data de Nascimento</h3>
                            <InputLogin type="date" register={register("happyday")} id="input" />
                            {errors.happyday && <p style={{ color: "red" }}>{errors.happyday.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Telefone</h3>
                            <InputLogin type="phone" register={register("tell")} id="input" />
                            {errors.tell && <p style={{ color: "red" }}>{errors.tell.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Permissão</h3>
                            <select {...register("role")} id="input" style={{ padding: "10px" }}>
                                <option value="">Selecione uma permissão</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                            {errors.role && <p style={{ color: "red" }}>{errors.role.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Número</h3>
                            <InputLogin register={register("num")} id="input" />
                            {errors.num && <p style={{ color: "red" }}>{errors.num.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Rua</h3>
                            <InputLogin type="text" register={register("street")} id="input" />
                            {errors.street && <p style={{ color: "red" }}>{errors.street.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>CEP</h3>
                            <InputLogin register={register("cep")} id="input" />
                            {errors.cep && <p style={{ color: "red" }}>{errors.cep.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Complemento</h3>
                            <InputLogin type="text" register={register("complement")} id="input" />
                            {errors.complement && <p style={{ color: "red" }}>{errors.complement.message}</p>}
                        </label>
                    </Body>
                    <Footer>
                        <FooterControler>
                            <ButtonDown type="submit" disabled={loading} id="button">
                                {/* {loading ? "Processando..." : "Enviar"} */}
                                Enviar
                            </ButtonDown>
                        </FooterControler>
                    </Footer>
                </ContainerContent>
            </ContainerForm>
        </Container>
    );
}
