<template>
    <h2>Contador sencillo</h2>
    <h3>{{ counter }}</h3>  
    <h3>{{ counterComputed }}</h3>
    <button @click="increment"> Incrementar </button>
    <button @click="decrement"> Decrementar </button>
</template>    

<script>
import {ref, computed} from 'vue'
export default {
    name: 'SimpleCounter',
    setup() {
        const counter = ref(0)
        const counterComputed = computed(()=>{
            return `El valor del Contador es ${counter.value}`
        })

        const increment = () => {
            counter.value++
        }

        const decrement = () => {
            counter.value--
        }

        return{counter, counterComputed, increment, decrement}
        
    },
}
</script>
