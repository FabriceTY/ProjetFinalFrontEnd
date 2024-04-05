<template>
    <h1>Liste des livres</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                
                <th>Nom</th>
                <th>Nombre Page</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="livre in listeLivre" :key="livre.id">
                
                <td>{{ livre.nomLivre }}</td>
                <td>{{ livre.nombrePageLivre }}</td>
                
                <td><button class="btn btn-primary" @click="update(livre.id)" >Update</button>
                    <button class="btn btn-success" @click="goToProfile(livre.id)">Details</button>
                    <button class="btn btn-danger" @click="supprimer(livre.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" @click="goToAddBook">Ajouter un livre </button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useLivre from '../../services/serviceLivre'
import { useRouter } from "vue-router";
const { getAllBooks, deleteBook } = useLivre()

const listeLivre = ref([])
const router = useRouter()

const supprimer = id => {
    deleteBook(id)
        .then((res) => {
            console.log('suppression', res)
            getAllBooks()
                .then((res) => listeLivre.value = res.data)
                .catch(err => console.log(err))
        })

        .catch(err => console.log(err))
}
const update = (id) => {
    router.push(`/update-student/${id}`)
}
onBeforeMount(() => {
    getAllBooks()
        .then((res) => listeLivre.value = res.data)
        .catch(err => console.log(err))
})

const goToAddBook = () => router.push('/add-student')

const goToProfile = id => {
    router.push(`/profile/${id}`)
}

</script>
<style></style>
