<template>
    <div class="mb-3">
        <h1>Liste des rayons</h1>
    
        <table class="table table-striped">
        <thead>
            <tr>                
                <th>Nom Rayon</th>
                <th>Description</th>
                <th>Action</th>
                              
            </tr>
        </thead>
        <tbody>
            <tr v-for="rayon in listeRayon" :key="rayon.id">
                
                <td>{{ rayon.nomRayon }}</td>
                <td>{{ rayon.descriptionRayon }}</td>                
                
                <td><button type="button" class="btn btn-primary position relative" @click="update(rayon.id)" >Modifier</button>
                    <button type="button" class="btn btn-success position relative" @click="goToProfile(rayon.id)">Details</button>
                    <button type="button" class="btn btn-danger position relative" @click="supprimer(rayon.id)">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
        
    </div>
    
    <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-primary position relative" @click="goToAddRayon">Ajouter un rayon </button>       
           
       
    </div>
    <div class="mb-3"></div>
    <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-primary position relative" @click="goToListeLivre">Gestion des Livres </button>
             
           
        <button type="button" class="btn btn-primary position relative" @click="goToListeAuteur">Gestion des auteurs </button>

    </div>
    
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useRayon from '../../services/serviceRayon'
import { useRouter } from "vue-router";
const { getAllRayons, deleteRayon } = useRayon()

const listeRayon = ref([])
const router = useRouter()

const supprimer = id => {
    deleteRayon(id)
        .then((res) => {
            console.log('suppression', res)
            getAllRayons()
                .then((res) => listeRayon.value = res.data)
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
};
const update = (id) => {
    router.push(`/update-rayon/${id}`)
}
onBeforeMount(() => {
    getAllRayons()
        .then((res) => listeRayon.value = res.data)
        .catch(err => console.log(err))
})

const goToAddRayon = () => router.push('/add-rayon')

const goToListeLivre = () => router.push('/')
const goToListeAuteur = () => router.push('/get-auteur')


const goToProfile = id => {
    router.push(`/profileRayon/${id}`)
}

</script>
<style scoped>
    /* Ajout de styles pour aligner les éléments verticalement */
    /* .mb-3 button {
        margin-bottom: 10px;
        display: inline-block;
    } */
</style> 


