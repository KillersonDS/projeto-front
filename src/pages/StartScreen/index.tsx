// src/index.tsx
import React from 'react';
import { PageContainer, ButtonContainer, Button, ProfileContainer, ProfileImage } from './styles'; // Importa os estilos

// Importar os ícones
import Employess from "../../assets/icons/employees.svg"
import Client from "../../assets/icons/client.svg"
import Money from "../../assets/icons/money.svg"
import Stock from "../../assets/icons/stock.svg"

const StartScreen: React.FC = () => {
  const userName = "Jefferson";
  const profileImageUrl = "../../assets/icons/client.svg";

  return (
    <PageContainer> {/* Usar o contêiner da página */}
      <ProfileContainer>
        <ProfileImage src={profileImageUrl} alt="Perfil" />
        {userName}
      </ProfileContainer>
      <ButtonContainer>
        <Button onClick={() => console.log('Ir para Tela 1')}>
          <img src={Stock} alt="" width="40" height="40" />
          <span>Estoque</span>
        </Button>
        <Button onClick={() => console.log('Ir para Tela 1')}>
          <img src={Money} alt="" width="40" height="40" />
          <span>Aluguel</span>
        </Button>
        <Button onClick={() => console.log('Ir para Tela 1')}>
          <img src={Client} alt="" width="40" height="40" />
          <span>Clientes</span>
        </Button>
        <Button onClick={() => console.log('Ir para Tela 1')}>
          <img src={Employess} alt="" width="40" height="40" />
          <span>Funcionarios</span>
        </Button>
      </ButtonContainer>
    </PageContainer>
  );
};

export default StartScreen