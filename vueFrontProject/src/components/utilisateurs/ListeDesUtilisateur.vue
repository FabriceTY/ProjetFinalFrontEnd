<template>
    <div class="mb-3">
        <h1>Liste des utilisateurs</h1>
    
        <table class="table table-striped">
        <thead>
            <tr>                
                <th>Nom Utilisateur</th>
                <th>Prenom Utilisateur</th>
                <th>Mot de Passe</th>
                <th>Email</th>
                
                <th>Role Id</th>   
                <th>Action</th>               
            </tr>
        </thead>
        <tbody>
            <tr v-for="utilisateur in listeUtilisateur" :key="utilisateur.id">
                
                <td>{{ utilisateur.nomUtilisateur }}</td>
                <td>{{ utilisateur.prenomUtilisateur }}</td>
                <td>{{ utilisateur.motDePasseUtilisateur }}</td>
                <td>{{ utilisateur.emailUtilisateur }}</td>
                <td>{{ utilisateur.roleId }}</td>
                
                <td><button type="button" class="btn btn-primary position relative" @click="update(utilisateur.id)" >Modifier</button>
                    <button type="button" class="btn btn-success position relative" @click="goToProfile(utilisateur.id)">Details</button>
                    <button type="button" class="btn btn-danger position relative" @click="supprimer(utilisateur.id)">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
        
    </div>
    
    <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-primary position relative" @click="goToAddUtilisateur">Ajouter un utilisateur </button>       
           
       
    </div>
    <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-primary position relative" @click="goToListeLivre">Gestion des livres </button>
        <button type="button" class="btn btn-primary position relative" @click="goToListeRole">Gestion des Roles </button>        
    </div>
    
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useUtilisateur from '../../services/serviceUtilisateur'
import { useRouter } from "vue-router";
const { getAllUtilisateurs, deleteUtilisateur } = useUtilisateur()

const listeUtilisateur = ref([])
const router = useRouter()

const supprimer = id => {
    deleteUtilisateur(id)
        .then((res) => {
            console.log('suppression', res)
            getAllUtilisateurs()
                .then((res) => listeUtilisateur.value = res.data)
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
};
const update = (id) => {
    router.push(`/update-utilisateur/${id}`)
}
onBeforeMount(() => {
    getAllUtilisateurs()
        .then((res) => listeUtilisateur.value = res.data)
        .catch(err => console.log(err))
})

const goToAddUtilisateur = () => router.push('/add-utilisateur')

const goToListeRole = () => router.push('/get-role')
const goToListeLivre = () => router.push('/')


const goToProfile = id => {
    router.push(`/profileUtilisateur/${id}`)
}

</script>
<style scoped>
    /* Ajout de styles pour aligner les éléments verticalement */
    /* .mb-3 button {
        margin-bottom: 10px;
        display: inline-block;
    } */
</style>
 

 