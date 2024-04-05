import axios from "axios";

const useExemplaire = () =>{
    // creer une fonction qui recuperer la liste des exemplaires
    const getAllExemplaires = async()=>{
        const exemplaires = await axios.get(`${import.meta.env.VITE_BASE_URL}/exemplaires`)
        return exemplaires.data
    }
    const addExemplaire = async (addExemplaire) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/exemplaires`, exemplaire)

    }
    return {getAllExemplaires, addExemplaire}
}
export default useExemplaire