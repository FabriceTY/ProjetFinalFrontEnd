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
    return {getAllAuteurs, addAuteur}
}
export default useAuteur