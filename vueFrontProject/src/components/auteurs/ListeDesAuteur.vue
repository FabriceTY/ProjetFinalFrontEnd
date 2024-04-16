<!-- <template>
    <h1>Liste des auteurs</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                
                <th>Nom Auteur</th>
                <th>Prenom Auteur</th>
                <th>Sexe Auteur</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="auteur in listeAuteur" :key="auteur.id">
                
                <td>{{ auteur.nomAuteur }}</td>
                <td>{{ auteur.prenomAuteur }}</td>
                <td>{{ auteur.sexeAuteur }}</td>
                
                <td><button class="btn btn-primary" @click="update(auteur.id)" >Modifier</button>
                    <button class="btn btn-success" @click="goToProfile(auteur.id)">Details</button>
                    <button class="btn btn-danger" @click="supprimer(auteur.id)">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" @click="goToAddAuteur">Ajouter un auteur </button>
   
    <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-primary position relative" @click="goToListeRayon">Gestion des rayons</button>
             
           
        <button type="button" class="btn btn-primary position relative" @click="goToListeLivre">Gestion des Livres </button>

    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useAuteur from '../../services/serviceAuteur'
import { useRouter } from "vue-router";
const { getAllAuteurs, deleteAuteur } = useAuteur()

const listeAuteur = ref([])
const router = useRouter()

const supprimer = id => {
    deleteAuteur(id)
        .then((res) => {
            console.log('suppression', res)
            getAllAuteurs()
                .then((res) => listeAuteur.value = res.data)
                .catch(err => console.log(err))
        })

        .catch(err => console.log(err))
}
const update = (id) => {
    router.push(`/update-auteur/${id}`)
}
onBeforeMount(() => {
    getAllAuteurs()
        .then((res) => listeAuteur.value = res.data)
        .catch(err => console.log(err))
})

const goToAddAuteur = () => router.push('/add-auteur')

const goToListeRayon = () => router.push('/get-rayon')
const goToListeLivre = () => router.push('/')


const goToProfile = id => {
    router.push(`/profileAuteur/${id}`)
}

</script>
<style></style> -->

<template>
    <div>
        <h1>Liste des auteurs</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nom Auteur</th>
                    <th>Prenom Auteur</th>
                    <th>Sexe Auteur</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="auteur in listeAuteur" :key="auteur.id">
                    <td>{{ auteur.nomAuteur }}</td>
                    <td>{{ auteur.prenomAuteur }}</td>
                    <td>{{ auteur.sexeAuteur }}</td>
                    <td>
                        <button class="btn btn-primary" @click="update(auteur.id)">Modifier</button>
                        <button class="btn btn-success" @click="goToProfile(auteur.id)">Details</button>
                        <button class="btn btn-danger" @click="supprimer(auteur.id)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary" @click="goToAddAuteur">Ajouter un auteur</button>

        
    </div>
    <div class="mb-3"></div>
    <div class="d-flex justify-content-around">
        <button class="btn btn-primary position relative" @click="goToListeLivre">Gestion des Livres</button>
        <button class="btn btn-primary position relative" @click="goToListeRayon">Gestion des rayons</button>
            
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useAuteur from '../../services/serviceAuteur';
import { useRouter } from "vue-router";

const { getAllAuteurs, deleteAuteur } = useAuteur();

const listeAuteur = ref([]);
const router = useRouter();

const supprimer = id => {
    deleteAuteur(id)
        .then((res) => {
            console.log('suppression', res);
            getAllAuteurs()
                .then((res) => listeAuteur.value = res.data)
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

const update = (id) => {
    router.push(`/update-auteur/${id}`);
};

onBeforeMount(() => {
    getAllAuteurs()
        .then((res) => listeAuteur.value = res.data)
        .catch(err => console.log(err));
});

const goToAddAuteur = () => router.push('/add-auteur');

const goToListeRayon = () => router.push('/get-rayon');

const goToListeLivre = () => router.push('/');

const goToProfile = id => {
    router.push(`/profileAuteur/${id}`);
};
</script>
<style></style>
