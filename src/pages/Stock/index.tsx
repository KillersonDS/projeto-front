import { Container, ContainerContent, ContainerLeft, ContainerRight, InformationImage, InformationData, Information } from './styles';

import ButtonSearch from '../../components/ButtonSearch';
import Search from '../../components/Search';
import { usePopup } from "../../context/PopUpContext"
import PopupContainer from '../../components/PopUp';

export default function Stock() {
    const { togglePopup, isPopupOpen } = usePopup()

    const vestidos = [
        { id: 1, nome: "Vestido Vermelho", cor: "Vermelha", tamanho: "P", codigo: "001", status: "Disponível" },

    ];


    return (
        <Container>
            <ContainerContent>
                <ContainerLeft>
                    <InformationData>
                        <InformationImage>
                            {/* Aqui ficará a imagem do componente em estoque */}
                        </InformationImage>
                        <Information>
                            {vestidos.map(vestido => (
                                <div key={vestido.id}>
                                    <br />
                                    <br />
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
                        </Information>
                    </InformationData>
                </ContainerLeft>
                <ContainerRight>
                    <Search placeholder='Procure por vestidos...' />
                    <ButtonSearch onClick={togglePopup}>
                        Adicionar Vestido
                    </ButtonSearch>
                </ContainerRight>
            </ContainerContent>

            {
                isPopupOpen && (
                    <PopupContainer />
                )
            }
        </Container >
    )
};
