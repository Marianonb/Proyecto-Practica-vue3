import { reactive, toRefs } from "vue"

export default function(){
    const data = reactive ({
        todo: null,
        todo: []
    })
    const addTodo = () => {
        if(data.todo.length > 1){
           data.todo.push(data.todo)
        }
        data.todo = null
    }
    const deleteTodo = (index) => {
        data.todo.splice(index, 1)
    }
    return{ ...toRefs(data), addTodo, deleteTodo}
}