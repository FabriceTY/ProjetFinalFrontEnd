<template>
    <form @submit.prevent="soumettre">
        <div class="mb-3">
            <label for="nomRayon" class="form-label">Nom Rayon</label>
            <input type="text" class="form-control" id="nomRayon" v-model="rayon.nomRayon">
        </div>
        <div class="mb-3">
            <label for="descriptionRayon" class="form-label">Description Rayon</label>
            <input type="text" class="form-control" id="descriptionRayon" v-model="rayon.descriptionRayon">
        </div>            
        <div class="d-flex justify-content-around">
            <button type="submit" class="btn btn-primary" @click="soumettre()">Soumettre</button> 
            <button type="submit" class="btn btn-primary" @click="goToListeRayon()" >Annuler</button>   
        </div>  
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useRayon from '../../services/serviceRayon';


const { getRayonById , updateRayon, getAllRayons } = useRayon();


const router = useRouter();
const rayon = ref({
    nomRayon: null,
    descriptionRayon: null,
    
});
const route = useRoute();
const { id } = route.params;

const soumettre = () => {
    console.log('Mise à jour du rayon :');
    updateRayon(id, rayon.value)
        .then(res => {
            console.log('Mise à jour réussie :', res);
            router.push('/get-rayon');
        })
        .catch(err => console.error('Erreur lors de la mise à jour du rayon :', err));
};

const rayonList = ref([]);


onBeforeMount(() => {
    getRayonById(id)
        .then(res => rayon.value = res.data)
        .catch(err => console.log('Erreur dans la liste des rayons',err));

    getAllRayons()
        .then(res => rayonList.value = res.data)
        .catch(err => console.log('Erreur dans la liste des rayons', err));

    getAllRayons()
         .then(res => rayonList.value = res.data)
         .catch(err => console.log('erreur dans la liste des rayons', err));
});
const goToListeRayon = () => router.push('/get-rayon')
</script>

