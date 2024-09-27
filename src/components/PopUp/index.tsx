// import { FormWrapper, InputWrapper, Label, Input, Button } from "./styles"

// import { useForm, SubmitHandler } from 'react-hook-form';

// interface Field {
//     name: string;
//     label: string;
//     type: string;
// }

// interface DynamicFormProps {
//     fields: Field[];
//     onSubmit: SubmitHandler<any>;
// }


// export default function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
//     const { register, handleSubmit } = useForm();

//     return (
//         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
//             {fields.map((field) => (
//                 <InputWrapper key={field.name}>
//                     <Label htmlFor={field.name}>{field.label}:</Label>
//                     <Input
//                         id={field.name}
//                         {...register(field.name)}
//                         type={field.type}
//                     />
//                 </InputWrapper>
//             ))}
//             <Button type="submit">Salvar</Button>
//         </FormWrapper>
//     );
// };

