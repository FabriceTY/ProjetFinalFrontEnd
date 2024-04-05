<template>
    <form @submit.prevent="soumettre">
        <div class="mb-3">
            <label for="nomAuteur" class="form-label">Nom Auteur</label>
            <input type="text" class="form-control" id="nomAuteur" v-model="auteur.nomAuteur">
        </div>
        <div class="mb-3">
            <label for="prenomAuteur" class="form-label">Prenom Auteur </label>
            <input type="text" class="form-control" id="prenomAuteur" v-model="auteur.prenomAuteur">
        </div>       
        <div class="mb-3">
            <label for="sexeAuteur" class="form-label">Sexe Auteur </label>
            <input type="text" class="form-control" id="sexeAuteur" v-model="auteur.sexeAuteur">
        </div> 
    </form>
</template>


<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import useAuteur from '@/services/serviceAuteur';

//import {useAuteur} from '@/services/serviceAuteur'
const {addAuteur} = useAuteur()

const router = useRouter()

const auteur = ref({
    nomAuteur:null,
    prenomAuteur:null,
    sexeAuteur:null,

})
const soumettre = () =>{
    addAuteur(auteur.value)
    .then(res =>{
        console.log(res)
        router.push('/')
    })
    .catch(err => console.log('erreur',err))
    console.log('auteur', auteur.value)
}
</script>