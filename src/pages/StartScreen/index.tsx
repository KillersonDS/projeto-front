import { Button, ButtonContainer, PageContainer, ProfileContainer, ProfileImage } from './styles';

import { useNavigate } from "react-router-dom";

import Client from "../../assets/icons/client.svg";
import Employess from "../../assets/icons/employees.svg";
import Money from "../../assets/icons/money.svg";
import Stock from "../../assets/icons/stock.svg";
import profileImageUrl from "../../assets/icons/client.svg";

export default function StartScreen() {
    const userName = "Jefferson";

    const navigate = useNavigate()
    return (
        <PageContainer>
            <ProfileContainer>
                <ProfileImage src={profileImageUrl} alt="Perfil" />
                {userName}
            </ProfileContainer>
            <ButtonContainer>
                <Button onClick={() => navigate('/estoque')}>
                    <img src={Stock} alt="" width="40" height="40" />
                    <span>Estoque</span>
                </Button>
                <Button onClick={() => navigate('/aluguel')}>
                    <img src={Money} alt="" width="40" height="40" />
                    <span>Aluguel</span>
                </Button>
                <Button onClick={() => navigate('/cliente')}>
                    <img src={Client} alt="" width="40" height="40" />
                    <span>Clientes</span>
                </Button>
                <Button onClick={() => navigate('/funcionarios')}>
                    <img src={Employess} alt="" width="40" height="40" />
                    <span>Funcionários</span>
                </Button>
            </ButtonContainer>
        </PageContainer>
    );
};
