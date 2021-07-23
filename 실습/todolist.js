const todoForm = document.querySelector("#todoForm")
const todoList = document.querySelector("#todoList")
const todoInput = document.querySelector("#todoForm input")

const todos = []

const Todos_key = 'todos'

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(event){
    const li = event.target.parentElement
    li.remove()
}


function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    span.innerText=newTodo
    button.innerText = 'X'
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)

}

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    todos.push(newTodo)
    paintTodo(newTodo)
    saveToDos()

}

todoForm.addEventListener("submit", handleToDoSubmit)
