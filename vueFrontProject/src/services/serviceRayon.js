import axios from "axios";

const useRayon = () =>{
    // creer une fonction qui recuperer la liste des rayons
    const getAllRayons = async()=>{
        const rayon = await axios.get(`${import.meta.env.VITE_BASE_URL}/rayon`)
        return rayon.data
    }
    const addRayon = async (rayon) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/rayon`, rayon)

    }
    const deleteRayon = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/rayon/${id}`)
    }

    const getRayonById = async (id) => {
        const rayon = await axios.get(`${import.meta.env.VITE_BASE_URL}/rayon/${id}`)
        return rayon.data
    }
    
    const updateRayon = async (id, rayon) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/rayon/${id}`, rayon)

    }
    return {getAllRayons, addRayon,deleteRayon, getRayonById, updateRayon}
}
export default useRayon