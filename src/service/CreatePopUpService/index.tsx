import axios from "axios";

const API_URL = "https://roseanne-dias-aluguel.onrender.com/stock";

export const CreatePopUp = async (
    title: string,
    description: string,
    size: string,
    code: string,
    status: string,
    token: string
) => {
    try {
        const response = await axios.post(API_URL, {
            title,
            description,
            size,
            code,
            status,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Erro ao criar o produto:", error);
        throw new Error("Erro ao criar o produto");
    }
};
