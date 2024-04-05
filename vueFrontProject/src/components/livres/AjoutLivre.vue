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
    </form>
</template>

<!-- ajout des releations  -->



<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import useLivre from '@/services/serviceLivre';

//import {useLivre} from '@/services/serviceLivre'
const {addLivre} = useLivre()

const router = useRouter()

const livre = ref({
    nomLivre:null,
    nombrePageLivre:null,

})
const soumettre = () =>{
    addLivre(livre.value)
    .then(res =>{
        console.log(res)
        router.push('/')
    })
    .catch(err => console.log('erreur',err))
    console.log('livre', livre.value)
}
</script>