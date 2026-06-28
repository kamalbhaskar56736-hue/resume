let count = 1;

function addtask() {
  const task = document.getElementById("task");
  const taskBox = document.getElementById("taskbox");

  if (task.value === "") {
    alert("Enter a task");
    return;
  }

  const div = document.createElement("div");
  div.classList.add("task-item");

  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
    const taskNumber = count;
    count++;

    const text = document.createElement("span");
    text.textContent = taskNumber + ". " + task.value;

    updateBtn.onclick = function () {
        const newTask = prompt("Update Task");

        if (newTask !== null && newTask.trim() !== "") {
            text.textContent = taskNumber + ". " + newTask;
        }
    };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";


  delBtn.onclick = function () {
    count--;
    div.remove();
  };

  div.appendChild(text);
  div.appendChild(updateBtn);
  div.appendChild(delBtn);

  taskBox.appendChild(div);

  task.value = "";
}
