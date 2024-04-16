<template>
    <form>
        <div class="mb-3">
            <label for="nomRole" class="form-label">Nom Role</label>
            <input type="text" class="form-control" id="nomRole" v-model="role.nomRole">
        </div>
        <div class="mb-3">
            <label for="descriptionRole" class="form-label">Description </label>
            <input type="text" class="form-control" id="descriptionRole" v-model="role.descriptionRole">
        </div> 
        <div class="mb-3">
            <label for="typeRole" class="form-label">Type Role </label>
            <input type="text" class="form-control" id="typeRole" v-model="role.typeRole">
        </div> 
        <div class="d-flex justify-content-around">
            <button type="submit" class="btn btn-primary" @click="soumettre()">Soumettre</button> 
            <button type="submit" class="btn btn-primary" @click="goToListeRole()" >Retour</button>   
        </div>      
    </form>
</template>


<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';

import useRole from '@/services/serviceRole'
const {addRole} = useRole()

const router = useRouter()

const role = ref({
    nomRole:null,
    descriptionRole:null,
    typeRole:null,

})
const soumettre = () =>{
    addRole(role.value)
    .then(res =>{
        console.log(res)
        router.push('/get-role')
    })
    .catch(err => console.log('erreur',err))
    console.log('role', role.value)
}
const goToListeRole = () => router.push('/get-role')
</script>