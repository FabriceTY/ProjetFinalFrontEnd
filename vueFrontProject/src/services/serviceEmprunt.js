import axios from "axios";

const useEmprunt = () =>{
    // creer une fonction qui recuperer la liste des Emprunt
    const getAllEmprunt = async()=>{
        const Emprunt = await axios.get(`${import.meta.env.VITE_BASE_URL}/Emprunt`)
        return Emprunts.data
    }
    const addEmprunt = async (addEmprunt) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/Emprunt`, Emprunt)

    }
    return {getAllEmprunt, addEmprunt}
}
export default useEmprunt   