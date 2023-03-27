const addBtn = document.getElementById("todo-button");

const todoInput = document.getElementById("todo-input");

const todoUl = document.getElementById("todo-ul");

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
        todoInput.value="";
    }
})

const createListElement = (newTodo) => {

    const {id,completed,text}=newTodo;

    const li = document.createElement("li");

    li.setAttribute("id", id);

    completed ? li.classList.add("completed"):"";
    
    const okIcon=document.createElement("i");

    okIcon.setAttribute("class","fas fa-check");

    li.appendChild(okIcon);

    const p =document.createElement("p");

    const pTextNode = document.createTextNode(text);

    p.appendChild(pTextNode);

    li. appendChild(p);

    const deleteIcon=document.createElement("i");

    deleteIcon.setAttribute("class","fas fa-trash");

    li.appendChild(deleteIcon);

    todoUl.appendChild(li);

};

todoUl.addEventListener("click", (event) =>{
    if (event.target.classList.contains("fa-trash")) {
        event.target.parentElement.remove();
    }
    if(event.target.classList.contains("fa-check")){
        event.target.parentElement.classList.toggle("completed");
    }
})

todoInput.addEventListener("keydown",(event)=>{
    if (event.code==="Enter") {
        addBtn.click();
    }
});

window.onload=()=>{todoInput.focus()};