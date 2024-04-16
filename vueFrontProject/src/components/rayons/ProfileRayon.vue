<template>
       
    <div class="mb-3">
        <table class="table table-striped">
        <thead>
            <tr>                
                <th>Nom Rayon</th>
                <th>Description du Rayon</th>                
                             
            </tr>
        </thead>
        <tbody>
            <tr>                
                <td>{{ rayon.nomRayon }}</td>
                <td>{{ rayon.descriptionRayon }}</td>             
                              
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import useRayon from "@/services/serviceRayon";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const { id } = route.params

const rayon = ref({})


const { getRayonById } = useRayon()
onBeforeMount(() => {
    getRayonById(id).then(res => {
        console.log('res', res)
        rayon.value = res.data
    })
})

</script>
