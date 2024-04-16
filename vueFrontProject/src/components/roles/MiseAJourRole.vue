<template>
    <form @submit.prevent="soumettre">
        <div class="mb-3">
            <label for="nomRole" class="form-label">Nom Role</label>
            <input type="text" class="form-control" id="nomRole" v-model="role.nomRole">
        </div>
        <div class="mb-3">
            <label for="descriptionRole" class="form-label">Description Role</label>
            <input type="text" class="form-control" id="descriptionRole" v-model="role.descriptionRole">
        </div>      
        <div class="mb-3">
            <label for="typeRole" class="form-label">Type Role</label>
            <input type="text" class="form-control" id="typeRole" v-model="role.typeRole">
        </div>   
        
           
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useRole from '../../services/serviceRole';


const { getRoleById , updateRole, getAllRoles } = useRole();


const router = useRouter();
const role = ref({
    nomRole: null,
    descriptionRole: null,
    typeRole: null,
    
});
const route = useRoute();
const { id } = route.params;

const soumettre = () => {
    console.log('Mise à jour du role :');
    updateRole(id, role.value)
        .then(res => {
            console.log('Mise à jour réussie :', res);
            router.push('/get-role');
        })
        .catch(err => console.error('Erreur lors de la mise à jour du role :', err));
};

const roleList = ref([]);


onBeforeMount(() => {
    getRoleById(id)
        .then(res => role.value = res.data)
        .catch(err => console.log('Erreur dans la liste des roles',err));

    getAllRoles()
        .then(res => roleList.value = res.data)
        .catch(err => console.log('Erreur dans la liste des roles', err));

    getAllRoles()
         .then(res => roleList.value = res.data)
         .catch(err => console.log('erreur dans la liste des roles', err));
});
</script>

