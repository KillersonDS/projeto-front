import { PopupContainer, PopupContent, Input, Label, Button, CloseButton } from './styles';
import { usePopup } from "../../context/PopUpContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePopUp } from '../../service/CreatePopUpService';
import { toast } from 'react-toastify';
import { Dress } from '../../pages/Stock/dressType';

const productSchema = z.object({
    title: z.string().min(1, "Nome é obrigatório"),
    description: z.string().min(1, "Descrição é obrigatória"),
    size: z.string().min(1, "Tamanho é obrigatório"),
    code: z.string().min(1, "Código é obrigatório"),
    status: z.string().min(1, "Status é obrigatório"),
});


type ProductFormData = z.infer<typeof productSchema>;

interface DressPopupAddProps {
    addVestido: (novoVestido: Dress) => void;
}

export default function DressPopupAdd({ addVestido }: DressPopupAddProps) {
    const { togglePopup, popupType } = usePopup();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema)
    });

    const onSubmit = async (data: ProductFormData) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            toast.error('Você precisa estar logado para adicionar um produto.');
            return;
        }

        try {
            const response = await CreatePopUp(data.title, data.description, data.size, data.code, data.status, token);
            const novoVestido: Dress = {
                id: response.id,
                title: data.title,
                description: data.description,
                size: data.size,
                code: data.code,
                status: data.status,
            };
            addVestido(novoVestido);
            toast.success('Produto criado com sucesso!');
            togglePopup();
            reset();
        } catch (error) {
            toast.error('Erro ao criar o produto');
            console.error('Erro ao criar o produto:', error);
        }
    };

    return (
        <>
            {popupType === 'add' && (
                <PopupContainer>
                    <PopupContent>
                        <CloseButton onClick={() => togglePopup()}>X</CloseButton>
                        <h2>Adicionar Vestido</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Label>Nome:</Label>
                            <Input type="text" placeholder="Nome" {...register("title")} />
                            {errors.title && <span>{errors.title.message}</span>}

                            <Label>Descrição:</Label>
                            <Input type="text" placeholder="Descrição" {...register("description")} />
                            {errors.description && <span>{errors.description.message}</span>}

                            <Label>Tamanho:</Label>
                            <Input type="text" placeholder="Tamanho" {...register("size")} />
                            {errors.size && <span>{errors.size.message}</span>}

                            <Label>Código:</Label>
                            <Input type="text" placeholder="Código" {...register("code")} />
                            {errors.code && <span>{errors.code.message}</span>}

                            <Label>Status:</Label>
                            <select {...register("status")}>
                                <option value="">Selecione um status</option>
                                <option value="disponível">Disponível</option>
                                <option value="indisponível">Indisponível</option>
                            </select>
                            {errors.status && <span>{errors.status.message}</span>}

                            <Button type="submit">Salvar</Button>
                        </form>
                    </PopupContent>
                </PopupContainer>
            )}
        </>
    );
}
