<template>
    <h2>Lista de Tareas</h2>
    <label for="todo">Todo</label><br/>
    <input id="todo" v-model="todo" @keypress.enter="addTodo" />
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