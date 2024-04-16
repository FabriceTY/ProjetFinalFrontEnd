 <!--<template>
    <form>

        <div class="mb-3">
            <label for="nomAuteur" class="form-label">Nom Auteur</label>
            <input type="text" class="form-control" id="nomAuteur" v-model="auteur.nomAuteur">
        </div>
        <div class="mb-3">
            <label for="prenomAuteur" class="form-label">Prenom Auteur</label>
            <input type="text" class="form-control" id="prenomAuteur" v-model="auteur.prenomAuteur">
        </div> 
        <div class="mb-3">
            <label for="sexeAuteur" class="form-label">Sexe Auteur</label>
            <input type="text" class="form-control" id="sexeAuteur" v-model="auteur.sexeAuteur">
        </div>
        
         
        
        <button type="submit" class="btn btn-primary" @click="soumettre()">Submit</button>
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import useRayon from '@/services/serviceRayon';
import useAuteur from '@/services/serviceAuteur';

const { getAuteurById , getAllAuteurs} = useAuteur()
const { getAllRayons} = useRayon()

const router = useRouter()
const auteurList = ref([])
const rayonList=ref([])
const route = useRoute()
const { id } = route.params
const auteur = ref({
    nomAuteur: null,
    prenomAuteur: null,
    sexeAuteur: null, 
       
})


const soumettre = () => {
    console.log('Mise à jour du auteur :');
    updateAuteur(id, auteur.value)
        .then(res => {
            console.log('Mise à jour réussie :', res);
            router.push('/');
        })
        .catch(err => console.error('Erreur lors de la mise à jour du auteur :', err));
};
onBeforeMount(() => {
    getAuteurById(id)
    .then(res =>auteur.value = res.data)
    .catch(err => console.log('Erreur dans la liste des auteurs',err))

    getAllAuteurs()
        .then(res => auteurList.value = res.data)
        .catch(err => console.log('Erreur dans la liste des auteurs', err))     

     getAllRayons()
         .then(res => rayonList.value = res.data)
         .catch(err => console.log('erreur dans la liste des rayons', err))
})
</script> -->
<template>
    <form @submit.prevent="soumettre">
        <div class="mb-3">
            <label for="nomAuteur" class="form-label">Nom Auteur</label>
            <input type="text" class="form-control" id="nomAuteur" v-model="auteur.nomAuteur">
        </div>
        <div class="mb-3">
            <label for="prenomAuteur" class="form-label">Prenom Auteur</label>
            <input type="text" class="form-control" id="prenomAuteur" v-model="auteur.prenomAuteur">
        </div> 
        <div class="mb-3">
            <label for="sexeAuteur" class="form-label">Sexe Auteur</label>
            <input type="text" class="form-control" id="sexeAuteur" v-model="auteur.sexeAuteur">
        </div>
        
          
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useAuteur from '../../services/serviceAuteur';
import useRayon from '@/services/serviceRayon';

const { getAuteurById , updateAuteur, getAllAuteurs } = useAuteur();
const { getAllRayons } = useRayon();

const router = useRouter();
const auteur = ref({
    nomAuteur: null,
    prenomAuteur: null,
    sexeAuteur: null,
});
const route = useRoute();
const { id } = route.params;

const soumettre = () => {
    console.log('Mise à jour du auteur :');
    updateAuteur(id, auteur.value)
        .then(res => {
            console.log('Mise à jour réussie :', res);
            router.push('/get-auteur');
        })
        .catch(err => console.error('Erreur lors de la mise à jour du auteur :', err));
};

const auteurList = ref([]);
const rayonList = ref([]);

onBeforeMount(() => {
    getAuteurById(id)
        .then(res => auteur.value = res.data)
        .catch(err => console.log('Erreur dans la liste des auteurs',err));

    getAllAuteurs()
        .then(res => auteurList.value = res.data)
        .catch(err => console.log('Erreur dans la liste des auteurs', err));

    getAllRayons()
         .then(res => rayonList.value = res.data)
         .catch(err => console.log('erreur dans la liste des rayons', err));
})

</script> 

