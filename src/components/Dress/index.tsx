import { InformationDataContainer, InformationImage, Information, Image } from './styles'; // Importe seus estilos

import Trash from "../../assets/icons/trash.svg"
import Pencil from "../../assets/icons/pencil.svg"

interface Dress {
    id: number;
    nome: string;
    cor: string;
    tamanho: string;
    codigo: string;
    status: string;
}

type PopupType = 'edit' | 'add';

interface InformationDataProps {
    vestidos: Dress[];
    togglePopup: (action: PopupType) => void;
}

const InformationData: React.FC<InformationDataProps> = ({ vestidos, togglePopup }) => {
    return (
        <InformationDataContainer>
            <InformationImage>
                {/* <img src="" alt="" /> */}
            </InformationImage>
            <Information>
                {vestidos.map((vestido) => (
                    <div key={vestido.id}>
                        <h3>Nome: {vestido.nome}</h3>
                        <br />
                        <h3>Cor: {vestido.cor}</h3>
                        <br />
                        <h3>Tamanho: {vestido.tamanho}</h3>
                        <br />
                        <h3>Código: {vestido.codigo}</h3>
                        <br />
                        <h3>Status: {vestido.status}</h3>
                    </div>
                ))}
                <Image>
                    <img src={Trash} width={20} alt="Delete" />
                    <img src={Pencil} width={20} alt="Edit" onClick={() => togglePopup('edit')} />
                </Image>
            </Information>
        </InformationDataContainer>
    );
};

export default InformationData;
