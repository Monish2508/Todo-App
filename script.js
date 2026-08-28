function addTodo() {
    const input = document.getElementById("todoinput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTodo(this)">${task}</span>
        <button onclick="updateTodo(this)">Update</button>
        <button onclick="deleteTodo(this)">Delete</button>
    `;

    document.getElementById("todolist").appendChild(li);

    input.value = "";
}

function updateTodo(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");

    const newTask = prompt(
        "Enter the updated task:",
        span.innerText
    );

    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask.trim();
    }
}

function deleteTodo(button) {
    button.parentElement.remove();
}

function completeTodo(element) {
    element.parentElement.classList.toggle("completed");
}