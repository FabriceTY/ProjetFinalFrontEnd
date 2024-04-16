<template>
    <form>

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
                <option disabled value="">Choisir un auteur</option>
                <option v-for="auteur in auteurList" :value="auteur.id" :key="auteur.id">{{
                    auteur.nomAuteur }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="rayon" class="form-label">Rayons</label>
            <select id="rayon" class="form-select" v-model="livre.rayonId">
                <option disabled value="">Choisir un rayon</option>
                <option v-for="rayon in rayonList" :value="rayon.id" :key="rayon.id">{{ rayon.nomRayon }}</option>
            </select>
        </div>
        <div class="d-flex justify-content-around">
            <button type="submit" class="btn btn-primary" @click="soumettre">Submit</button>
            <button type="submit" class="btn btn-primary" @click="goToListeLivre()">Annuler</button>
        </div>
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
/* import useLivre from '@/services/serviceLivre'; */

import useLivre from '../../services/serviceLivre';
import useRayon from '@/services/serviceRayon';
import useAuteur from '@/services/serviceAuteur';

const { getLivreById } = useLivre()
const { getAllAuteurs } = useAuteur()
const { getAllRayons } = useRayon()

const router = useRouter()
const auteurList = ref([])
const rayonList = ref([])
const route = useRoute()
const { id } = route.params
const livre = ref({
    nomLivre: null,
    nombrePageLivre: null,
    auteurId: null,
    rayonId: null,


})


const soumettre = () => {
    console.log('Mise à jour du livre :');
    updateLivre(id, livre.value)
        .then(res => {
            console.log('Mise à jour réussie :', res);
            router.push('/');
        })
        .catch(err => console.error('Erreur lors de la mise à jour du livre :', err));
};
onBeforeMount(() => {
    getLivreById(id)
        .then(res => livre.value = res.data)
        .catch(err => console.log('Erreur dans la liste des livres', err))

    getAllAuteurs()
        .then(res => auteurList.value = res.data)
        .catch(err => console.log('Erreur dans la liste des auteurs', err))

    getAllRayons()
        .then(res => rayonList.value = res.data)
        .catch(err => console.log('erreur dans la liste des rayons', err))
})
const goToListeLivre = () => router.push('/')
</script>
