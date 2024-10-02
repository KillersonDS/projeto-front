import { Container, ContainerContent, ContainerLeft, ContainerRight } from './styles';
import ButtonSearch from '../../components/ButtonSearch';
import Search from '../../components/Search';
import { usePopup } from "../../context/PopUpContext";
import DressPopup from '../../components/PopUpAdd';
// import DressPopupEdit from '../../components/PopUpEdit';
import InformationData from "../../components/Dress";
import { useEffect, useState } from 'react';
import { Dress } from "./dressType";
import { toast, ToastContainer } from 'react-toastify';
import { deleteVestido } from "../../service/DeletePopUpService";
import { fetchVestidos } from "../../service/ListPopUpService";

export default function Stock() {
    const { togglePopup, isPopupOpen } = usePopup();

    const [vestidos, setVestidos] = useState<Dress[]>([]);

    const loadVestidos = async () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            toast.error('Você precisa estar logado para carregar os vestidos.');
            return;
        }

        try {
            const vestidosData = await fetchVestidos(token);
            setVestidos(vestidosData);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Erro ao carregar vestidos.');
            setVestidos([]);
        }
    };

    useEffect(() => {
        loadVestidos();
    }, []);


    const addVestido = (novoVestido: Dress) => {
        setVestidos((prevVestidos) => [...prevVestidos, novoVestido]);
        // toast.success('Vestido adicionado com sucesso!');
    };

    const removeVestido = async (id: number) => {
        console.log(`Tentando remover vestido com ID: ${id}`);
        try {
            await deleteVestido(id);
            console.log("Antes da atualização:", vestidos);
            setVestidos((prevVestidos) => prevVestidos.filter((vestido) => vestido.id !== id));
            console.log("Depois da atualização:", vestidos);
            toast.success('Vestido removido com sucesso!');
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Erro ao remover vestido.');
        }
    };





    return (
        <Container>
            <ContainerContent>
                <ContainerLeft>
                    {vestidos.map((vestido) => (
                        <InformationData
                            key={vestido.id}
                            vestido={vestido}
                            togglePopup={togglePopup}
                            onDelete={removeVestido}
                        />
                    ))}
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
                    <DressPopup addVestido={addVestido} />
                    {/* <DressPopupEdit /> */}
                </>
            )}

            <ToastContainer />
        </Container>
    );
};
