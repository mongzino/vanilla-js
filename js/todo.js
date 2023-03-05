const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector(".todo-list");
const toDoOpen = document.querySelector(".todo-open");
const toDoBox = document.querySelector("#todo-box");

const TODOS_KEY = "todos";

let todos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function removeTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((any) => any.id !== parseInt(li.id));
    saveTodo(); 
}

function addTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "☑️";
    button.addEventListener("click",removeTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function onToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
         id : Date.now()
        };
    todos.push(newTodoObj);
    addTodo(newTodoObj);
    saveTodo();
}

toDoForm.addEventListener("submit",onToDoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    parsedTodo.forEach(addTodo);
}

function onToDoOpen(){
    if(toDoBox.className == HIDDEN_CLASSNAME){
        toDoBox.classList.remove(HIDDEN_CLASSNAME);
        toDoOpen.innerText="🔼";}
    else{
        toDoBox.classList.add(HIDDEN_CLASSNAME);
        toDoOpen.innerText="🔽";
    }
}

toDoOpen.addEventListener("click",onToDoOpen);