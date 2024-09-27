import styled from "styled-components"

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
`

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
  width: 250px;
`

export const AddButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`

export const DressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #4f4f4f;
  height: 100vh;
  width: 100%;
  gap: 0px;
  position: relative;
`

export const DressImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 200px;
`

export const DressDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #daa520;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 450px;
  margin-right: 100px;
  padding: 10;
  transform: translateX(-130px);
`

export const DetailsItem = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #333;

  strong {
    color: #000;
  }
`
