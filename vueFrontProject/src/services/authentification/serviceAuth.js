import axios from "axios";

const useAuth = () => {
    const login = async (infoLogin) => {
        const user = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`,infoLogin)
        return user.data
    }

    return {login}
}

export default useAuth