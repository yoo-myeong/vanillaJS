const todoForm = document.querySelector("#todoForm")
const todoList = document.querySelector("#todoList")
const todoInput = document.querySelector("#todoForm input")

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = todoInput.value
    
    todoInput.value = ""
}

todoForm.addEventListener("submit", handleToDoSubmit)