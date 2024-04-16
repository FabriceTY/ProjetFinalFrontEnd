<template>
    <form @submit.prevent="soumettre">
        <div class="mb-3">
            <label for="nomEmprunt" class="form-label">Nom Emprunt</label>
            <input type="text" class="form-control" id="nomEmprunt" v-model="amprunt.nomEmprunt">
        </div>
        <div class="mb-3">
            <label for="prenomEmprunt" class="form-label">Prenom Emprunt </label>
            <input type="text" class="form-control" id="prenomEmprunt" v-model="Emprunt.prenomAuteur">
        </div>       
        <div class="mb-3">
            <label for="sexeEmprunt" class="form-label">Sexe Emprunt </label>
            <input type="text" class="form-control" id="sexeEmprunt" v-model="emprunt.sexeEmprunt">
        </div> 
    </form>
</template>


<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import useEmprunt from '@/services/serviceEmprunt';

//import {useEmprunt} from '@/services/serviceEmprunt'
const {addEmprunt} = useEmprunt()

const router = useRouter()

const Emprunt = ref({
    nomEmprunt:null,
    prenomEmprunt:null,
    sexeEmprunt:null,

})
const soumettre = () =>{
    addEmprunt(Emprunt.value)
    .then(res =>{
        console.log(res)
        router.push('/')
    })
    .catch(err => console.log('erreur',err))
    console.log('Emprunt', Emprunt.value)
}
</script>