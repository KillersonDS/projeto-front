import styled from "styled-components"

export const InformationDataContainer = styled.div`
  width: 100%;
  height: 220px;
  padding: 5px;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 190px;
  }
`

export const Information = styled.div`
  width: 60%;
  height: 100%;
  background: #faca39;
  padding: 15px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    padding: 10px 0px 0px 10px;

    h3 {
      font-size: 12px;
    }
  }
`

export const InformationImage = styled.div`
  width: 40%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
`

export const Image = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  margin-right: 6%;

  @media (max-width: 768px) {
    img {
      width: 15px;
    }
  }
`
