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
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveToDos()
    openModal()
}


function paintTodo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.style = "background-color:transparent; border:0px; outline:0px"
    span.style = "font-size : 30px;"
    span.innerText=newTodo.text
    button.innerText = '❌'
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
        text : newTodo,
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