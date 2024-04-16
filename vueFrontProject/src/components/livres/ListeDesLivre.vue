<template>
    
        <h1>Liste des livres</h1>  

   
        <div class="mb-3">
            <table class="table table-striped">
                <thead class="rounded">
                    <tr>
                        <th>Nom</th>
                        <th>Nombre Page</th>
                        <th>Auteur Id</th>
                        <th>Rayon Id</th>
                        <th>Utilisateur Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="livre in listeLivre" :key="livre.id">
                        <td>{{ livre.nomLivre }}</td>
                        <td>{{ livre.nombrePageLivre }}</td>
                        <td>{{ livre.auteurId }}</td>
                        <td>{{ livre.rayonId }}</td>
                        <td>{{ livre.utilisateurId }}</td>

                        <td>
                            <button type="button" class="btn btn-primary position relative" @click="update(livre.id)">
                                Modifier
                            </button>
                            <button type="button" class="btn btn-success position relative"
                                @click="goToProfile(livre.id)">
                                Details
                            </button>
                            <button type="button" class="btn btn-danger position relative" @click="supprimer(livre.id)">
                                Supprimer
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-primary position relative" @click="goToAddLivre">
                Ajouter un livre
            </button>
        </div>
        <div class="mb-3"></div>
        <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-primary position relative" @click="goToListeRayon">
                Gestion des rayons
            </button>

            <button type="button" class="btn btn-primary position relative" @click="goToListeAuteur">
                Gestion des auteurs
            </button>
            </div>
            <!-- <div class="mb-3"></div>
            <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-primary position relative" @click="goToListeUtilisateur">
                Gestion des utilisateurs
            </button>
            <button type="button" class="btn btn-primary position relative" @click="goToListeRole">
                Gestion des roles
            </button>
        </div> -->
        <div class="mb-3"></div>
            <div class="d-flex justify-content-around">

            <button type="button" class="btn btn-primary position relative" @click="goToLogin">
                Gestion Administrative
            </button>
        </div>
    
    
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useLivre from "../../services/serviceLivre";
import { useRouter } from "vue-router";
const { getAllLivres, deleteLivre } = useLivre();

const listeLivre = ref([]);
const router = useRouter();

const supprimer = (id) => {
    deleteLivre(id)
        .then((res) => {
            console.log("suppression", res);
            getAllLivres()
                .then((res) => (listeLivre.value = res.data))
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};
const update = (id) => {
    router.push(`/update-livre/${id}`);
};
onBeforeMount(() => {
    getAllLivres()
        .then((res) => (listeLivre.value = res.data))
        .catch((err) => console.log(err));
});

const goToAddLivre = () => router.push("/add-livre");

const goToListeRayon = () => router.push("/get-rayon");
const goToListeAuteur = () => router.push("/get-auteur");
const goToListeUtilisateur = () => router.push("/get-utilisateur");
const goToListeRole = () => router.push("/get-role");
const goToLogin = () => router.push("/login");

const goToProfile = (id) => {
    router.push(`/profileLivre/${id}`);
};
</script>
<style scoped>
/* Ajout de styles pour aligner les éléments verticalement */
/* .mb-3 button {
        margin-bottom: 10px;
        display: inline-block;
    } */
</style>

