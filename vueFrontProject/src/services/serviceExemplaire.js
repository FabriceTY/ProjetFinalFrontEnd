import axios from "axios";

const useExemplaire = () =>{
    // creer une fonction qui recuperer la liste des exemplaires
    const getAllExemplaires = async()=>{
        const exemplaires = await axios.get(`${import.meta.env.VITE_BASE_URL}/exemplaire`)
        return exemplaires.data
    }
    const addExemplaire = async (exemplaire) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/exemplaire`, exemplaire)

    }
    const deleteExemplaire = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/exemplaire/${id}`)
    }

    const getExemplaireById = async (id) => {
        const etudiant = await axios.get(`${import.meta.env.VITE_BASE_URL}/exemplaire/${id}`)
        return exemplaire.data
    }
    
    const updateExemplaire = async (id, exemplaire) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/exemplaire/${id}`, exemplaire)

    }
    return {getAllExemplaires, addExemplaire,deleteExemplaire, getExemplaireById, updateExemplaire}
}
export default useExemplaire