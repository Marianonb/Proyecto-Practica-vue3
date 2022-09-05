import { reactive, toRefs } from "vue"

export default function(){
    const data = reactive ({
        todo: null,
        todos: []
    })
    function addTodo() {
        if (data.todo.length > 1) {
            data.todos.push(data.todo)
        }
        data.todo = null
    }
    function deleteTodo(index) {
        data.todos.splice(index, 1)
    }
    return{ ...toRefs(data), addTodo, deleteTodo}
}