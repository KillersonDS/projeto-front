import { Button } from "./styles"

export interface ButtonProps {
    children: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function ButtonDown({ children, onClick, disabled, type }: ButtonProps) {
    return (
        <Button onClick={onClick} type={type} disabled={disabled}>
            {children}
        </Button>
    )
}