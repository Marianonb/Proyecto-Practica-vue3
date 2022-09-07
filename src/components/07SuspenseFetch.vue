<template>
    <h2>Suspense Fetch</h2>
    <ul v-if="users">
        <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        </li>
    </ul>
</template>

<script>
import {ref} from "vue";
    export default {
        name: "SuspenseFetch",
        async setup () {
            const users = ref(null);

            const fetchData = async => {
              return new Promise( async (resolve) => {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                setTimeout( () => {
                    resolve (response.json())
                }, 5000)
              })
            }
            users.value = await fetchData()

            
            return {users};
        }
    }
</script>