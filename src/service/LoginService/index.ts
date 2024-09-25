import axios from "axios"

const API_URL = "https://aluguel-production-cb20.up.railway.app/login"

// Rota desprotegida
export const loginRequest = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      API_URL,
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    )

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token)
      return response.data
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Erro no login, verifique suas credenciais.")
  }
}

// Rota protegida
export const protectedRequest = async (url: string) => {
  const token = localStorage.getItem("token")

  if (!token) {
    throw new Error("Token não encontrado. Faça login.")
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Erro na requisição protegida.")
  }
}
