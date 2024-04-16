import axios from "axios";

const useRole = () =>{
    // creer une fonction qui recuperer la liste des roles
    const getAllRoles = async()=>{
        const roles = await axios.get(`${import.meta.env.VITE_BASE_URL}/role`)
        return roles.data
    }
    const addRole = async (role) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/role`, role)

    }
    const deleteRole = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/role/${id}`)
    }

    const getRoleById = async (id) => {
        const role = await axios.get(`${import.meta.env.VITE_BASE_URL}/role/${id}`)
        return role.data
    }
    
    const updateRole = async (id, role) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/role/${id}`, role)

    }
    
    return {getAllRoles, addRole,deleteRole, getRoleById, updateRole}
}
export default useRole