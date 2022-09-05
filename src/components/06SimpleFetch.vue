<template>
    <h2>Simple Fetch</h2>
    <ul v-if="users">
        <li v-for="user in users" :key="user.id">
        {{user.name}} - {{user.email}}
        </li>
    </ul>
</template>

<script>
    import {ref, onMounted } from "vue" 
    export default {
        name: "SimpleFetch",
        setup (){
            const users = ref (null)
            onMounted(async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                users.value = await response.json()
            })

            return {users}
        }
    }
</script>