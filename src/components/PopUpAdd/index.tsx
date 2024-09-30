// import { PopupContainer, PopupContent, Input, Label, Button, CloseButton } from './styles';
// import { usePopup } from "../../context/PopUpContext";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { CreatePopUp } from '../../service/CreatePopUpService';

// const productSchema = z.object({
//     title: z.string().min(1, "Nome é obrigatório"),
//     description: z.string().min(1, "Cor é obrigatória"),
//     size: z.string().min(1, "Tamanho é obrigatório"),
//     code: z.string().min(1, "Código é obrigatório"),
//     status: z.string().min(1, "Status é obrigatório"),
// });

// type ProductFormData = z.infer<typeof productSchema>;

// export default function DressPopupAdd() {
//     const { togglePopup, popupType } = usePopup();
//     const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductFormData>({
//         resolver: zodResolver(productSchema)
//     });

//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiI2MTkyOTc5MzMyNCIsImlkIjoiYWY5ZGViNDctNjVjOS00OGJjLWIxNTctNmRlMjM3NWY4M2MzIiwiaWF0IjoxNzI3MDY0OTY1LCJleHAiOjE3MjcwNjg1NjV9.8Iep_L9WfUe4r-soL5cstCT2WfRWy4GrgrtYVRH40pY";

//     const onSubmit = async (data: ProductFormData) => {
//         try {
//             const response = await CreatePopUp(data.title, data.description, data.size, data.code, data.status, token);
//             console.log('Produto criado:', response);
//             togglePopup();
//             reset();
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         } catch (error) {
//             console.error('Erro ao criar o produto');
//         }
//     };

//     return (
//         <>
//             {popupType === 'add' && (
//                 <PopupContainer>
//                     <PopupContent>
//                         <CloseButton onClick={() => togglePopup()}>X</CloseButton>
//                         <h2>Adicionar Vestido</h2>

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <Label>Nome:</Label>
//                             <Input
//                                 type="text"
//                                 placeholder="Nome"
//                                 {...register("title")}
//                             />
//                             {errors.title && <span>{errors.title.message}</span>}

//                             <Label>Cor:</Label>
//                             <Input
//                                 type="text"
//                                 placeholder="Cor"
//                                 {...register("description")}
//                             />
//                             {errors.description && <span>{errors.description.message}</span>}

//                             <Label>Tamanho:</Label>
//                             <Input
//                                 type="text"
//                                 placeholder="Tamanho"
//                                 {...register("size")}
//                             />
//                             {errors.size && <span>{errors.size.message}</span>}

//                             <Label>Código:</Label>
//                             <Input
//                                 type="text"
//                                 placeholder="Código"
//                                 {...register("code")}
//                             />
//                             {errors.code && <span>{errors.code.message}</span>}

//                             <Label>Status:</Label>
//                             <Input
//                                 type="text"
//                                 placeholder="Status"
//                                 {...register("status")}
//                             />
//                             {errors.status && <span>{errors.status.message}</span>}

//                             <Button type="submit">Salvar</Button>
//                         </form>
//                     </PopupContent>
//                 </PopupContainer>
//             )}
//         </>
//     );
// }
