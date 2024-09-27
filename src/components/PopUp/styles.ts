import styled from "styled-components"

export const FormWrapper = styled.form`
  background-color: #f9cc37;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 5px;
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`
