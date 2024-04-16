<template>
    <form @submit.prevent="soumettre">
        <div class="mb-3">
            <label for="nomSanction" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nomSanction" v-model="Sanction.nomSanction">
        </div>
        <div class="mb-3">
            <label for=" typesanction" class="form-label"> typesanction </label>
            <input type="text" class="form-control" id=" typesanction" v-model="sanction.type ">
        </div>       
    </form>
</template>


<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';


import usesanction from '@/services/servicesanction';

//import {usesanction} from '@/services/servicesanction'
const {addsanction} = usesanction()

const router = useRouter()

const sanction = ref({
    nomsanction:null,
    typeSanction:null,

})
const soumettre = () =>{
    addsanction(sanction.value)
    .then(res =>{
        console.log(res)
        router.push('/')
    })
    .catch(err => console.log('erreur',err))
    console.log('sanction', sanction.value)
}
</script>