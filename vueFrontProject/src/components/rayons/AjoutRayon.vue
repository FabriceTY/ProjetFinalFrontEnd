<template>
    <form>
        <div class="mb-3">
            <label for="nomRayon" class="form-label">Nom Rayon</label>
            <input type="text" class="form-control" id="nomRayon" v-model="rayon.nomRayon">
        </div>
        <div class="mb-3">
            <label for="descriptionRayon" class="form-label">Description </label>
            <input type="text" class="form-control" id="descriptionRayon" v-model="rayon.descriptionRayon">
        </div> 
        <div class="d-flex justify-content-around">
            <button type="submit" class="btn btn-primary" @click="soumettre()">Soumettre</button> 
            <button type="submit" class="btn btn-primary" @click="goToListeRayon()" >Annuler</button>   
        </div>      
    </form>
</template>


<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import useRayon from '@/services/serviceRayon';

//import {useRayon} from '@/services/serviceRayon'
const {addRayon} = useRayon()

const router = useRouter()

const rayon = ref({
    nomRayon:null,
    descriptionRayon:null,

})
const soumettre = () =>{
    addRayon(rayon.value)
    .then(res =>{
        console.log(res)
        router.push('/get-rayon')
    })
    .catch(err => console.log('erreur',err))
    console.log('rayon', rayon.value)
}
const goToListeRayon = () => router.push('/get-rayon')
</script>