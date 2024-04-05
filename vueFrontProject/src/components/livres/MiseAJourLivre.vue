<template>
    <form @submit.prevent="soumettre">

        <div class="mb-3">
            <label for="nomLivre" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nomLivre" v-model="livre.nomLivre">
        </div>
        <div class="mb-3">
            <label for="nombrePageLivre" class="form-label">Nombre de Page </label>
            <input type="text" class="form-control" id="nombrePageLivre" v-model="livre.nombrePageLivre">
        </div> 
        
        <!-- Ajout des relations  -->

        <div class="mb-3">
            <label for="auteur" class="form-label">Auteurs</label>
            <select id="auteur" class="form-select" v-model="livre.auteurId">
                <option selected>Choisir un auteur</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="rayon" class="form-label">Rayon</label>
            <select id="rayon" class="form-select" v-model="livre.rayonId">
                <option selected>Choisir un rayon</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
/* import useLivre from '@/services/serviceLivre'; */

import useLivre from '../../services/serviceLivre';
const { getLivreById } = useLivre()
const router = useRouter()
const route = useRoute()
const { id } = route.params
const livre = ref({
    nomLivre: null,
    nombrePageLivre: null,
    auteurId: null,
    rayonId:null,
    //utilisateurId:null,
    
})

const soumettre = () => {
    console.log('livre', livre.value)
}
onBeforeMount(() => {
    getLivreById(id)
    .then(res => livre.value = res.data)

})
</script>
