document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve the value entered by the user in the input field
    const newTaskText = taskInput.value;

    // Create a new task element and append it to the task list
    const newTask = document.createElement("li");
    newTask.textContent = newTaskText;
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = "";
  });
});
