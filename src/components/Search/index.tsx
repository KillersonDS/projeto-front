import { InputContainer, InputStyled, Icon } from "./styles";
import Bloom from "../../assets/icons/search.svg";

export interface InputProps {
    placeholder?: string;
    type?: string;
}

export default function Search({ placeholder, type }: InputProps) {
    return (
        <InputContainer>
            <Icon src={Bloom} alt="Bloom" />
            <InputStyled placeholder={placeholder} type={type} />
        </InputContainer>
    );
}
