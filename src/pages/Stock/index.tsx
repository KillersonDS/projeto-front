import { Container, ContainerContent, ContainerLeft, ContainerRight } from './styles';

import ButtonSearch from '../../components/ButtonSearch';
import Search from '../../components/Search';
import { usePopup } from "../../context/PopUpContext"
import DressPopup from '../../components/PopUpAdd';
import DressPopupEdit from '../../components/PopUpEdit';

import InformationData from "../../components/Dress"

export default function Stock() {
    const { togglePopup, isPopupOpen } = usePopup();

    const vestidos = [
        { id: 1, nome: "Vestido Vermelho", cor: "Vermelha", tamanho: "P", codigo: "001", status: "Disponível" },
    ];

    return (
        <Container>
            <ContainerContent>
                <ContainerLeft>
                    <InformationData vestidos={vestidos} togglePopup={togglePopup} />
                    <InformationData vestidos={vestidos} togglePopup={togglePopup} />

                </ContainerLeft>
                <ContainerRight>
                    <Search placeholder='Procure por vestidos...' />
                    <ButtonSearch onClick={() => togglePopup('add')}>
                        Adicionar Vestido
                    </ButtonSearch>
                </ContainerRight>
            </ContainerContent>

            {isPopupOpen && (
                <>
                    <DressPopup />
                    <DressPopupEdit />
                </>
            )}
        </Container>
    );
};
