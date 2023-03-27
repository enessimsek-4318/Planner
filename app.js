const addBtn = document.getElementById("todo-button");

const todoInput = document.getElementById("todo-input");

const todoUl = document.getElementById("todo-ul");

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

addBtn.addEventListener("click", () => {
    if (todoInput.value.trim() === "") {
        alert("Please enter your new plan");
    } else {
        const newTodo = {
            id: new Date().getTime(),

            completed: false,

            text: todoInput.value,
        };

        createListElement(newTodo);

        todos.push(newTodo);

        localStorage.setItem("TODOS", JSON.stringify(todos))

        todoInput.value = "";
    }
})

const createListElement = (newTodo) => {

    const {
        id,
        completed,
        text
    } = newTodo;

    const li = document.createElement("li");

    li.setAttribute("id", id);

    completed ? li.classList.add("completed") : "";

    const okIcon = document.createElement("i");

    okIcon.setAttribute("class", "fas fa-check");

    li.appendChild(okIcon);

    const p = document.createElement("p");

    const pTextNode = document.createTextNode(text);

    p.appendChild(pTextNode);

    li.appendChild(p);

    const deleteIcon = document.createElement("i");

    deleteIcon.setAttribute("class", "fas fa-trash");

    li.appendChild(deleteIcon);

    todoUl.appendChild(li);

};

todoUl.addEventListener("click", (event) => {
    const Id = event.target.parentElement.getAttribute("id");

    if (event.target.classList.contains("fa-trash")) {
        event.target.parentElement.remove();
        todos = todos.filter((todo) => todo.id !== Number(Id));
        localStorage.setItem("TODOS", JSON.stringify(todos));
    }
    if (event.target.classList.contains("fa-check")) {
        event.target.parentElement.classList.toggle("completed");
    }
});

todoInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        addBtn.click();
    }
});

const renderSavedTodos = () => {
    todos.forEach((todo) => {
        createListElement(todo);
    })
}

renderSavedTodos();

window.onload = () => {
    todoInput.focus()
};