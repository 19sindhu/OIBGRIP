const newItem = document.querySelector("#new-item");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#list");
const itemsLeft = document.querySelector("#items-left");
const clearBtn = document.querySelector("#clear-btn");
let todoList = [];

function addItem() {
  event.preventDefault();
  let itemText = newItem.value;
  if (itemText !== "") {
    let newItem = {
      text: itemText,
      done: false,
    };
    todoList.push(newItem);
    updateList();
    newItem.value = "";
  }
}


function updateList() {
  list.innerHTML = "";
  itemsLeft.innerHTML = "";
  let itemsLeftCount = 0;
  todoList.forEach(function (item, index) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" id="item-${index}" ${
      item.done ? "checked" : ""
    }>
      <label for="item-${index}">${item.text}</label>
    `;
    listItem.addEventListener("change", function () {
      item.done = !item.done;
      updateList();
    });
    list.appendChild(listItem);
    if (!item.done) {
      itemsLeftCount++;
    }
  });
  itemsLeft.innerHTML = `${itemsLeftCount} item${
    itemsLeftCount !== 1 ? "s" : ""
  } left`;
}


function clearCompleted() {
  todoList = todoList.filter(function (item) {
    return !item.done;
  });
  updateList();
}

addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearCompleted);
