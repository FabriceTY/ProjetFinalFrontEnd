<template>
       
    <div class="mb-3">
        <table class="table table-striped">
        <thead>
            <tr>                
                <th>Nom auteur</th>
                <th>Prenom auteur</th>
                <th>Sexe auteur</th>
                              
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td>{{ auteur.nomAuteur }}</td>
                <td>{{ auteur.prenomAuteur }}</td>
                <td>{{ auteur.sexeAuteur}}</td>                              
                
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import useAuteur from "@/services/serviceAuteur";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const { id } = route.params

const auteur = ref({})


const { getAuteurById } = useAuteur()
onBeforeMount(() => {
    getAuteurById(id).then(res => {
        console.log('res', res)
        auteur.value = res.data
    })
})

</script>
