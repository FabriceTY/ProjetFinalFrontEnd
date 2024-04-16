<template>
    <div class="mb-3">
        <h1>Liste des roles</h1>
    
        <table class="table table-striped">
        <thead>
            <tr>                
                <th>Nom Role</th>
                <th>Description</th>
                <th>Type Role</th>                              
            </tr>
        </thead>
        <tbody>
            <tr v-for="role in listeRole" :key="role.id">
                
                <td>{{ role.nomRole }}</td>
                <td>{{ role.descriptionRole }}</td> 
                <td>{{ role.typeRole }}</td>               
                
                <td><button type="button" class="btn btn-primary position relative" @click="update(role.id)" >Modifier</button>
                    <button type="button" class="btn btn-success position relative" @click="goToProfile(role.id)">Details</button>
                    <button type="button" class="btn btn-danger position relative" @click="supprimer(role.id)">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
        
    </div>
    
    <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-primary position relative" @click="goToAddRole">Ajouter un role </button>       
           
       
    </div>
    <div class="mb-3"></div>
    <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-primary position relative" @click="goToListeLivre">Gestion des Livres </button>
             
           
        <button type="button" class="btn btn-primary position relative" @click="goToListeAuteur">Gestion des auteurs </button>

    </div>
    
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useRole from '../../services/serviceRole'
import { useRouter } from "vue-router";
const { getAllRoles, deleteRole } = useRole()

const listeRole = ref([])
const router = useRouter()

const supprimer = id => {
    deleteRole(id)
        .then((res) => {
            console.log('suppression', res)
            getAllRoles()
                .then((res) => listeRole.value = res.data)
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
};
const update = (id) => {
    router.push(`/update-role/${id}`)
}
onBeforeMount(() => {
    getAllRoles()
        .then((res) => listeRole.value = res.data)
        .catch(err => console.log(err))
})

const goToAddRole = () => router.push('/add-role')

const goToListeLivre = () => router.push('/')
const goToListeAuteur = () => router.push('/get-auteur')


const goToProfile = id => {
    router.push(`/profileRole/${id}`)
}

</script>
<style scoped>
    /* Ajout de styles pour aligner les éléments verticalement */
    /* .mb-3 button {
        margin-bottom: 10px;
        display: inline-block;
    } */
</style> 


