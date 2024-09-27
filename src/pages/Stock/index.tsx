import { DressContainer, DressImage, DressDetails, DetailsItem, SearchContainer, SearchInput, AddButton } from './styles';

import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
interface DressProps {
    imageUrl: string;
    name: string;
    color: string;
    size: string;
    code: string;
    status: string;
}

const handleAddDress = () => {
    console.log("Adicionar novo vestido");
};

export default function DressPage() {

    // const navigate = useNavigate()

    const [dress, setDress] = useState<DressProps>({
        imageUrl: 'https://via.placeholder.com/200',
        name: 'Vestido Floral',
        color: 'Azul',
        size: 'M',
        code: 'V12345',
        status: 'Disponível',
    });

    console.log(setDress)

    return (
        <DressContainer>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Pesquisar vestido..."
                />
                <AddButton onClick={handleAddDress}  >Adicionar Vestido</AddButton>
                {/* onClick={() => ("/popUp")} */}
            </SearchContainer>
            <DressImage src={dress.imageUrl} alt={dress.name} />
            <DressDetails>
                <DetailsItem><strong>Nome:</strong> {dress.name}</DetailsItem>
                <DetailsItem><strong>Cor:</strong> {dress.color}</DetailsItem>
                <DetailsItem><strong>Tamanho:</strong> {dress.size}</DetailsItem>
                <DetailsItem><strong>Código:</strong> {dress.code}</DetailsItem>
                <DetailsItem><strong>Status:</strong> {dress.status}</DetailsItem>
            </DressDetails>
        </DressContainer>
    );
};
