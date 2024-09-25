import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
`

export const ContainerForm = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 650px;
  background-color: #5a5a5a;
  justify-content: space-around;
  border-radius: 5px;
`
export const Header = styled.header`
  display: flex;
  justify-content: center;

  img {
    margin-top: 20px;
  }
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 55%;

  label {
    width: 60%;
    font-size: 18px;
  }
`
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`
