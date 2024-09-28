import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  background: #5a5a5a;
  overflow: hidden;
`
export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`

export const InformationData = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: row;
`
export const Information = styled.div`
  width: 60%;
  height: 100%;

  background: #faca39;
  padding: 15px;
  border-radius: 30px;
`
export const InformationImage = styled.div`
  width: 40%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
`

export const ContainerLeft = styled.div`
  display: flex;
  width: 70vw;
  height: 100%;
`
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  gap: 15px;

  width: 30vw;
  height: 100%;
`
