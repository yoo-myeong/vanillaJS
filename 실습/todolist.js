const todoForm = document.querySelector("#todoForm")
const todoList = document.querySelector("#todoList")
const todoInput = document.querySelector("#todoForm input")

let todos = []

const Todos_key = 'todos'

function saveToDos(){
    localStorage.setItem(Todos_key, JSON.stringify(todos))
}

function deleteTodo(event){
    const li = event.target.parentElement
    li.remove()
}


function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    span.innerText=newTodo.text
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
    const todosObj = {
        todos : newTodo,
        id : Date.now(),
    }
    todos.push(todosObj)
    paintTodo(todosObj)
    saveToDos()

}


const savedTodos = localStorage.getItem(Todos_key)

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos
    parsedTodos.forEach(paintTodo)
    
}


todoForm.addEventListener("submit", handleToDoSubmit)