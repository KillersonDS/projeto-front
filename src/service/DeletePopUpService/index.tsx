import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://roseanne-dias-aluguel.onrender.com/stock";

export const deleteVestido = async (id: number) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        throw new Error("Token não encontrado. O usuário não está autenticado.");
    }

    try {
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Resposta da deleção:', response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error("Erro ao deletar o vestido:", error.response?.data || error.message);
        } else {
            console.error("Erro desconhecido:", error);
        }
        throw new Error("Erro ao deletar o vestido");
    }
};

