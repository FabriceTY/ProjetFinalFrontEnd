import axios from "axios";

const useAuteur = () =>{
    // creer une fonction qui recuperer la liste des auteurs
    const getAllAuteurs = async()=>{
        const auteur = await axios.get(`${import.meta.env.VITE_BASE_URL}/auteur`)
        return auteur.data
    }
    const addAuteur = async (auteur) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/auteur`, auteur)

    }
    const deleteAuteur = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/auteur/${id}`)
    }

    const getAuteurById = async (id) => {
        const auteur = await axios.get(`${import.meta.env.VITE_BASE_URL}/auteur/${id}`)
        return auteur.data
    }
    
    const updateAuteur = async (id, auteur) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/auteur/${id}`, auteur)

    }
    return {getAllAuteurs, addAuteur,deleteAuteur, getAuteurById, updateAuteur}
}
export default useAuteur