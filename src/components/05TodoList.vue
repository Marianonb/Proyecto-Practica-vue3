<template>
    <h2>Lista de Tareas</h2>
    <label for="todo">Todo</label><br/>
    <input id="todo" v-model="todo" @keypress.enter="addTodo" />
    <ul>
        <li v-for="(t,index) in todos" :key="index">
          {{t}} <span @click="deleteTodo(index)">x</span>
        </li>
    </ul>
</template>

<script>
    import useTodos from '@/composables/useTodos';
    export default {
        name: "TodoList",
        setup(){
            const {todo, todos, addTodo, deleteTodo} = useTodos()
            return {todo, todos, addTodo, deleteTodo }
        }

    }
</script>