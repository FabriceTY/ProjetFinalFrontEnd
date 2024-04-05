<template>
    <form @submit.prevent="soumettre">
        <div class="mb-3">
            <label for="nomExemplaire" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nomExemplaire" v-model="exemplaire.nomExemplaire">
        </div>
        <div class="mb-3">
            <label for="nombrePageExemplaire" class="form-label">Nombre de Page </label>
            <input type="text" class="form-control" id="nombrePageExemplaire" v-model="exemplaire.nombrePageExemplaire">
        </div>       
    </form>
</template>


<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';


import useExemplaire from '@/services/serviceExemplaire';

//import {useExemplaire} from '@/services/serviceExemplaire'
const {addExemplaire} = useExemplaire()

const router = useRouter()

const exemplaire = ref({
    nomExemplaire:null,
    nombrePageExemplaire:null,

})
const soumettre = () =>{
    addExemplaire(exemplaire.value)
    .then(res =>{
        console.log(res)
        router.push('/')
    })
    .catch(err => console.log('erreur',err))
    console.log('exemplaire', exemplaire.value)
}
</script>