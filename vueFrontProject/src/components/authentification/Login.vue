<template>
    <!-- <form @submit.prevent="connecter"> -->
        <h1>Connexion</h1>
    <form>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control"  v-model="loginInfo.email">
        </div>
        <div class="mb-3">
            <label for="mpd" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="mdp" v-model="loginInfo.mot_de_passe">
        </div>
        
        <div class="d-flex justify-content-around">
            <button type="submit" class="btn btn-primary" @click="connecter()">Se connecter</button>
            <button type="submit" class="btn btn-primary"@click="compteCree()">Creer un compte</button>
        </div>
        
        
    
    </form>
</template>
<script setup>
import { ref } from 'vue';
import useAuth from '@/services/authentification/serviceAuth'
import {useRouter} from 'vue-router'
const { login } = useAuth()

const user = ref({})
const loginInfo = ref({
    email: null,
    mot_de_passe: null
})
const router = useRouter()

const connecter = () => {
    const {email:emailUtilisateur, mot_de_passe:motDePasseUtilisateur }= loginInfo.value
    login({emailUtilisateur,motDePasseUtilisateur}).then(res => {
        user.value = res.data
        router.push('/get-role')
        console.log('User', user.value)
}).catch(err => {
    router.push('/login')
    console.log('Erreur connexion', err)})
}
const compteCree = () => router.push('/get-utilisateur')
</script>