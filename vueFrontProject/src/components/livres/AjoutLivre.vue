<template>
    <!-- <form @submit.prevent="soumettre"> -->
    
        <legend class="font-weight-bold">Informations personnelles</legend>
        <form>
            <div class="mb-3">
                <h1>Formulaire d'ajout d'un livre.</h1>
            </div>
            <div class="mb-3">
                <label for="nomLivre" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nomLivre" v-model="livre.nomLivre" />
            </div>
            <div class="mb-3">
                <label for="nombrePageLivre" class="form-label">Nombre de Page </label>
                <input type="text" class="form-control" id="nombrePageLivre" v-model="livre.nombrePageLivre" />
            </div>
            <div class="mb-3">
                <label for="auteur" class="form-label">Auteurs</label>
                <select id="auteur" class="form-select" v-model="livre.auteurId">
                    <option disabled value="">Choisir un auteur</option>
                    <option v-for="auteur in auteurList" :value="auteur.id" :key="auteur.id">
                        {{ auteur.nomAuteur }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="rayon" class="form-label">Rayons</label>
                <select id="rayon" class="form-select" v-model="livre.rayonId">
                    <option disabled value="">Choisir un rayon</option>
                    <option v-for="rayon in rayonList" :value="rayon.id" :key="rayon.id">
                        {{ rayon.nomRayon }}
                    </option>
                </select>
            </div>
    
            <div class="d-flex justify-content-around">
                <!-- <button type="submit" class="btn btn-primary">Submit</button> 
            <button type="submit" class="btn btn-primary">Annuler</button> 
            <button type="submit" class="btn btn-primary">Retour a la liste de livres</button>  -->

                <button type="submit" class="btn btn-success position relative" @click="soumettre">
                    Soumettre
                </button>
                <button type="button" class="btn btn-primary position relative" @click="goToListeLivre()">
                    Retour
                </button>
            </div>
        </form>
    
</template>

<!-- ajout des relations  -->

<script setup>
import { onBeforeMount } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuteur from "@/services/serviceAuteur";
import useLivre from "@/services/serviceLivre";
import useRayon from "@/services/serviceRayon";

//import {useLivre} from '@/services/serviceLivre'
const { addLivre } = useLivre();

const { getAllAuteurs } = useAuteur();
const { getAllRayons } = useRayon();

const router = useRouter();
const auteurList = ref([]);
const rayonList = ref([]);
const livre = ref({
    nomLivre: null,
    nombrePageLivre: null,
    auteurId: null,
    rayonId: null,
});

const formData = new FormData();

const soumettre = () => {
    // for(let clef in livre.value){
    //     formData.append(clef, livre.value[clef])
    // }

    addLivre(livre.value)
        .then((res) => {
            console.log(res);
            router.push("/");
        })
        .catch((err) => console.log("erreur", err));
    console.log("livre", livre.value);
};
const goToListeLivre = () => router.push("/");

onBeforeMount(() => {
    getAllAuteurs()
        .then((res) => (auteurList.value = res.data))
        .catch((err) => console.log("Erreur dans la liste des livres", err));

    getAllRayons()
        .then((res) => (rayonList.value = res.data))
        .catch((err) => console.log("Rayon list error", err));
        
    getAllUtilisateurs()
        .then((res) => (utilisateurList.value = res.data))
        .catch((err) => console.log("Utilisateur list error", err));
})

</script>
