var taskCount = 0;

// Yeni görev ekleme
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskCount >= 10) {
    alert("Bugünkü görev limitine ulaştınız.");
    return;
  }

  if (taskInput.value === "") {
    alert("Lütfen bir görev girin.");
    return;
  }

  var taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.innerHTML = taskInput.value + '<button onclick="deleteTask(this)">Sil</button>';
  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskCount++;
}

// Görevi silme
function deleteTask(taskElement) {
  var taskItem = taskElement.parentNode;
  taskItem.parentNode.removeChild(taskItem);
  taskCount--;
}

// Hepsini silme
function deleteAllTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  taskCount = 0;
}
