import { Button } from "./styles"

export interface ButtonProps {
    children: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function ButtonDown({ children, onClick, type }: ButtonProps) {
    return (
        <Button onClick={onClick} type={type}>
            {children}
        </Button>
    )
}