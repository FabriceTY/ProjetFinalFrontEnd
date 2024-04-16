<template>
       
    <div class="mb-3">
        <table class="table table-striped">
        <thead>
            <tr>                
                <th>Titre du livre</th>
                <th>Nombre Page</th>
                <!-- <th>Auteur Id</th>
                <th>Rayon Id</th> -->
                             
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td>{{ livre.nomLivre }}</td>
                <td>{{ livre.nombrePageLivre }}</td>
                <!-- <td>{{ livre.auteurId }}</td>
                <td>{{ livre.rayonId }}</td> -->
                              
                
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import useLivre from "@/services/serviceLivre";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const { id } = route.params

const livre = ref({})


const { getLivreById } = useLivre()
onBeforeMount(() => {
    getLivreById(id).then(res => {
        console.log('res', res)
        livre.value = res.data
    })
})

</script>
