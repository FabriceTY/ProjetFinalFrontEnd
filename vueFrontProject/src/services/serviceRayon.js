import axios from "axios";

const useRayon = () =>{
    // creer une fonction qui recuperer la liste des rayons
    const getAllRayons = async()=>{
        const rayons = await axios.get(`${import.meta.env.VITE_BASE_URL}/rayons`)
        return rayons.data
    }
    const addRayon = async (addRayon) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/rayons`, rayon)

    }
    return {getAllRayons, addRayon}
}
export default useRayon