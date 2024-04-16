<template>   
    <form>
        <div class="mb-3">
            <h1>Formulaire d'ajout d'un utilisateur.</h1>
        </div>
        <div class="mb-3">
            <label for="nomUtilisateur" class="form-label">Nom Utilisateur</label>
            <input type="text" class="form-control" id="nomUtilisateur" v-model="utilisateur.nomUtilisateur" />
        </div>
        <div class="mb-3">
            <label for="prenomUtilisateur" class="form-label">Prenom Utilisateur </label>
            <input type="text" class="form-control" id="prenomUtilisateur" v-model="utilisateur.prenomUtilisateur" />
        </div>
        <div class="mb-3">
            <label for="motDePasseUtilisateur" class="form-label">Mot de Passe </label>
            <input type="text" class="form-control" id="motDePasseUtilisateur" v-model="utilisateur.motDePasseUtilisateur" />
        </div>
        <div class="mb-3">
            <label for="emailUtilisateur" class="form-label">Email</label>
            <input type="text" class="form-control" id="emailUtilisateur" v-model="utilisateur.emailUtilisateur" />
        </div>
        <div class="mb-3">
                <label for="role" class="form-label">Roles</label>
                <select id="role" class="form-select" v-model="utilisateur.roleId">
                    <option disabled value="">Choisir un role</option>
                    <option v-for="role in roleList" :value="role.id" :key="role.id">
                        {{ role.nomRole }}
                    </option>
                </select>
            </div>       

        <div class="d-flex justify-content-around">
            
            <button type="submit" class="btn btn-success position relative" @click="soumettre">
                Soumettre
            </button>
            <button type="button" class="btn btn-primary position relative" @click="goToListeUtilisateur()">
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
import useRole from "@/services/serviceRole";
import useUtilisateur from "@/services/serviceUtilisateur";



//import {useUtilisateur} from '@/services/serviceUtilisateur'
const { addUtilisateur } = useUtilisateur();

const { getAllRoles } = useRole();


const router = useRouter();
const roleList = ref([]);
const utilisateur = ref({
    nomUtilisateur: null,
    prenomUtilisateur: null,
    motDePasseUtilisateur: null,
    emailUtilisateur: null,
    roleId:null,
});

const formData = new FormData();

const soumettre = () => {
    // for(let clef in utilisateur.value){
    //     formData.append(clef, utilisateur.value[clef])
    // }

    addUtilisateur(utilisateur.value)
        .then((res) => {
            console.log(res);
            router.push("/get-utilisateur");
        })
        .catch((err) => console.log("erreur", err));
    console.log("utilisateur", utilisateur.value);
};
const goToListeUtilisateur = () => router.push("/get-utilisateur");

onBeforeMount(() => {
    getAllRoles()
        .then((res) => (roleList.value = res.data))
        .catch((err) => console.log("Erreur dans la liste des utilisateurs", err));

   });
</script>
