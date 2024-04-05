import axios from "axios";

const useAuteur = () =>{
    // creer une fonction qui recuperer la liste des auteurs
    const getAllAuteurs = async()=>{
        const auteurs = await axios.get(`${import.meta.env.VITE_BASE_URL}/auteurs`)
        return auteurs.data
    }
    const addAuteur = async (addAuteur) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/auteurs`, auteur)

    }
    const deleteAuteur = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/auteurs/${id}`)
    }

    const getAuteurById = async (id) => {
        const etudiant = await axios.get(`${import.meta.env.VITE_BASE_URL}/auteurs/${id}`)
        return auteur.data
    }
    
    const updateAuteur = async (id, auteur) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/auteurs/${id}`, auteur)

    }
    return {getAllAuteurs, addAuteur,deleteAuteur, getAuteurById, updateAuteur}
}
export default useAuteur