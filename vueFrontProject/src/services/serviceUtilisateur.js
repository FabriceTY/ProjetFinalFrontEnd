import axios from "axios";

const useUtilisateur = () =>{
    // creer une fonction qui recuperer la liste des utilisateurs
    const getAllUtilisateurs = async()=>{
        const utilisateurs = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateur`)
        return utilisateurs.data
    }
    const addUtilisateur = async (utilisateur) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/utilisateur`, utilisateur)

    }
    const deleteUtilisateur = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/utilisateur/${id}`)
    }

    const getUtilisateurById = async (id) => {
        const utilisateur = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateur/${id}`)
        return utilisateur.data
    }
    
    const updateUtilisateur = async (id, utilisateur) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/utilisateur/${id}`, utilisateur)

    }
    
    return {getAllUtilisateurs, addUtilisateur,deleteUtilisateur, getUtilisateurById, updateUtilisateur}
}
export default useUtilisateur