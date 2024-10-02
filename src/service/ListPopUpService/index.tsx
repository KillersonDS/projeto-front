import axios from "axios";

const API_URL = "https://roseanne-dias-aluguel.onrender.com/stock";

export const fetchVestidos = async (token: string) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error('Erro ao buscar vestidos:', error);
        throw new Error('Erro ao carregar vestidos.');
    }
};
