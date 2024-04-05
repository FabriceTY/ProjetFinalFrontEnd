import axios from "axios";

const useLivre = () =>{
    // creer une fonction qui recuperer la liste des livres
    const getAllLivres = async()=>{
        const livres = await axios.get(`${import.meta.env.VITE_BASE_URL}/livres`)
        return livres.data
    }
    const addLivre = async (addLivre) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/livres`, livre)

    }
    const deleteLivre = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/livres/${id}`)
    }

    const getLivreById = async (id) => {
        const etudiant = await axios.get(`${import.meta.env.VITE_BASE_URL}/livres/${id}`)
        return livre.data
    }
    
    const updateLivre = async (id, livre) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/livres/${id}`, livre)

    }
    return {getAllLivres, addLivre,deleteLivre, getLivreById, updateLivre}
}
export default useLivre