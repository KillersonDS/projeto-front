// src/styles.ts
import styled from "styled-components";

// Contêiner principal da página
export const PageContainer = styled.div`
  background-color: #3e3e3e; /* Fundo cinza */
  height: 100vh; /* Altura total da viewport */
  display: flex; /* Habilita o flexbox */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;

// Contêiner para os botões
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os botões horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  gap: 100px; /* Espaçamento entre os botões */
`;

// Estilo do botão
export const Button = styled.div`
  display: flex;
  flex-direction: column; /* Alinha o ícone e o texto verticalmente */
  align-items: center; /* Centraliza o conteúdo dentro do botão */
  background-color: white; /* Fundo branco */
  border: 1px solid #ccc; /* Borda opcional */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 20px; /* Padding interno */
  width: 100px; /* Largura do botão */
  cursor: pointer; /* Muda o cursor para indicar que é clicável */
  transition: transform 0.2s; /* Animação suave ao passar o mouse */
  background-color: #d3d3d3;

  &:hover {
    transform: scale(1.05); /* Aumenta o botão ao passar o mouse */
  }
`;

// Contêiner do perfil
export const ProfileContainer = styled.div`
  position: absolute; /* Posiciona no canto superior direito */
  top: 20px; /* Distância do topo */
  right: 20px; /* Distância da direita */
  background-color: #333; /* Fundo cinza escuro */
  color: white; /* Cor do texto (branco) */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 15px 40px; /* Padding interno */
  display: flex; /* Habilita o flexbox */
  align-items: center; /* Centraliza verticalmente */
  gap: 10px; /* Espaçamento entre a imagem e o texto */
  font-size: 1.1em; /* Aumenta o tamanho da fonte do nome do usuário */
`;

// Estilo da imagem de perfil
export const ProfileImage = styled.img`
  width: 40px; /* Largura da imagem */
  height: 40px; /* Altura da imagem */
  //border-radius: 50%; /* Torna a imagem circular */
`;
