import { PopupContainer, PopupContent, Input, Label, Button } from './styles';

import { usePopup } from "../../context/PopUpContext"

export default function DressPopup() {

    const { togglePopup, isPopupOpen } = usePopup()

    return (
        <>
            <button onClick={togglePopup}>Abrir Pop-up</button>

            {isPopupOpen && (
                <PopupContainer>
                    <PopupContent>
                        <h2>Pop-Up Edição Vestido</h2>

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

                        <Button onClick={togglePopup}>Salvar</Button>
                    </PopupContent>
                </PopupContainer>
            )}
        </>
    );
}
