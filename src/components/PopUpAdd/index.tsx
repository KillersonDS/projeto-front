import { PopupContainer, PopupContent, Input, Label, Button, CloseButton } from './styles';
import { usePopup } from "../../context/PopUpContext";

export default function DressPopupAdd() {
    const { togglePopup, popupType } = usePopup();

    return (
        <>
            {popupType === 'add' && (
                <PopupContainer>
                    <PopupContent>
                        <CloseButton onClick={() => togglePopup()}>X</CloseButton>
                        <h2>Adicionar Vestido</h2>

                        <Label>Nome:</Label>
                        <Input type="text" placeholder="Nome" />

                        <Label>Cor:</Label>
                        <Input type="text" placeholder="Cor" />

                        <Label>Tamanho:</Label>
                        <Input type="text" placeholder="Tamanho" />

                        <Label>Código:</Label>
                        <Input type="text" placeholder="Código" />

                        <Label>Status:</Label>
                        <Input type="text" placeholder="Status" />

                        <Button onClick={() => togglePopup()}>Salvar</Button>
                    </PopupContent>
                </PopupContainer>
            )}
        </>
    );
}
