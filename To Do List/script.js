const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  const task = todoInput.value;
  if (task !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task">${task}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);
    todoInput.value = "";
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteTask);
    li.addEventListener("click", completeTask);
  }
}

function deleteTask(event) {
  const li = event.target.parentElement;
  todoList.removeChild(li);
}

function completeTask(event) {
  const li = event.target;
  li.classList.toggle("completed");
}
