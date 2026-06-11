document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render saved tasks on page load
  tasks.forEach(renderTask);

  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);

    renderTask(newTask);
    saveTasks();

    todoInput.value = "";
    todoInput.focus();
  });

  function renderTask(task) {
    const li = document.createElement("li");

    li.setAttribute("data-id", task.id);

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;

    // Toggle completion
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      task.completed = !task.completed;
      li.classList.toggle("completed");

      saveTasks();
    });

    // Delete task
    const deleteBtn = li.querySelector("button");

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      tasks = tasks.filter((t) => t.id !== task.id);

      li.remove();

      saveTasks();
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
