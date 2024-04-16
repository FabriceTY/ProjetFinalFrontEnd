import axios from "axios";

const useSanction = () =>{
    // creer une fonction qui recuperer la liste des  Sanction
    const getAllSanction = async()=>{
        const  Sanction = await axios.get(`${import.meta.env.VITE_BASE_URL}/ Sanction`)
        return  Sanction.data
    }
    const addSanction = async (addSanction) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/ Sanction`,  Sanction)

    }
    return {getAllSanction, addSanction}
}
export default useSanction