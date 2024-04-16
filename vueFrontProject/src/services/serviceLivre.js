import axios from "axios";

const useLivre = () =>{
    // creer une fonction qui recuperer la liste des livres
    const getAllLivres = async()=>{
        const livres = await axios.get(`${import.meta.env.VITE_BASE_URL}/livre`)
        return livres.data
    }
    const addLivre = async (livre) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/livre`, livre)

    }
    const deleteLivre = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/livre/${id}`)
    }

    const getLivreById = async (id) => {
        const livre = await axios.get(`${import.meta.env.VITE_BASE_URL}/livre/${id}`)
        return livre.data
    }
    
    const updateLivre = async (id, livre) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/livre/${id}`, livre)

    }
    
    return {getAllLivres, addLivre,deleteLivre, getLivreById, updateLivre}
}
export default useLivre