<template>
    <h2>Watch counter</h2>
    <h3>{{counter}}</h3>
    <h3>{{message}}</h3>
    <button @click="increment"> Incrementar </button>
    <button @click="decrement"> Decrementar </button>
</template>

<script>
    import { ref, watch } from 'vue'
    export default {
        name: "WatchCounter",
        setup () {
            const counter = ref(0)
            const message = ref("")

            watch(counter,()=>{
                if (counter.value==5){
                    message.value = "Counter es 5"
                } else {
                    message.value = ""
                }
            })

            const increment = () => {
            counter.value++
            }

            const decrement = () => {
            counter.value--
            }

            return{counter, message, increment, decrement}

        }       
    }
</script>