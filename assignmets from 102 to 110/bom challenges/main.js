const input = document.querySelector(".input");
const add = document.querySelector(".add");
const tasks = document.querySelector(".tasks")
function addTask() {
    let task = document.createElement("div");
    task.className = "task";
    let taskValue = document.createElement("div");
    taskValue.innerHTML = `${input.value}`;
    const deleteBtn = document.createElement("div");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "Delete"
    task.appendChild(taskValue);
    task.appendChild(deleteBtn);
    tasks.appendChild(task);
    deleteBtn.addEventListener("click", function () {
        tasks.removeChild(task)
    })
    input.value = "";
}
add.addEventListener("click", addTask)